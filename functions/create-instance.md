// /* eslint-disable no-unused-vars */
// const chromium = require('chrome-aws-lambda')

// exports.handler = async function (event, context) {
//   console.log(event.body);

//   const browser = await chromium.puppeteer.launch({
//     executablePath: await chromium.executablePath
//   })

//   const wsEndpoint = browser.wsEndpoint()

//   await browser.close()

//   return{
//     statusCode: 200,
//     body: JSON.stringify({
//       wsEndpoint
//     })
//   }

// }