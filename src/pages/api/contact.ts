import type { APIRoute } from "astro";
import {
  contactSchema,
  sendContactEmail,
  verifyTurnstile,
} from "~/lib/contact";

export const prerender = false;

export const POST: APIRoute = async ({ request, clientAddress }) => {
  // The ES form posts to `/api/contact?lang=es` so the visitor lands back
  // on the Spanish page. Field names and validation are unchanged.
  const page =
    new URL(request.url).searchParams.get("lang") === "es"
      ? "/es/contact"
      : "/contact";
  const redirect = (query: string) =>
    new Response(null, { status: 303, headers: { Location: `${page}?${query}` } });

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return redirect("status=error&reason=bad-request");
  }

  const payload = {
    name: (form.get("name") ?? "").toString(),
    email: (form.get("email") ?? "").toString(),
    whatsapp: (form.get("whatsapp") ?? "").toString(),
    company: (form.get("company") ?? "").toString(),
    projectType: (form.get("projectType") ?? "").toString(),
    referralSource: (form.get("referralSource") ?? "").toString(),
    message: (form.get("message") ?? "").toString(),
    website: (form.get("website") ?? "").toString(),
  };

  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    const firstIssue = parsed.error.issues[0]?.message ?? "Invalid input.";
    return redirect(
      `status=error&reason=${encodeURIComponent(firstIssue)}`,
    );
  }

  const token = form.get("cf-turnstile-response")?.toString() ?? null;
  const human = await verifyTurnstile(token, clientAddress ?? null);
  if (!human) {
    return redirect("status=error&reason=captcha");
  }

  try {
    await sendContactEmail(parsed.data);
  } catch (err) {
    console.error("[contact] send failed:", err);
    return redirect("status=error&reason=send");
  }

  return redirect("status=success");
};
