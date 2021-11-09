/* eslint-disable no-unused-vars */
const chromium = require('chrome-aws-lambda');
const puppeteer = require('puppeteer-core')

exports.handler = async function (event, context) {
  // parse body of POSY request to valid object and
  // use object destructuring to obtain target url
  const { targetURL } = JSON.parse(event.body)

  const browser = await puppeteer.launch({
    args: chromium.args,
    executablePath: process.env.EXCECUTABLE_PATH || await chromium.executablePath,
    headless: true
  })

  // open new page in browser
  const page = await browser.newPage();

  // set the viewport of the page
  await page.setViewport({
    width: 768,
    height: 425,
    deviceScaleFactor: 1
  })

  // set the prefers-color-scheme to dark
  await page.emulateMediaFeatures([
    {name: 'prefers-color-scheme', value:'dark'}
  ])

  try {
    // navigate to the targetURL
    await page.goto(targetURL)

    // get the title from the newly loaded page
    const title = (await page.$eval(`head > title`, el => el.textContent) || "")

    // get the descriptions of the page using their CSS selectors
    const descriptions = await page.evaluate(() => {
      let descriptions = {}

      let desc = document.querySelector(`meta[name='description']`)
      let og = document.querySelector(`meta[property='og:description']`)
      let twitter = document.querySelector(`meta[property='twitter:description']`)

      desc ? descriptions.desc = desc.content : descriptions.desc = null
      og ? descriptions.og = og .content: descriptions.og = null
      twitter ? descriptions.twitter = twitter.content : descriptions.twitter = null

      return descriptions
    })

    // console.log(JSON.stringify({
    //   title,
    //   descriptions
    // }));

    // console.log( await page.evaluate(() => matchMedia('(prefers-color-scheme: dark)').matches));

    // screenshot the page as a jpeg with a base64 encoding
    const screenshot = await page.screenshot({
      type: 'jpeg',
      encoding: 'base64'
    })

    // close the browser
    await browser.close()

    // send the page details
    return {
      statusCode: 200,
      body: JSON.stringify({
        title,
        screenshot,
        descriptions
      })
    }

  } catch (error) {

    // if any error occurs, close the browser instance
    // and send an error code
    await browser.close()
    return {
      statusCode: 400,
      body: JSON.stringify({
        error
      })
    }
  }
}