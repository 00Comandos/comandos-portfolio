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

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please share your name.").max(120),
  email: z.email("Enter a valid email.").trim().toLowerCase(),
  company: z.string().trim().max(200).optional().default(""),
  projectType: z.enum(PROJECT_TYPES, { message: "Select a project type." }),
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
  if (!secret) return true; // Turnstile not configured — skip (dev).
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

  const subject = `New inquiry — ${input.projectType} — ${input.name}`;
  const escape = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const html = `
    <h2 style="font-family:Inter,sans-serif;margin:0 0 12px">New contact form submission</h2>
    <table style="font-family:Inter,sans-serif;font-size:14px;border-collapse:collapse">
      <tr><td style="padding:6px 12px 6px 0;color:#666">Name</td><td>${escape(input.name)}</td></tr>
      <tr><td style="padding:6px 12px 6px 0;color:#666">Email</td><td><a href="mailto:${escape(input.email)}">${escape(input.email)}</a></td></tr>
      <tr><td style="padding:6px 12px 6px 0;color:#666">Company</td><td>${escape(input.company || "—")}</td></tr>
      <tr><td style="padding:6px 12px 6px 0;color:#666">Project type</td><td>${escape(input.projectType)}</td></tr>
    </table>
    <h3 style="font-family:Inter,sans-serif;margin:20px 0 6px">Message</h3>
    <p style="font-family:Inter,sans-serif;font-size:14px;line-height:1.55;white-space:pre-wrap">${escape(input.message)}</p>
  `.trim();

  const { error } = await resend.emails.send({
    from,
    to,
    subject,
    replyTo: input.email,
    html,
  });

  if (error) throw new Error(`Resend failed: ${error.message ?? "unknown"}`);
}
