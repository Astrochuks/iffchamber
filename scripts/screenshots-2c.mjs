import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";

const URL = process.env.SITE_URL || "http://localhost:3001";
const OUT = path.resolve("./screenshots/phase-2c");

const pages = [
  { slug: "contact", path: "/contact" },
  { slug: "insights", path: "/insights" },
  { slug: "impact", path: "/impact" },
  { slug: "careers", path: "/careers" },
  { slug: "newsroom", path: "/newsroom" },
];

if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch();
try {
  for (const p of pages) {
    const context = await browser.newContext({
      viewport: { width: 1440, height: 900 },
      deviceScaleFactor: 1,
      reducedMotion: "reduce",
    });
    const page = await context.newPage();
    await page.goto(`${URL}${p.path}`, { waitUntil: "networkidle" });
    await page.waitForTimeout(600);
    await page.screenshot({ path: `${OUT}/${p.slug}-hero.png`, fullPage: false });
    await page.screenshot({ path: `${OUT}/${p.slug}-full.png`, fullPage: true });
    console.log(`✓ ${p.slug}`);
    await context.close();
  }
} finally {
  await browser.close();
}
