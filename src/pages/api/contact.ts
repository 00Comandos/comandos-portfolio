import type { APIRoute } from "astro";
import {
  contactSchema,
  sendContactEmail,
  verifyTurnstile,
} from "~/lib/contact";

export const prerender = false;

function redirect(url: string) {
  return new Response(null, { status: 303, headers: { Location: url } });
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return redirect("/contact?status=error&reason=bad-request");
  }

  const payload = {
    name: (form.get("name") ?? "").toString(),
    email: (form.get("email") ?? "").toString(),
    company: (form.get("company") ?? "").toString(),
    projectType: (form.get("projectType") ?? "").toString(),
    message: (form.get("message") ?? "").toString(),
    website: (form.get("website") ?? "").toString(),
  };

  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    const firstIssue = parsed.error.issues[0]?.message ?? "Invalid input.";
    return redirect(
      `/contact?status=error&reason=${encodeURIComponent(firstIssue)}`,
    );
  }

  const token = form.get("cf-turnstile-response")?.toString() ?? null;
  const human = await verifyTurnstile(token, clientAddress ?? null);
  if (!human) {
    return redirect("/contact?status=error&reason=captcha");
  }

  try {
    await sendContactEmail(parsed.data);
  } catch (err) {
    console.error("[contact] send failed:", err);
    return redirect("/contact?status=error&reason=send");
  }

  return redirect("/contact?status=success");
};
