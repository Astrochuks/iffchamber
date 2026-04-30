"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Wordmark } from "./Wordmark";

const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Practice", href: "/what-we-do" },
  { label: "Sectors", href: "/who-we-serve" },
  { label: "Insights", href: "/insights" },
  { label: "Impact", href: "/impact" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-bone/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1480px] items-center justify-between px-6 py-5 md:px-12 md:py-7 relative z-[70]">
          <Link href="/" onClick={close} className="block" aria-label="IFF CHAMBER home">
            <Wordmark size="md" />
          </Link>

          <nav className="hidden lg:flex items-center gap-9">
            {NAV.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative font-mono text-[10.5px] uppercase tracking-[0.22em] transition-colors duration-300 ${
                    active ? "text-amber" : "text-ink hover:text-moss"
                  }`}
                >
                  {item.label}
                  {active && (
                    <span
                      aria-hidden
                      className="absolute left-0 right-0 -bottom-2 h-px bg-amber"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.22em] text-bone bg-ink hover:bg-moss transition-colors duration-300 px-4 py-2.5 rounded-full"
          >
            Engage
            <span aria-hidden>→</span>
          </Link>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="lg:hidden flex flex-col items-end justify-center gap-[5px] w-9 h-9 -mr-2"
          >
            <span
              className={`block h-[1.5px] bg-ink transition-all duration-[400ms] ease-[cubic-bezier(0.65,0.05,0.36,1)] ${
                open ? "w-6 rotate-45 translate-y-[3.5px]" : "w-6"
              }`}
            />
            <span
              className={`block h-[1.5px] bg-ink transition-all duration-[400ms] ease-[cubic-bezier(0.65,0.05,0.36,1)] ${
                open ? "w-6 -rotate-45 -translate-y-[3px]" : "w-4"
              }`}
            />
          </button>
        </div>
        <div className="rule" />
      </header>

      {/* Mobile menu — full-bleed overlay; z-55 keeps it above grain (z-60) but below header interactions (z-70) */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-0 z-[55] bg-bone transition-[opacity,visibility] duration-500 ease-out ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        aria-hidden={!open}
      >
        <div className="flex flex-col h-full px-6 pt-28 pb-12 overflow-y-auto">
          <nav className="flex-1 flex flex-col">
            {NAV.map((item, i) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={close}
                  tabIndex={open ? 0 : -1}
                  aria-current={active ? "page" : undefined}
                  className={`py-4 font-display font-medium leading-[1.02] tracking-[-0.02em] border-b border-ink/10 transition-all duration-500 ease-out ${
                    active ? "text-amber" : "text-ink"
                  } ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
                  style={{
                    fontSize: "clamp(2rem, 9vw, 2.75rem)",
                    transitionDelay: open ? `${120 + i * 60}ms` : "0ms",
                  }}
                >
                  <span className="inline-flex items-baseline gap-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber font-normal">
                      0{i + 1}
                    </span>
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          <div
            className={`mt-10 pt-8 border-t border-ink/15 transition-all duration-500 ease-out ${
              open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
            style={{ transitionDelay: open ? `${120 + NAV.length * 60}ms` : "0ms" }}
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute mb-3">
              Direct line
            </div>
            <a
              href="mailto:engage@iffchamber.com"
              className="font-display text-xl text-ink"
              onClick={close}
              tabIndex={open ? 0 : -1}
            >
              engage@iffchamber.com
            </a>
            <div className="mt-8">
              <Link
                href="/contact"
                onClick={close}
                tabIndex={open ? 0 : -1}
                className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-bone bg-ink hover:bg-moss px-5 py-3 rounded-full transition-colors"
              >
                Engage with IFF CHAMBER
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
