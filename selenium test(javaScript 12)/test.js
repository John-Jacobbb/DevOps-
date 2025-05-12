const { Builder, By, until } = require('selenium-webdriver');

(async function test() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // ✅ Updated path to your HTML file
    await driver.get('file:///C:/Users/ASUS/Desktop/selenium%20test/index.html');

    // Click the button
    const button = await driver.findElement(By.id('myButton'));
    await button.click();

    // Wait for the text to change
    const text = await driver.findElement(By.id('myText'));
    await driver.wait(until.elementTextIs(text, 'You clicked the button!'), 5000);

    // Get and print the final text
    const finalText = await text.getText();
    console.log("Final text is:", finalText);
  } finally {
    await driver.quit();
  }
})();
