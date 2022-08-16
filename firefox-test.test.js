let dotenv = require('dotenv');
dotenv.config();
const webdriver = require('selenium-webdriver');
const firefox = require("selenium-webdriver/firefox");

describe("Test", () => {

    let username = '';
    let accessKey = '';

    test("firefox test", async () => {

        //W3C way
        console.log('W3C way');
        const capabilities = {
            browserName: 'firefox',
            browserVersion: 'latest',
            platformName: 'Windows 10',
            'sauce:options': {
                build: "Build 2022_Aug_15",
                name: "firefox_Browser_Test"
            }
        }

        // JWP way
        // console.log('JWP way')
        // let capabilities = new firefox.Options();
        // capabilities.set('browserName', 'firefox');
        // capabilities.set('version', 'latest');
        // capabilities.set('platform', 'Windows 10');

        driver = await new webdriver.Builder()
            .usingServer(`https://${process.env.username}:${process.env.accessKey}@ondemand.us-west-1.saucelabs.com:443/wd/hub`)
            .forBrowser('firefox')
            //.setFirefoxOptions(firefoxOption)                   
            .withCapabilities(capabilities)
            .build();

        await driver.get('https://www.google.com');

    });

});