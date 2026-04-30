"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

const ENGAGEMENT_TYPES = [
  "Strategy engagement",
  "Policy advisory",
  "Research partnership",
  "Field program",
  "Capacity building",
  "General inquiry",
];

const SECTORS = [
  "Government / ministry",
  "Multilateral",
  "Development finance",
  "Foundation / philanthropy",
  "Agri-corporate / industry",
  "NGO / civil society",
  "Other",
];

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const j = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(j.error || "Submission failed");
      }
      setState("success");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Submission failed");
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="border border-moss/40 bg-moss/5 p-8 md:p-10 rounded-sm">
        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-amber mb-4">
          Received
        </div>
        <h3
          className="font-display font-medium text-ink leading-[1.1]"
          style={{ fontSize: "clamp(1.5rem, 2.6vw, 2rem)" }}
        >
          Thank you. A partner will be in touch.
        </h3>
        <p className="mt-4 font-body text-[16px] leading-[1.6] text-ink-soft max-w-lg">
          We've received your brief and will respond personally within two working days. For urgent matters, email{" "}
          <a href="mailto:engage@iffchamber.com" className="text-moss hover:text-amber underline decoration-1 underline-offset-2">
            engage@iffchamber.com
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field label="Name" name="name" required />
        <Field label="Organization" name="organization" required />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field label="Email" name="email" type="email" required />
        <Field label="Role / title" name="role" />
      </div>

      <Select label="Sector" name="sector" options={SECTORS} />
      <Select label="Engagement type" name="engagement" options={ENGAGEMENT_TYPES} />

      <div>
        <label className="block font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute mb-3">
          Tell us what you're working on
        </label>
        <textarea
          name="message"
          rows={6}
          required
          placeholder="A few sentences on the context, the ask, and what a good outcome looks like."
          className="w-full bg-transparent border-b border-ink/30 focus:border-ink py-3 font-body text-[16px] leading-[1.55] text-ink placeholder:text-ink-mute/60 resize-none focus:outline-none transition-colors"
        />
      </div>

      <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-4">
        <button
          type="submit"
          disabled={state === "submitting"}
          className="inline-flex items-center justify-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-bone bg-ink hover:bg-moss disabled:opacity-60 disabled:cursor-not-allowed transition-colors px-7 py-4 rounded-full"
        >
          {state === "submitting" ? "Submitting…" : "Submit brief"}
          {state !== "submitting" && <span aria-hidden>→</span>}
        </button>
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
          Responded to within 2 working days
        </p>
      </div>

      {state === "error" && (
        <p className="font-mono text-[11px] tracking-[0.04em] text-amber">
          {errorMsg}. Please try again, or email{" "}
          <a href="mailto:engage@iffchamber.com" className="underline decoration-1 underline-offset-2 hover:text-moss">
            engage@iffchamber.com
          </a>{" "}
          directly.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute mb-3">
        {label}
        {required && <span className="text-amber ml-1">●</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-transparent border-b border-ink/30 focus:border-ink py-3 font-body text-[16px] text-ink placeholder:text-ink-mute/60 focus:outline-none transition-colors"
      />
    </div>
  );
}

function Select({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <div>
      <label className="block font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute mb-3">
        {label}
      </label>
      <select
        name={name}
        defaultValue=""
        className="w-full bg-transparent border-b border-ink/30 focus:border-ink py-3 font-body text-[16px] text-ink focus:outline-none transition-colors appearance-none cursor-pointer"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'><path d='M1 1l5 5 5-5' stroke='%231A1A17' stroke-width='1.2' fill='none'/></svg>\")",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 0.5rem center",
          paddingRight: "1.75rem",
        }}
      >
        <option value="" disabled>
          Select…
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
