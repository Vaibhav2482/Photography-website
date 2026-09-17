import { chromium } from "playwright";
import fs from "node:fs";

const base = "https://akash-nawle-films.vercel.app";
const routes = [
  "/", "/about", "/services", "/portfolio", "/contact",
  "/portfolio/shubham-aishwarya-wedding",
  "/portfolio/aarya-portrait",
  "/portfolio/an-evening-under-the-arches",
  "/portfolio/a-quiet-moment",
  "/portfolio/off-duty",
  "/portfolio/real-weddings-real-moments",
  "/portfolio/portrait-sessions",
  "/nonexistent-page",
];

const outDir = "C:/Users/vaibh/AppData/Local/Temp/claude/D--AK/88d8d9ac-cf90-4c34-8e97-95908da0c909/scratchpad/qa";
fs.mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();
const allIssues = [];

for (const vp of [{ name: "desktop", width: 1440, height: 900 }, { name: "mobile", width: 390, height: 844 }]) {
  const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
  const page = await context.newPage();

  page.on("console", (msg) => {
    if (msg.type() === "error") allIssues.push(`[${vp.name}] console error: ${msg.text()}`);
  });
  page.on("pageerror", (err) => allIssues.push(`[${vp.name}] page error: ${err.message}`));
  page.on("requestfailed", (req) => {
    if (!req.url().includes("favicon")) allIssues.push(`[${vp.name}] request failed: ${req.url()} - ${req.failure()?.errorText}`);
  });

  for (const route of routes) {
    const resp = await page.goto(base + route, { waitUntil: "networkidle", timeout: 30000 }).catch((e) => {
      allIssues.push(`[${vp.name}] NAVIGATION FAILED ${route}: ${e.message}`);
      return null;
    });
    if (resp && route !== "/nonexistent-page" && resp.status() >= 400) {
      allIssues.push(`[${vp.name}] HTTP ${resp.status()} on ${route}`);
    }
    await page.waitForTimeout(1200);

    // check for broken images
    const brokenImgs = await page.evaluate(() =>
      Array.from(document.querySelectorAll("img")).filter((img) => !img.complete || img.naturalWidth === 0).map((img) => img.src)
    );
    brokenImgs.forEach((src) => allIssues.push(`[${vp.name}] broken image on ${route}: ${src}`));

    // check overflow
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1);
    if (overflow) allIssues.push(`[${vp.name}] horizontal overflow on ${route}`);

    if (vp.name === "desktop") {
      const safe = route === "/" ? "home" : route.replace(/\//g, "_");
      await page.screenshot({ path: `${outDir}/${safe}.png` }).catch(() => {});
    }
  }

  // interactive checks on desktop only
  if (vp.name === "desktop") {
    // mobile menu button shouldn't exist visibly, but check nav links work
    await page.goto(base + "/", { waitUntil: "networkidle" });
    await page.waitForTimeout(1500);
    const navLinks = await page.$$eval('nav[aria-label="Primary"] a', (as) => as.map((a) => a.getAttribute("href")));
    allIssues.push(`[info] nav links found: ${JSON.stringify(navLinks)}`);

    // test contact form validation
    await page.goto(base + "/contact", { waitUntil: "networkidle" });
    await page.waitForTimeout(1000);
    const submitBtn = await page.$('button[type="submit"]');
    if (submitBtn) {
      await submitBtn.click();
      await page.waitForTimeout(300);
      const errorsShown = await page.$$eval(".text-red-700", (els) => els.length);
      allIssues.push(`[info] contact form validation errors shown on empty submit: ${errorsShown}`);
    } else {
      allIssues.push(`[ISSUE] no submit button found on contact form`);
    }

    // test portfolio category filter
    await page.goto(base + "/portfolio", { waitUntil: "networkidle" });
    await page.waitForTimeout(1000);
    const filterBtns = await page.$$('button[aria-pressed]');
    allIssues.push(`[info] portfolio filter buttons found: ${filterBtns.length}`);
    if (filterBtns.length > 1) {
      await filterBtns[1].click();
      await page.waitForTimeout(600);
      const cardCount = await page.$$eval('a[data-cursor="View"]', (els) => els.length);
      allIssues.push(`[info] after clicking filter[1], visible project cards: ${cardCount}`);
    }
  }

  await context.close();
}

await browser.close();
fs.writeFileSync(`${outDir}/issues.json`, JSON.stringify(allIssues, null, 2));
console.log(allIssues.join("\n"));
console.log("TOTAL ISSUES/INFO LINES:", allIssues.length);
