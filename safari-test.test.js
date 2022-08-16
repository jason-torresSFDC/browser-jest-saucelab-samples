let dotenv = require('dotenv');
dotenv.config();
const webdriver = require('selenium-webdriver');
const safari = require("selenium-webdriver/safari");

describe("Test", () => {

    test("safari test", async () => {

        //W3C way
        console.log('W3C way')
        const capabilities = {
            browserName: 'safari',
            browserVersion: '15',
            platformName: 'macOS 12',
            'sauce:options': {
                build: "Build 2022_Aug_15",
                name: "Safari_Browser_Test"
            }
        }

        // JWP way
        // console.log('JWP way')
        // let capabilities = new safari.Options();
        // capabilities.set('browserName', 'safari');
        // capabilities.set('version', '15');
        // capabilities.set('platform', 'macOS 12');

        driver = await new webdriver.Builder()
            .usingServer(`https://${process.env.username}:${process.env.accessKey}@ondemand.us-west-1.saucelabs.com:443/wd/hub`)
            .forBrowser('safari')
            //.setSafariOptions(options)  
            .withCapabilities(capabilities)
            .build();

        await driver.get('https://www.google.com');

    });

});