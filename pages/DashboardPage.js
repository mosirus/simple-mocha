const { Builder, By, Key, until } = require('selenium-webdriver');
const BasePage = require('./BasePage');

class DashboardPage extends BasePage{
//   constructor(driver) {
//     this.driver = driver;
//     this.transactionsApp = By.linkText('Transactions');
//     this.checkoutApp = By.linkText('Checkout');
//     // Add other app locators here
//   }

    async clickGetStarted() {
        await driver.sleep(150000);
        const elementButtonStarted = await driver.wait(until.elementIsVisible(await driver.findElement(By.xpath("//*[@class='welcome-screen-content-button']"))), 5000);
        driver.wait(until.elementIsEnabled(elementButtonStarted), 5000); 
        elementButtonStarted.click();
        console.log("Button Started Clicked");
        await driver.sleep(5000);
    }

    async isAppPresent(appName) {
        const appLocator = By.css(appName);
        try {
            await driver.wait(until.elementIsVisible(await driver.findElement(appLocator)), 5000);
            // console.log(`${menuName.getText()} is present`)
            return true;
        } catch (error) {
            return false;
        }
    }
}

module.exports = new DashboardPage();
