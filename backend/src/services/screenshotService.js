// Import necessary dependencies
const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

// Function to take a screenshot or a PDF of a URL
async function takeScreenshot(url, format) {
  // Check if the URL is valid
  if (!isValidUrl(url)) throw new Error('Invalid URL');

  console.log(`Starting browser to take screenshot of URL: ${url} with format: ${format}`);

  // Start a new browser with Puppeteer
  const browser = await puppeteer.launch();
  // Open a new page in the browser
  const page = await browser.newPage();
  // Navigate to the provided URL
  await page.goto(url);

  // Define the path where the screenshots will be saved
  const screenshotPath = path.join(__dirname, '../../../screenshots');
  // If the path doesn't exist, create it
  if (!fs.existsSync(screenshotPath)) {
    console.log(`Creating screenshots directory at: ${screenshotPath}`);
    fs.mkdirSync(screenshotPath);
  }

  // Define the filename of the screenshot
  const fileName = `screenshot-${Date.now()}.${format === 'pdf' ? 'pdf' : 'png'}`;
  // Define the full path of the file
  const filePath = path.join(screenshotPath, fileName);

  // If the format is 'pdf', create a PDF of the page
  // Otherwise, take a screenshot
  if (format === 'pdf') {
    console.log(`Creating PDF at: ${filePath}`);
    await page.pdf({ path: filePath });
  } else {
    console.log(`Taking screenshot at: ${filePath}`);
    await page.screenshot({ path: filePath });
  }

  // Close the browser
  console.log('Closing browser...');
  await browser.close();
}

// Function to validate if a string is a valid URL
function isValidUrl(string) {
  try {
    new URL(string);
    return true;
  } catch (err) {
    console.log(`Invalid URL: ${string}`);
    return false;
  }
}

// Export the takeScreenshot function so it can be used in other modules
module.exports = { takeScreenshot };