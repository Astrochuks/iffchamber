import { Resend } from "resend";

export const runtime = "nodejs";

type Payload = {
  name?: unknown;
  organization?: unknown;
  email?: unknown;
  role?: unknown;
  sector?: unknown;
  engagement?: unknown;
  message?: unknown;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX = { short: 200, long: 5000 };

function asString(v: unknown, max: number): string {
  if (typeof v !== "string") return "";
  return v.trim().slice(0, max);
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = asString(body.name, MAX.short);
  const organization = asString(body.organization, MAX.short);
  const email = asString(body.email, MAX.short);
  const role = asString(body.role, MAX.short);
  const sector = asString(body.sector, MAX.short);
  const engagement = asString(body.engagement, MAX.short);
  const message = asString(body.message, MAX.long);

  if (!name || !organization || !email || !message) {
    return Response.json(
      { error: "Missing required fields" },
      { status: 400 },
    );
  }
  if (!EMAIL_RE.test(email)) {
    return Response.json({ error: "Invalid email" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return Response.json({ error: "Server misconfigured" }, { status: 500 });
  }

  const resend = new Resend(apiKey);

  const subject = `New brief — ${name}, ${organization}`;
  const lines = [
    `Name: ${name}`,
    `Organization: ${organization}`,
    `Email: ${email}`,
    role && `Role: ${role}`,
    sector && `Sector: ${sector}`,
    engagement && `Engagement: ${engagement}`,
    "",
    "Message:",
    message,
  ].filter(Boolean) as string[];
  const text = lines.join("\n");

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color: #1a1a17; line-height: 1.55; max-width: 560px;">
      <p style="font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase; color: #b8841f; margin: 0 0 12px;">New brief</p>
      <h2 style="font-size: 22px; font-weight: 500; margin: 0 0 24px;">${escapeHtml(name)} · ${escapeHtml(organization)}</h2>
      <table style="font-size: 14px; border-collapse: collapse;">
        <tr><td style="padding: 4px 16px 4px 0; color: #777;">Email</td><td><a href="mailto:${escapeHtml(email)}" style="color: #4a6b3a;">${escapeHtml(email)}</a></td></tr>
        ${role ? `<tr><td style="padding: 4px 16px 4px 0; color: #777;">Role</td><td>${escapeHtml(role)}</td></tr>` : ""}
        ${sector ? `<tr><td style="padding: 4px 16px 4px 0; color: #777;">Sector</td><td>${escapeHtml(sector)}</td></tr>` : ""}
        ${engagement ? `<tr><td style="padding: 4px 16px 4px 0; color: #777;">Engagement</td><td>${escapeHtml(engagement)}</td></tr>` : ""}
      </table>
      <hr style="border: none; border-top: 1px solid #e0ddd5; margin: 24px 0;">
      <div style="white-space: pre-wrap; font-size: 15px;">${escapeHtml(message)}</div>
    </div>
  `;

  const { error } = await resend.emails.send({
    from: "IFF CHAMBER <forms@iffchamber.com>",
    to: ["engage@iffchamber.com"],
    replyTo: email,
    subject,
    text,
    html,
  });

  if (error) {
    console.error("Resend send failed", error);
    return Response.json({ error: "Could not send" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
