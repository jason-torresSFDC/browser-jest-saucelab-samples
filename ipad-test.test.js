let dotenv = require('dotenv');
dotenv.config();
const webdriver = require('selenium-webdriver');

describe("Test", () => {

    test("ipad test", async () => {

        //W3C way
        // console.log('W3C way')
        const capabilities = {
            platformName: 'iOS',
            browserName: 'Safari',
            'appium:deviceName': 'iPad Pro (12.9 inch) (5th generation) Simulator',
            'appium:platformVersion': '15.4',
            'sauce:options': {
                appiumVersion: '1.22.3',
                build: "Build 2022_Aug_15",
                name: "Ipad_Browser_Test"
            }
        };

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