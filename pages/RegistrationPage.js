const { Builder, By, Key, until } = require('selenium-webdriver');
var BasePage = require('../pages/BasePage');
var webdriver = require('selenium-webdriver');
const { Options } = require('selenium-webdriver/firefox')

// Define Page Object for the Registration Page
class RegistrationPage extends BasePage {


    // User Information

    async fillUserInformation(firstName, lastName, email, password, confPass) {
        
        await driver.sleep(2000);
        const elementFirstName = await driver.wait(until.elementIsVisible(await driver.findElement(By.xpath("//*[normalize-space(text())='First name']"))), 12000);
        await driver.wait(until.elementIsEnabled(elementFirstName), 5000);
        await driver.sleep(2000);
        elementFirstName.sendKeys(firstName);
        console.log("firstName Filled");

        await driver.sleep(2000);
        const elementLastName = await driver.wait(until.elementIsVisible(await driver.findElement(By.xpath("//*[normalize-space(text())='Last name']"))), 5000);
        await driver.wait(until.elementIsEnabled(elementLastName), 5000);
        await driver.sleep(2000);
        elementLastName.sendKeys(lastName);
        console.log("lastName Filled");

        await driver.sleep(2000);
        const elementEmail = await driver.wait(until.elementIsVisible(await driver.findElement(By.xpath("//*[normalize-space(text())='Email']"))), 5000);
        await driver.wait(until.elementIsEnabled(elementEmail), 5000);
        await driver.sleep(2000);
        elementEmail.sendKeys(email);
        console.log("Email Filled");

        await driver.sleep(2000);
        const elementPass = await driver.wait(until.elementIsVisible(await driver.findElement(By.xpath("//*[normalize-space(text())='Password']"))), 5000);
        await driver.wait(until.elementIsEnabled(elementPass), 5000);
        await driver.sleep(2000);
        elementPass.sendKeys(password);
        console.log("Password Filled");

        await driver.sleep(2000);
        const elementConfPass = await driver.wait(until.elementIsVisible(await driver.findElement(By.xpath("//*[normalize-space(text())='Confirm Password']"))), 5000);
        await driver.wait(until.elementIsEnabled(elementConfPass), 5000); 
        await driver.sleep(2000);
        elementConfPass.sendKeys(confPass);
        console.log("Confirm Password Filled");
    }

    async clickSignup() {
        await driver.sleep(2000);
        const elementButtonSignup = await driver.wait(until.elementIsVisible(await driver.findElement(By.xpath("//*[@class='signup-button']"))), 5000);
        driver.wait(until.elementIsEnabled(elementButtonSignup), 5000); 
        elementButtonSignup.click();
        console.log("Button Signup Clicked");
        await driver.sleep(15000);
    }

    // Businness Information

    async fillCompanyName(companyName) {
        await driver.sleep(3000);
        const elementCompanyName = await driver.wait(until.elementIsVisible(await driver.findElement(By.xpath("//*[normalize-space(text())='Company name']"))), 11000);
        await driver.wait(until.elementIsEnabled(elementCompanyName), 5000);
        await driver.sleep(3000);
        elementCompanyName.sendKeys(companyName);
        console.log("Company Name Is Filled");
    }

    async fillIndusry() {
        await driver.sleep(3000);
        const dropdownIndustry = await driver.wait(until.elementIsVisible(await driver.findElement(By.xpath("//*[normalize-space(text())='Industry']"))), 5000);
        await driver.wait(until.elementIsEnabled(dropdownIndustry), 5000);
        dropdownIndustry.click();
        await driver.sleep(3000);
        const optionIndustry = await driver.wait(until.elementIsVisible(await driver.findElement(By.xpath("//*[@id='mat-option-14']"))), 5000);
        optionIndustry.click();
        console.log("Industry Is Filled");
    }

    async fillCountryCode() {
        await driver.sleep(3000);
        const dropdownCountryCode = await driver.wait(until.elementIsVisible(await driver.findElement(By.xpath("//*[normalize-space(text())='Country Code']"))), 5000);
        await driver.wait(until.elementIsEnabled(dropdownCountryCode), 5000);
        dropdownCountryCode.click();
        await driver.sleep(3000);
        const optionCountryCode = await driver.wait(until.elementIsVisible(await driver.findElement(By.xpath("/html/body/div[5]/div[2]/div/div/peb-select-option[79]"))), 5000);
        optionCountryCode.click();
        console.log("Country Code Is Filled");
    }

    async fillPhoneNumber(phoneNumber) {
        await driver.sleep(3000);
        const elementPhoneNumber = await driver.wait(until.elementIsVisible(await driver.findElement(By.xpath("//*[normalize-space(text())='Phone Number']"))), 5000);
        await driver.wait(until.elementIsEnabled(elementPhoneNumber), 5000);
        await driver.sleep(3000);
        elementPhoneNumber.sendKeys(phoneNumber);
        console.log("Phone Number Is Filled");
    }

    async fillVatNumber(vatNumber) {
        await driver.sleep(3000);
        const elementVatNumber = await driver.wait(until.elementIsVisible(await driver.findElement(By.xpath("//*[normalize-space(text())='VAT number']"))), 5000);
        await driver.wait(until.elementIsEnabled(elementVatNumber), 5000);
        await driver.sleep(3000);
        elementVatNumber.sendKeys(vatNumber);
        console.log("VAT Number Is Filled");
    }

    async registerButton() {
        await driver.sleep(5000);
        const elementRegisterButton = await driver.wait(until.elementIsVisible(await driver.findElement(By.xpath("//*[@class='signup-button']"))), 5000);
        driver.wait(until.elementIsEnabled(elementRegisterButton), 5000); 
        elementRegisterButton.click();
        console.log("Button Register Clicked");
    }

    // BusinessInformation 'Fashion'
    async fillBusinessInformationFashion(companyName, phoneNumber) {
        await this.fillCompanyName(companyName);
        await this.fillCountryCode();
        await this.fillPhoneNumber(phoneNumber);
    }

    //BusinessInformation 'Santander'
    async fillBusinessInformationSantander(companyName, phoneNumber, vatNumber) {
        await this.fillCompanyName(companyName);
        await this.fillIndusry();
        await this.fillCountryCode();
        await this.fillPhoneNumber(phoneNumber);
        await this.fillVatNumber(vatNumber);
    }

}

module.exports = new RegistrationPage();

