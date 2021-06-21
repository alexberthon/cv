const puppeteer = require('puppeteer');

puppeteer.launch({ headless: true }).then(browser =>
    browser
      .newPage()
      .then(page =>
        Promise.resolve()
        .then(() => page.setViewport({
          width: 1200,
          height: 1500,
        }))
        .then(() => page.goto("http://localhost:4000", {waitUntil: 'networkidle0'}))
        .then(() => page.waitForFunction('window.status === "ready"'))
        .then(() => page.pdf({
          path: 'cv.pdf',
          format: 'a4',
          printBackground: true
        }))
      )
      .then(result => browser.close())
);