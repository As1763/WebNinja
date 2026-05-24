import puppeteer from 'puppeteer';

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    // Capture console errors
    page.on('console', msg => {
      if (msg.type() === 'error') {
        console.error('BROWSER CONSOLE ERROR:', msg.text());
      }
    });
    
    page.on('pageerror', error => {
      console.error('BROWSER PAGE EXCEPTION:', error.message);
    });

    console.log('Navigating to http://localhost:4173/css-tutorial');
    await page.goto('http://localhost:4173/css-tutorial', { waitUntil: 'networkidle0' });
    
    const rootHtml = await page.evaluate(() => document.getElementById('root').innerHTML);
    console.log('Root HTML length:', rootHtml.length);
    
    await browser.close();
  } catch (err) {
    console.error('Script Error:', err);
  } finally {
    process.exit(0);
  }
})();
