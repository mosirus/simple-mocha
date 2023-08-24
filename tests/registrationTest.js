const registrationPage = require('../pages/RegistrationPage')
const dashboardPage = require('../pages/DashboardPage')
var webdriver = require('selenium-webdriver');
const chai = require('chai');
const { expect } = require('chai');

// Run this test with command 'npx mocha --no-timeouts tests/registrationTest.js'

describe('Test Case Registration Payever', function() {

    before(async function() {
    });

    after(async function() {
        await registrationPage.quit_chrome();
    });

    it('Test Case 1: Validating apps for "fashion"', async function() {

        await registrationPage.go_to_url('fashion');
        await registrationPage.fillUserInformation('Monang', 'Sitorus', 'Monangsitorus17@gmail.com', 'Mosirus@23', 'Mosirus@23');
        await registrationPage.clickSignup();

        // Fill out business information
        await registrationPage.fillBusinessInformationFashion('TestQA', '12341234');
        await registrationPage.registerButton();
        

        // Dashboard Page
        await dashboardPage.clickGetStarted();
        // Transactions, Checkout, Connect, Products, Shop, Message, settings
        const appsToValidate = {
            Transaction : 'div.icons__link:nth-child(13)', 
            Checkout : 'div.icons__link:nth-child(16)', 
            Connect : 'div.icons__link:nth-child(15)',
            Product : 'div.icons__link:nth-child(14)', 
            Shop : 'div.icons__link:nth-child(11)', 
            Settings : 'div.icons__link:nth-child(17)'
        };

        // verification app menu in 'fashion'
        for (const key in appsToValidate) {
            if (appsToValidate.hasOwnProperty(key)) {
                const value = appsToValidate[key];
                const isPresent = await dashboardPage.isAppPresent(value);
                console.log(`Menu ${key} in Fashion Is Present`);
                expect(isPresent).to.be.true;
            }
        }

    });

    it('Test Case 2: Validating apps for "santander"', async function() {

        await registrationPage.go_to_url('santander');
        await registrationPage.fillUserInformation('Monang', 'Panjaitan', 'Monangpanjaitan6@gmail.com', 'Mosirus@23', 'Mosirus@23');
        await registrationPage.clickSignup();

        // Fill out business information
        await registrationPage.fillBusinessInformationSantander('TestQA', '12345678', '12345678');
        await registrationPage.registerButton();
        

        // Dashboard Page
        await dashboardPage.clickGetStarted();
        // Transactions, Checkout, Connect, Point of Sale, Settings
        const appsToValidate = {
            Transaction : 'div.icons__link:nth-child(1)', 
            Checkout : 'div.icons__link:nth-child(4)', 
            Connect : 'div.icons__link:nth-child(3)',
            PointOfSale : 'div.icons__link:nth-child(2)',  
            Settings : 'div.icons__link:nth-child(5)'
        };

        // verification app menu in 'santander'
        for (const key in appsToValidate) {
            if (appsToValidate.hasOwnProperty(key)) {
                const value = appsToValidate[key];
                const isPresent = await dashboardPage.isAppPresent(value);
                console.log(`Menu ${key} in Santander Is Present`);
                expect(isPresent).to.be.true;
            }
        }

    });

});