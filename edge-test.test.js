let dotenv = require('dotenv');
dotenv.config();
const webdriver = require('selenium-webdriver');
const edge = require("selenium-webdriver/edge");

describe("Test", () => {

    test("edge test", async () => {

        //W3C way
        console.log('W3C way');
        const capabilities = {
           browserName: 'MicrosoftEdge',
           browserVersion: 'latest',
           platformName: 'Windows 10',
            'sauce:options': {
                build: "Build 2022_Aug_15",
                name: "Edge_Browser_Test"
            }
        }

        // JWP way
        // console.log('JWP way')
        // let capabilities = new edge.Options();
        // capabilities.set('browserName', 'MicrosoftEdge');
        // capabilities.set('version', 'latest');
        // capabilities.set('platform', 'Windows 10');

        driver = await new webdriver.Builder()
            .usingServer(`https://${process.env.username}:${process.env.accessKey}@ondemand.us-west-1.saucelabs.com:443/wd/hub`)
            .forBrowser('edge')
            //.setEdgeOptions(edgeOption)                                   
            .withCapabilities(capabilities)
            .build();

        await driver.get('https://www.google.com');

    });

});