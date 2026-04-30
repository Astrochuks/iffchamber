import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";

const URL = process.env.SITE_URL || "http://localhost:3001";
const OUT = path.resolve("./screenshots/pages");

const pages = [
  { slug: "about", path: "/about" },
  { slug: "what-we-do", path: "/what-we-do" },
  { slug: "food-security", path: "/what-we-do/food-security" },
  { slug: "human-capital", path: "/what-we-do/human-capital" },
  { slug: "climate", path: "/what-we-do/climate" },
  { slug: "who-we-serve", path: "/who-we-serve" },
];

const viewports = [
  { name: "desktop-1440", width: 1440, height: 900 },
  { name: "mobile-390", width: 390, height: 844 },
];

if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch();
try {
  for (const p of pages) {
    for (const vp of viewports) {
      const context = await browser.newContext({
        viewport: { width: vp.width, height: vp.height },
        deviceScaleFactor: 1,
        reducedMotion: "reduce",
      });
      const page = await context.newPage();
      await page.goto(`${URL}${p.path}`, { waitUntil: "networkidle" });
      await page.waitForTimeout(500);
      // above-fold
      await page.screenshot({
        path: `${OUT}/${p.slug}--${vp.name}-hero.png`,
        fullPage: false,
      });
      // full page (only at desktop to save time)
      if (vp.name === "desktop-1440") {
        await page.screenshot({
          path: `${OUT}/${p.slug}--${vp.name}-full.png`,
          fullPage: true,
        });
      }
      console.log(`✓ ${p.slug} ${vp.name}`);
      await context.close();
    }
  }
} finally {
  await browser.close();
}
