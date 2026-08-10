import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  page.on('pageerror', err => {
    console.error('Page error:', err);
  });
  
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.error('Console error:', msg.text());
    }
  });

  console.log('Navigating to http://localhost:4173 ...');
  await page.goto('http://localhost:4173', { waitUntil: 'networkidle0' });
  console.log('Page loaded, scrolling down...');
  
  await page.evaluate(() => {
    window.scrollBy(0, window.innerHeight * 2);
  });
  
  await new Promise(r => setTimeout(r, 2000));
  
  await page.evaluate(() => {
    window.scrollBy(0, window.innerHeight * 2);
  });
  
  await new Promise(r => setTimeout(r, 2000));

  await browser.close();
  console.log('Test complete');
})();
