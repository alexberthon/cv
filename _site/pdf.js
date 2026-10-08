const puppeteer = require('puppeteer');
const base = `http://localhost:${process.env.CONDUCTOR_PORT || 4000}`;

puppeteer.launch({ headless: true }).then(browser =>
    browser
      .newPage()
      .then(page =>
        Promise.resolve()
        .then(() => page.setViewport({
          width: 1200,
          height: 1500,
        }))
        .then(() => page.goto(base, { waitUntil: 'networkidle0' }))
        .then(() => page.waitForFunction('window.status === "ready"'))
        .then(() => page.pdf({
          path: 'cv-en.pdf',
          format: 'a4',
          printBackground: true
        }))
        .then(() => page.goto(`${base}/fr`, { waitUntil: 'networkidle0' }))
        .then(() => page.waitForFunction('window.status === "ready"'))
        .then(() => page.pdf({
          path: 'cv-fr.pdf',
          format: 'a4',
          printBackground: true
        }))
      )
      .then(result => browser.close())
);
