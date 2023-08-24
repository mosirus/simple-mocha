var webdriver = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');
const options = new firefox.Options();
options.addArguments('--ignore-certificate-errors');
var driver = new webdriver.Builder().forBrowser('firefox').setFirefoxOptions(options).build();
driver.manage().setTimeouts({implicit : (10000)});

class BasePage {
    constructor() {
        global.driver = driver;
        this.url = 'https://commerceos.staging.devpayever.com/registration/';
    }

    async go_to_url(value) {
        await driver.get(this.url + value);
    }

    async quit_chrome() {
        await driver.quit();
    }
}

module.exports = BasePage;