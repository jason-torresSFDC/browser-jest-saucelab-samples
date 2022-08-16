let dotenv = require('dotenv');
dotenv.config();
const webdriver = require('selenium-webdriver');
const chrome = require("selenium-webdriver/chrome");

describe("Test", () => {

    test("chrome test", async () => {

        //W3C way
        console.log('W3C way');
        const capabilities = {
            browserName: 'chrome',
            browserVersion: '102',
            platformName: 'Windows 10',
            'sauce:options': {
                build: "Build 2022_Aug_15",
                name: "Chrome_Browser_Test"
            }
        }

        // JWP way
        // console.log('JWP way')
        // let capabilities = new chrome.Options();
        // capabilities.set('browserName', 'chrome');
        // capabilities.set('version', '102');
        // capabilities.set('platform', 'Windows 10');

        driver = await new webdriver.Builder()
            .usingServer(`https://${process.env.username}:${process.env.accessKey}@ondemand.us-west-1.saucelabs.com:443/wd/hub`)
            .forBrowser('chrome')
            //.setChromeOptions(chromeOption)                                   
            .withCapabilities(capabilities)
            .build();

        await driver.get('https://www.google.com');

    });

});