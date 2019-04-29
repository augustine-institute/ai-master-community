import {browser, Config} from 'protractor';
import * as fs from 'fs-extra';

export let config: Config = {
    baseUrl: process.env['PTOR_BASE_URL'] || 'https://beta.formed.org/',
    getPageTimeout: 60000,
    allScriptsTimeout: 500000,
    rootElement: 'body',
  // seleniumAddress: 'http://localhost:4444/wd/hub',

    SELENIUM_PROMISE_MANAGER: true,
    
    // for windows:
    //chromeOnly: true, 
    // for windows:
    directConnect: false,
    
    //multiCapabilities: [{
      //  'browserName': 'firefox',
        //'firefoxOptions': {
        // 'args': ['--headless']
        //},
      // 'moz:firefoxOptions': {
        //    'binary': '/var/lib/jenkins/workspace/Regression_tests/node_modules/webdriver-manager/selenium/geckodriver-v0.19.1/'
        // }},
    //{
      //  'browserName': 'chrome'
      //}],
     // {'browserName': 'internet explorer',
     //   'platform': 'ANY',
     //   'version': '11'
     // }],
   // seleniumArgs: ['-Dwebdriver.ie.driver=C:\Users\Yogi\ai-testing-master\node_modules\webdriver-manager\selenium\IEDriverServer.exe'],
    
    capabilities: {
        browserName: 'chrome',
        'shardTestFiles': true,
         'maxInstances': 1
    },
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    specs: [
        '../../features/*.feature'
    ],
    
    onPrepare: () => {
        browser.executeScript('return !!window.angular');
        browser.ignoreSynchronization = true;
        browser.ignoreUncaughtExceptions = true;
        browser.waitForAngularEnabled(false);
        browser.sleep(500);             
        browser.manage().window().setSize(1600, 1000);
    },
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        strict: true,
        format: ['json:.tmp/results.json'],
        require: ['../../features/step_definitions/*.ts', '../../support/*.ts'],
        tags: '',
        tagsold: '@TypeScriptScenario or @CucumberScenario or @ProtractorScenario'
    },
    plugins: [{
        package: 'protractor-multiple-cucumber-html-reporter-plugin',
        options:{
            // read the options part
            automaticallyGenerateReport: true,
            removeExistingJsonReportFile: true
        }
    }]
};
