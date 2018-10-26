const Cucumber = require('cucumber');
import {browser} from 'protractor';
import * as fs from 'fs-extra';
import {config} from '../config/config';
import {defineSupportCode} from "cucumber";

import * as rep from 'cucumber-html-reporter';
const reporter:any = rep;

import {sync} from 'mkdirp';

import * as chaiImport from 'chai';
const chai:any = chaiImport;

import * as chaiAsPromised from 'chai-as-promised';
import { delay } from 'q';
chai.use(chaiAsPromised);
export const expect:any = chai.expect;


defineSupportCode(function ({registerHandler, registerListener, After,Before, setDefaultTimeout}) {
    
    setDefaultTimeout(100 * 1000);
    let jsonReports = process.cwd() + "/reports/json";
    let htmlReports = process.cwd() + "/reports/html";
    let targetJson = jsonReports + "/cucumber_report.json";
    
    
    
    After(async function (scenarioResult) {
        
        let world = this;
        if (scenarioResult.isFailed()) {
            let screenShot = await browser.takeScreenshot();
            // screenShot is a base-64 encoded PNG
            world.attach(screenShot, 'image/png');
        }      
        
    });
    
   
    let cucumberReporterOptions = {
        theme: "bootstrap",
        jsonFile: targetJson,
        output: htmlReports + "/cucumber_reporter.html",
        reportSuiteAsScenarios: true
    };

    let logFn = string => {
        if (!fs.existsSync(jsonReports)) {
            sync(jsonReports);
        }
        try {
            fs.writeFileSync(targetJson, string);
            reporter.generate(cucumberReporterOptions); // invoke cucumber-html-reporter
        } catch (err) {
            if (err) {
                console.log(`Failed to save cucumber test results to json file. 
                             Failed to create html report.
                             `);
                console.log(err);
            }
        }
    };
    let jsonformatter = new Cucumber.JsonFormatter({
        log: logFn
    });
    registerListener(jsonformatter);
});
