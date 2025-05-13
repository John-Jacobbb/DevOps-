const { Builder, By, until } = require('selenium-webdriver');
const { expect } = require('chai');

describe('Login Form Validation', function () {
  this.timeout(30000); // increase timeout if needed
  let driver;

  beforeEach(async () => {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://example.com/login'); // replace with actual login page URL
  });

  afterEach(async () => {
    await driver.quit();
  });

  it('should login successfully with valid credentials', async () => {
    await driver.findElement(By.id('username')).sendKeys('admin');
    await driver.findElement(By.id('password')).sendKeys('password123');
    await driver.findElement(By.id('loginButton')).click();

    const title = await driver.getTitle();
    expect(title).to.include('Dashboard'); // expected page title after login
  });

  it('should show error with invalid credentials', async () => {
    await driver.findElement(By.id('username')).sendKeys('wronguser');
    await driver.findElement(By.id('password')).sendKeys('wrongpass');
    await driver.findElement(By.id('loginButton')).click();

    const errorMsg = await driver.wait(until.elementLocated(By.id('errorMsg')), 5000);
    const text = await errorMsg.getText();
    expect(text).to.include('Invalid username or password');
  });
});
