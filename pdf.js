const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('http://localhost:4000/');

  await page.waitForFunction('window.status === "ready"').then(() => (page.pdf({
      path: 'cv.pdf',
      format: 'a4',
      printBackground: false
    })
  ));



  await browser.close();
})();