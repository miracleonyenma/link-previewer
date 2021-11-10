# Build a Link Previewer With Puppeteer & Serverless Functions

This article is to show how we can easily set up serverless functions with our front-end application, we'll be building an app with a custom link previewer component. 

This component sends a request with a URL to our serverless function. The function then uses Puppeteer to get metadata from the target site using the URL and generate a screenshot of the site. 

The function sends the metadata and screenshots back to the component on our front-end to display it as a link preview in the application.

## Requirements

* [Node.js](http://nodejs.org/) - version 10 or later
* [Netlify Account](https://www.netlify.com/)
* [Netlify CLI](https://docs.netlify.com/cli/get-started/)

## Installation Steps

### Clone repo
1. Install Netlify CLI
2. Run `npm install`
3. Run `netlify dev`
4. Visit http://localhost:8888/
5. Access your functions at - http://localhost:8888/.netlify/functions/<function name>
   - e.g http://localhost:8888/.netlify/functions/hello

## License

SitePoint's code archives and code examples are licensed under the MIT license.

Copyright © 2021 SitePoint

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
