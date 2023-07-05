import { launch } from "puppeteer";

export async function GET() {
  try {
    const browser = await launch({
      headless: "new",
      args: ["--no-sandbox", "--disable-setuid-sandbox"]
    });
    const page = await browser.newPage();
    const url = process.env.NEXT_PUBLIC_URL as string;
    await page.goto(`${url}/cv`, { waitUntil: "networkidle0" });
    await page.emulateMediaType("screen");

    // Create PDF Buffer
    const buffer = await page.pdf({
      format: "Letter"
    });

    // Return pdf buffer to caller.

    // Close browser **after** we returned the PDF to the caller.
    await browser.close();
    return new Response(buffer, { status: 200 });
  } catch (error) {
    console.log(error);
  }
}
