"use client";

import { useRef, useState } from "react";
import { usePathname } from "next/navigation";

interface EmailCaptureProps {
  headline?: string;
  subheading?: string;
  cta?: string;
  successMessage?: string;
  /** Where this capture is placed on the page */
  sourceType?: "inline-cta" | "footer" | "exit-intent" | "magnet-cta";
  /** Which magnet this capture is offering, if any */
  firstMagnet?: string;
  /** Optional explicit override for SOURCE_PAGE (defaults to current pathname) */
  sourcePage?: string;
  /** Topic for email segmentation (e.g. "tax", "pension", "cost-of-living") */
  guideTopic?: string;
}

export default function EmailCapture({
  headline = "Get the UK to Dubai Relocation Checklist — Free",
  subheading = "Everything you need to do before you leave, covering visas, HMRC, banking, removals and schools. Used by 500+ UK expats.",
  cta = "Send me the checklist →",
  successMessage = "✓ Check your inbox — confirm your email and your checklist is on its way.",
  sourceType = "inline-cta",
  firstMagnet = "dx-relocation-checklist",
  sourcePage,
  guideTopic = "relocation",
}: EmailCaptureProps) {
  const pathname = usePathname();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle"
  );

  // Re-entry guard: a useRef sets synchronously, so a fast double-click
  // (or a mobile double-tap) can't race past the button-disabled state
  // before React commits it. Without this, the same /api/subscribe call
  // fires twice → two identical magnet emails delivered. (28 Apr 2026.)
  const submittingRef = useRef(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (submittingRef.current) return;
    if (!email || !email.includes("@")) return;
    submittingRef.current = true;
    setStatus("loading");

    // The response is now inspected. Until 2026-08-06 this was a bare
    // `await fetch(...)` followed by setStatus("done"), so the form showed
    // success even when the API returned 500 (Brevo env missing) or 502
    // (Brevo rejected the request) and nothing had been stored.
    // (Plumbing audit 2026-08-06, finding A3.)
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          sourcePage: sourcePage || pathname || "unknown",
          sourceType,
          firstMagnet,
          guideTopic,
        }),
      });

      // A non-2xx that still carries contactCreated means the subscriber IS
      // stored and only the magnet email failed — the API retries that, so
      // showing success is honest. Anything else is a real failure.
      const data = await res.json().catch(() => ({}));
      if (!res.ok && data.contactCreated !== true) {
        setStatus("error");
        submittingRef.current = false;
        return;
      }
    } catch {
      setStatus("error");
      submittingRef.current = false;
      return;
    }

    setStatus("done");
  }

  if (status === "error") {
    return (
      <section className="rounded-2xl bg-[#0A1628] px-6 py-10 text-center shadow-md sm:px-10">
        <div className="mx-auto max-w-lg">
          <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-red-500/20 text-2xl">
            !
          </div>
          <p className="text-lg font-semibold text-red-300">
            Something went wrong
          </p>
          <p className="mt-2 text-sm text-slate-300">
            We could not sign you up just then. Please try again.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-5 rounded-xl bg-[#C9A84C] px-6 py-3 text-sm font-bold text-[#0A1628] transition hover:bg-[#d5b760] active:scale-95"
          >
            Try again
          </button>
        </div>
      </section>
    );
  }

  if (status === "done") {
    return (
      <section className="rounded-2xl bg-[#0A1628] px-6 py-10 text-center shadow-md sm:px-10">
        <div className="mx-auto max-w-lg">
          <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#C9A84C]/20 text-2xl">
            ✓
          </div>
          <p className="text-lg font-semibold text-[#C9A84C]">{successMessage}</p>
          <p className="mt-2 text-sm text-slate-300">
            Your checklist should arrive in the next few minutes.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="rounded-2xl bg-[#0A1628] px-6 py-10 shadow-md sm:px-10">
      <div className="mx-auto max-w-2xl">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#C9A84C]/15 px-3 py-1 text-xs font-semibold text-[#C9A84C] ring-1 ring-[#C9A84C]/30">
          <span className="h-1.5 w-1.5 rounded-full bg-[#C9A84C]" />
          Free
        </div>

        <h2 className="text-2xl font-bold text-white sm:text-3xl">{headline}</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">{subheading}</p>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            disabled={status === "loading"}
            className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-[#C9A84C]/50 focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/20 disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="flex-shrink-0 rounded-xl bg-[#C9A84C] px-6 py-3 text-sm font-bold text-[#0A1628] transition hover:bg-[#d5b760] active:scale-95 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "loading" ? "Sending…" : cta}
          </button>
        </form>

        <p className="mt-3 text-xs text-slate-500">
          No spam. Double opt-in. Unsubscribe any time. We&apos;re GDPR compliant.
        </p>
      </div>
    </section>
  );
}
