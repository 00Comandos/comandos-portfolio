import { z } from "zod";

export const PROJECT_TYPES = [
  "MVP / Pilot",
  "Product Strategy",
  "Design System",
  "UX Research",
  "Growth / Experimentation",
  "Full Product Redesign",
  "Other",
] as const;

export const REFERRAL_SOURCES = [
  "Google search",
  "ChatGPT",
  "Claude",
  "Perplexity",
  "Gemini",
  "LinkedIn",
  "X / Twitter",
  "Referral / Word of mouth",
  "Conference or event",
  "Read a case study",
  "Other",
] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please share your name.").max(120),
  email: z.email("Enter a valid email.").trim().toLowerCase(),
  company: z.string().trim().max(200).optional().default(""),
  projectType: z.enum(PROJECT_TYPES, { message: "Select a project type." }),
  referralSource: z
    .enum(REFERRAL_SOURCES, { message: "Let us know how you found us." }),
  message: z
    .string()
    .trim()
    .min(10, "Tell us a bit more (10+ characters).")
    .max(4000),
  // Honeypot — must remain empty.
  website: z.string().max(0).optional().default(""),
});

export type ContactInput = z.infer<typeof contactSchema>;

export async function verifyTurnstile(
  token: string | null,
  ip: string | null,
): Promise<boolean> {
  const secret = import.meta.env.TURNSTILE_SECRET_KEY;
  if (!secret) return !import.meta.env.PROD;
  if (!token) return false;

  const body = new FormData();
  body.append("secret", secret);
  body.append("response", token);
  if (ip) body.append("remoteip", ip);

  const res = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    { method: "POST", body },
  );
  if (!res.ok) return false;
  const data = (await res.json()) as { success: boolean };
  return data.success === true;
}

export async function sendContactEmail(input: ContactInput): Promise<void> {
  const apiKey = import.meta.env.RESEND_API_KEY;
  const from = import.meta.env.CONTACT_FROM_EMAIL;
  const to = import.meta.env.CONTACT_TO_EMAIL;

  if (!apiKey || !from || !to) {
    // Dev / pre-production: log to stdout so submissions are never silently lost.
    console.info("[contact] submission (email not sent — Resend not configured):", {
      name: input.name,
      email: input.email,
      company: input.company,
      projectType: input.projectType,
      message: input.message,
    });
    return;
  }

  const { Resend } = await import("resend");
  const resend = new Resend(apiKey);

  const subject = `New lead — ${input.projectType} — ${input.name}`;
  const escape = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const rows: Array<[string, string]> = [
    ["Name", escape(input.name)],
    ["Email", `<a href="mailto:${escape(input.email)}" style="color:#0b0b0b">${escape(input.email)}</a>`],
    ["Company", escape(input.company || "—")],
    ["Project type", escape(input.projectType)],
    ["Heard via", escape(input.referralSource)],
    ["Message", escape(input.message)],
  ];

  const rowHtml = rows
    .map(
      ([label, value], i) => `
      <tr>
        <td style="padding:14px 16px;width:140px;color:#666;font-weight:600;border-bottom:${
          i === rows.length - 1 ? "none" : "1px solid #ececec"
        };vertical-align:top;background:#fafafa">${label}</td>
        <td style="padding:14px 16px;border-bottom:${
          i === rows.length - 1 ? "none" : "1px solid #ececec"
        };white-space:pre-wrap;line-height:1.55">${value}</td>
      </tr>`,
    )
    .join("");

  const html = `
<!DOCTYPE html>
<html><body style="margin:0;padding:32px 16px;background:#f4f4f4;font-family:Inter,Helvetica,Arial,sans-serif">
  <table role="presentation" style="width:100%;max-width:600px;margin:0 auto;border-collapse:collapse;background:#ffffff;border:1px solid #ececec;border-radius:8px;overflow:hidden">
    <tr>
      <td style="padding:24px;background:#0b0b0b;color:#ffffff">
        <h1 style="margin:0;font-size:18px;font-weight:600;letter-spacing:-0.01em">New lead — Comandos Studio</h1>
        <p style="margin:4px 0 0;font-size:13px;color:#bdbdbd">Inbound from comandos.me/contact</p>
      </td>
    </tr>
    <tr>
      <td style="padding:0">
        <table role="presentation" style="width:100%;border-collapse:collapse;font-size:14px;color:#0b0b0b">
          ${rowHtml}
        </table>
      </td>
    </tr>
    <tr>
      <td style="padding:16px 24px;background:#fafafa;border-top:1px solid #ececec;font-size:12px;color:#666">
        Reply directly to this email to respond to <strong>${escape(input.name)}</strong>.
      </td>
    </tr>
  </table>
</body></html>`.trim();

  const { error } = await resend.emails.send({
    from,
    to,
    subject,
    replyTo: input.email,
    html,
  });

  if (error) throw new Error(`Resend failed: ${error.message ?? "unknown"}`);
}
