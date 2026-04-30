import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";

const URL = process.env.SITE_URL || "http://localhost:3001";
const OUT = path.resolve("./screenshots");

const viewports = [
  { name: "01-mobile-375", width: 375, height: 812 },
  { name: "02-mobile-390", width: 390, height: 844 },
  { name: "03-tablet-768", width: 768, height: 1024 },
  { name: "04-tablet-1024", width: 1024, height: 768 },
  { name: "05-desktop-1280", width: 1280, height: 800 },
  { name: "06-desktop-1440", width: 1440, height: 900 },
  { name: "07-wide-1920", width: 1920, height: 1080 },
];

if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch();
try {
  for (const vp of viewports) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 1,
      reducedMotion: "reduce",
    });
    const page = await context.newPage();
    await page.goto(URL, { waitUntil: "networkidle" });
    await page.waitForTimeout(600);
    await page.screenshot({
      path: `${OUT}/${vp.name}-full.png`,
      fullPage: true,
    });
    // also an above-the-fold hero-only shot
    await page.screenshot({
      path: `${OUT}/${vp.name}-hero.png`,
      fullPage: false,
    });
    console.log(`✓ ${vp.name} (${vp.width}×${vp.height})`);
    await context.close();
  }

  // Mobile menu open
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    reducedMotion: "reduce",
  });
  const page = await context.newPage();
  await page.goto(URL, { waitUntil: "networkidle" });
  await page.waitForTimeout(400);
  await page.click('button[aria-label="Open menu"]');
  await page.waitForTimeout(900);
  await page.screenshot({
    path: `${OUT}/08-mobile-menu-open.png`,
    fullPage: false,
  });
  console.log("✓ 08-mobile-menu-open (390×844)");
  await context.close();
} finally {
  await browser.close();
}
