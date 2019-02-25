import {browser, Config} from 'protractor';
import * as fs from 'fs-extra';

export let config: Config = {
    baseUrl: process.env['PTOR_BASE_URL'] || 'https://beta.formed.org/',
    getPageTimeout: 60000,
    allScriptsTimeout: 500000,
    rootElement: 'body',
  // seleniumAddress: 'http://localhost:4444/wd/hub',

    SELENIUM_PROMISE_MANAGER: false,
    
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
         'maxInstances': 2
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
    beforeLaunch: () =>{
        let oldreport = process.cwd() + "/.tmp/report/index.html";
        var now = new Date();
        var dir = "Reports-" + now.getFullYear() + "-" + now.getMonth() + "-" + now.getDay() + "-" + now.getHours() + "-" + now.getMinutes() + "-" + now.getSeconds()
        var dirname = process.cwd() + "/archive-Reports/"+dir
        var fs2 = require('fs');
        if (!fs2.existsSync(dirname)){
            fs2.mkdirSync(dirname);
        }else
        {
            console.log("Directory already exist");
        }
        
        var logfile_name = "index.html";
        let __dirname = process.cwd();
        if (fs.existsSync(oldreport)) {
            fs.copySync(oldreport, __dirname + "/archive-Reports/"+ dir +"/" + logfile_name);
            fs.unlinkSync(oldreport);
        }
        
        //var path = require('path');
        var myPath = process.cwd() + "/.tmp"; 
        var path = require('path');  
        
        var dest  = __dirname + "/archive-Reports/"+ dir +"/";
        var reportfold = process.cwd() + "/.tmp/report/features/"; 
        var copyRecursiveSync = function(src, dest) {
                var exists = fs.existsSync(src);
                var stats = exists && fs.statSync(src);
                var isDirectory = exists && stats.isDirectory();
                if (exists && isDirectory) {
                  //fs.mkdirSync(dest);
                  fs.readdirSync(src).forEach(function(childItemName) {
                    fs.copySync(path.join(src, childItemName),
                    path.join(dest, childItemName));
                      if(path.extname(childItemName) === '.json')
                      {                        
                        fs.unlinkSync(path.join(src, childItemName));
                        
                      }
                  });
                } else {
                  fs.linkSync(src, dest);
                }
              };
        var copyRecursiveSync2 = function(src, dest) {
                var exists = fs.existsSync(src);
                var stats = exists && fs.statSync(src);
                var isDirectory = exists && stats.isDirectory();
                if (exists && isDirectory) {
                  fs.readdirSync(src).forEach(function(childItemName) {                    
                      if(path.extname(childItemName) === '.html')
                      {                        
                        fs.unlinkSync(path.join(src, childItemName));                        
                      }
                  });
                } else {
                  fs.linkSync(src, dest);
                }
              };
              copyRecursiveSync(myPath,dest);
              copyRecursiveSync2(reportfold,dest);

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
