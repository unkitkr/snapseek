import puppeteer from 'puppeteer'

async function captureScreenshot() {
  let browser = null

  try {
    // launch headless Chromium browser
    browser = await puppeteer.launch({ headless: true })

    // create new page object
    const page = await browser.newPage()
    // set viewport width and height
    await page.setViewport({ width: 500, height: 900, deviceScaleFactor: 5 })
    await page.goto(
      `http://localhost:5500/#twitter-v1?backgroundColor=*000&foregroundImage=%23f6f6f6&outterRadius=10px&tweetText=someThing`
    )

    // capture screenshot and store it into screenshots directory.
    await page.waitForSelector('#background') // wait for the selector to load
    const element = await page.$('#background')
    await element?.screenshot({
      path: `github-profile.png`,
      omitBackground: true,
    })
  } catch (err) {
    console.log(`❌ Error: ${(err as any).message}`)
  } finally {
    await (browser as any).close()
    console.log(`\n🎉 GitHub profile screenshots captured.`)
  }
}

captureScreenshot()
