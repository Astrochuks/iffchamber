import Link from "next/link";
import { Logo } from "./Logo";

const FOOTER_NAV = [
  {
    heading: "Practice",
    items: [
      { label: "Food Security & Sustainability", href: "/what-we-do/food-security" },
      { label: "Human Capital Development", href: "/what-we-do/human-capital" },
      { label: "Climate Mitigation & Adaptation", href: "/what-we-do/climate" },
    ],
  },
  {
    heading: "Chamber",
    items: [
      { label: "About", href: "/about" },
      { label: "Sectors", href: "/who-we-serve" },
      { label: "Impact", href: "/impact" },
      { label: "Newsroom", href: "/newsroom" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    heading: "Engage",
    items: [
      { label: "Open a request", href: "/contact" },
      { label: "engage@iffchamber.com", href: "mailto:engage@iffchamber.com" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-bone-soft">
      <div className="rule-strong" />
      <div className="mx-auto max-w-[1480px] px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-12 md:col-span-5 flex flex-col">
            <Logo size="md" />
            <p className="mt-8 font-display text-xl md:text-[1.5rem] leading-[1.3] text-ink-soft max-w-md text-pretty">
              A food system advisory for nations, institutions, and industries, committed to advancing human capital through food security and sustainability.
            </p>
          </div>

          {FOOTER_NAV.map((col) => (
            <div key={col.heading} className="col-span-12 sm:col-span-6 md:col-span-2">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute mb-5">
                {col.heading}
              </div>
              <ul className="space-y-3">
                {col.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="font-body text-[14px] text-ink hover:text-moss transition-colors leading-snug"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-24 pt-8 border-t border-ink/15 flex flex-col md:flex-row justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
          <div>
            © {new Date().getFullYear()} Interconnected Food Futures Chamber
            <span className="text-amber mx-2">●</span>
            A registered food system advisory
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-moss">Privacy</Link>
            <Link href="/terms" className="hover:text-moss">Terms</Link>
            <Link href="/disclosures" className="hover:text-moss">Disclosures</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
