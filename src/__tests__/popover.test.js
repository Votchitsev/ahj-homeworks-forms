import puppeteer from 'puppeteer'

jest.setTimeout(15000)

describe('Page start', () => {
  let browser
  let page

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 250,
      devtools: true
    })
    page = await browser.newPage()
  })

  test('Page Loaded', async () => {
    await page.goto('http://localhost:3000/')
    await page.waitForSelector('body')
  })

  test('appear and disappear popover', async () => {
    await page.goto('http://localhost:3000/')
    await page.waitForSelector('.popover-btn')
    const button = await page.$('.popover-btn')

    await button.click()
    await page.waitForSelector('.popover', { hidden: false })

    await button.click()
    await page.waitForSelector('.popover', { hidden: true })
  })

  afterEach(async () => {
    await browser.close()
  })
})
