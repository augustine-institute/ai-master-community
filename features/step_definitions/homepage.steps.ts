import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
var expects = chai.use(chaiAsPromised).expect;
import {browser, by, element, protractor, $} from 'protractor';
import {defineSupportCode, StepDefinitionParam, TableDefinition} from 'cucumber';
import * as _ from 'lodash';
import {expect} from '../../support/hooks';
//import { Key } from 'protractor/node_modules/@types/selenium-webdriver';
//import { callbackify } from 'util';
import { Driver } from 'selenium-webdriver/opera';
import { F_OK } from 'constants';
import { async } from 'q';
import { Z_DEFAULT_STRATEGY } from 'zlib';


defineSupportCode(function ({Given, Then, When}) {
    function delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    Given('I navigate to {path}', async (path: string) => {
        await browser.get(path);
        await delay(15000);
    });
    When('FCF-0010 navigate to community page', async  () => {
        await delay(15000);
        element(by.xpath(".//*[@id='header']/div/div/div/div/global-nav/ul/li[2]/a")).click();
        browser.waitForAngular();
        await delay(10000);
    });
    When('HPF-0030 click on demand page', async () => {
        await delay(5000);
        element(by.xpath(".//a[@href='https://beta.formed.org/']")).click();
        await delay(15000);                         
    });
    Then('FCF-0010 Enter Parish user name and password', async  () => {
        await delay(5000);
        element(by.xpath(".//*[@id='simple-dropdown']")).click();
        await delay(5000);
        element(by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/span/div/login/form/input[1]")).sendKeys("test+parish@formed.org");
        await delay(1000);
        element(by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/span/div/login/form/input[2]")).sendKeys("formed");
        await delay(1000);
        element(by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/span/div/login/form/button")).click();
        browser.waitForAngular();
        await delay(10000);
    });
    Then('FCF-0020 Enter Parish user name and password', async  () => {
        await delay(5000);
        element(by.xpath(".//*[@id='simple-dropdown']")).click();
        await delay(5000);
        element(by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/span/div/login/form/input[1]")).sendKeys("catholic@gmail.com");
        await delay(1000);
        element(by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/span/div/login/form/input[2]")).sendKeys("Faith@123");
        await delay(1000);
        element(by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/span/div/login/form/button")).click();
        browser.waitForAngular();
        await delay(10000);
    });
    When('FCF-0020 navigate to community page and Enter parish user name details', async  () => {
        await delay(10000);
        element(by.xpath(".//*[@id='header']/div/div[1]/div/div/global-nav/ul/li[2]/a")).click();
        browser.waitForAngular();
        await delay(5000);
        element(by.xpath(".//*[@id='simple-dropdown']")).click();
        await delay(5000);
        element(by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/span/div/login/form/input[1]")).sendKeys("test+parish@formed.org");
        await delay(1000);
        element(by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/span/div/login/form/input[2]")).sendKeys("formed");
        await delay(1000);
        element(by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/span/div/login/form/button")).click();
        browser.waitForAngular();
        await delay(10000);
    });
    When('FCF-0010 navigate to community page and Enter username and password', async  () => {
        await delay(5000);
        element(by.xpath(".//*[@id='header']/div/div[1]/div/div/global-nav/ul/li[2]/a")).click();
        browser.waitForAngular();
        await delay(10000);
        element(by.xpath(".//*[@id='simple-dropdown']")).click();
        await delay(5000);
        element(by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/span/div/login/form/input[1]")).sendKeys("sairajesh1234@gmail.com");
        await delay(1000);
        element(by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/span/div/login/form/input[2]")).sendKeys("Honey@123");
        await delay(1000);
        element(by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/span/div/login/form/button")).click();
        browser.waitForAngular();
        await delay(5000);
    });
    When('navigate to community page', async () => {
        await delay(5000);
        element(by.xpath(".//*[@id='header']/div/div[1]/div/div/global-nav/ul/li[2]/a")).click();
        browser.waitForAngular();
        await delay(10000);
    });
    Then('FCF-0020 Feature and group tab in dashboard menu', async  () => {
        await delay(20000);
        element(by.xpath(".//*[@id='simple-dropdown']/span")).click();
        await delay(4000);
        element(by.xpath(".//*[@id='header']/div/div[1]/div/div/ul/profile-menu/div/div/div/div/div[2]/span[1]/a")).click();
        browser.waitForAngular();
        await delay(10000); 
        await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div[2]/div/ul/li[1]"))).to.eventually.exist;
        await delay(1000);
        await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div[2]/div/ul/li[2]"))).to.eventually.exist;
        await delay(1000);
        element(by.xpath(".//*[@id='scroll-top']/div/div[2]/div/ul/li[2]/a/tab-heading/div/i")).click();
        browser.waitForAngular();
        await delay(10000);
    });
    When('FCF-0030 naviagte to listen link and click on audio books' , async () =>{
        browser.waitForAngular();
        await delay(10000);
        browser.actions().mouseMove(element(by.xpath(".//*[@href='/catholic-audio']"))).perform();
        await delay(5000);
        element(by.xpath(".//*[@href='/catholic-audio?linkId=listen-audiobooks']")).click();
        await delay(10000);
    });
    Then('FCF-0040 click on image in audio books' , async () => {
        await delay(10000);
        await expect(browser.findElement(by.xpath("//*[@id='scroll-top']/div/segmented-page/div/div[4]/segment/div[2]/div/stripe/div/div/div[2]/div/div/div/div/div[8]/div/a/img"))).to.eventually.exist;
        await delay(2000);
        element(by.xpath("//*[@id='scroll-top']/div/segmented-page/div/div[4]/segment/div[2]/div/stripe/div/div/div[2]/div/div/div/div/div[8]/div/a/img")).click();
        browser.waitForAngular();
        await delay(10000);
    });
    Then('FCF-0050 click on create feature and discussion group', async () => {
        await delay(10000);
        await expect(browser.findElement(by.xpath(".//*[@id='audio']/div[3]/div[1]/custom-content-creator/div/div/modal-link/a/span"))).to.eventually.exist;
        await delay(2000);
        element(by.xpath(".//*[@id='audio']/div[3]/div[1]/custom-content-creator/div/div/modal-link/a/span")).click();
        await delay(8000);
   });
   Then('FCF-0060 create feature contant', async () =>{
        element(by.xpath("html/body/div[3]/div/div/div[2]/div[2]/div/div[1]/div[1]")).click();
        await delay(5000);
        await expect(browser.findElement(by.xpath("html/body/div[3]/div/div/div[2]/div[3]/a"))).to.eventually.exist;
        await delay(2000);
        element(by.xpath("html/body/div[3]/div/div/div[2]/div[3]/a")).click();
        await delay(5000);
   });
   Then('FCF-0060 click on create community feature', async () => {
        await expect(browser.findElement(by.xpath("html/body/div[3]/div/div/div[2]/div/div[2]/a[1]"))).to.eventually.exist;
        await delay(2000);
        element(by.xpath("html/body/div[3]/div/div/div[2]/div/div[2]/a[1]")).click();
        await delay(5000);
   });
   Then('FCF-0060 click on view community feature', async () => {
        await expect(browser.findElement(by.xpath("html/body/div[3]/div/div/div[2]/div/div[2]/a[1]"))).to.eventually.exist;
        await delay(2000);
        browser.executeScript('window.scrollTo(685, 216)');
        await delay(15000);
        element(by.xpath("html/body/div[3]/div/div/div[2]/div/div[2]/a[1]")).click();
        await delay(5000);
  });
   When('FCF-0070 Move a feature into the Published', async () =>{
        await delay(10000);   
        element(by.xpath("/html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[1]/div[2]/div/ul/li[2]/promo-unit-dashboard-wrapper/div/div/div/div/a")).click();
        await delay(10000);
        element(by.xpath(".//*[@id='header']/div/div/div/div/global-nav/ul/li[2]/a")).click();
        await delay(20000);
        element(by.xpath(".//*[@id='simple-dropdown']/span")).click();
        await delay(10000);
        element(by.xpath(".//*[@id='header']/div/div[1]/div/div/ul/profile-menu/div/div/div/div/div[2]/span[1]/a")).click();
        await delay(10000);
        element(by.xpath(".//*[@id='scroll-top']/div/div[2]/div/ul/li[2]")).click();
        await delay(15000);
   });
   When('FCF-0070 Move a Group into the Published', async () =>{
    element(by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[1]/div[2]/div/ul/li[1]/promo-unit-dashboard-wrapper/div/div/div/div/a/i")).click();
    await delay(10000);
    element(by.xpath(".//*[@id='header']/div/div/div/div/global-nav/ul/li[2]/a")).click();
    browser.waitForAngular();
    await delay(10000);
    element(by.xpath(".//*[@id='simple-dropdown']/span")).click();
    await delay(5000);
    element(by.xpath(".//*[@id='header']/div/div[1]/div/div/ul/profile-menu/div/div/div/div/div[2]/span[1]/a")).click();
    browser.waitForAngular();
    await delay(5000);
    element(by.xpath(".//*[@id='scroll-top']/div/div[2]/div/ul/li[2]")).click();
    await delay(10000);
   });
    Then('FCF-0080 move a published feature into unpublished list', async () => {
        await delay(5000);
        await expect(browser.findElement(by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/div[1]/div[2]/ul/li[3]/promo-unit-dashboard-wrapper/div/div/div/div/a"))).to.eventually.exist;
        await delay(2000);
        element(by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/div[1]/div[2]/ul/li[3]/promo-unit-dashboard-wrapper/div/div/div/div/a")).click();
        browser.waitForAngular();
        await delay(5000);
    });
    Then('FCF-0070 click on Edit feature in unpublish list', async () =>{
        await delay(10000);
        browser.executeScript('window.scrollTo(204, 170)');
        await delay(5000);
         element(by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div/div[2]/div/ul/li[1]/promo-unit-dashboard-wrapper/div/div/div/div/div/modal-link/a/span")).click();
         browser.waitForAngular();
         await delay(5000);
    });
    Then('FCF-0070 change the name Title ,text color and click on cencle button', async () => {
        await delay(5000);
         element(by.xpath(".//*[@placeholder='Custom Content Name']")).sendKeys('mind')
         await delay(2000);
         element(by.xpath(".//*[@data-placeholder='Type the description for your Feature here']")).sendKeys('sasicharah');
         await delay(2000);
         element(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/div/create-feature-view/form/media-position-selector/div/div/div[2]/div[1]/div[2]/div")).click();
         await delay(2000);
         element(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/div/create-feature-view/form/background-color/div/div[2]/ul/li[8]/a")).click();
         await delay(2000);
         element(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/div/create-feature-view/form/div[2]/a")).click();
         await delay(10000);
    });
    Then('FCF-0070 change the name Title ,text color and click on Update button', async () => {
         await delay(5000);
         element(by.xpath(".//*[@placeholder='Custom Content Name']")).sendKeys('mind')
         await delay(2000)
         element(by.xpath(".//*[@data-placeholder='Type the description for your Feature here']")).sendKeys('sasicharah');
         await delay(2000);
         element(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/div/create-feature-view/form/media-position-selector/div/div/div[2]/div[1]/div[2]/div")).click();
         await delay(3000);
         element(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/div/create-feature-view/form/background-color/div/div[2]/ul/li[8]/a")).click();
         await delay(3000);
         await expect(browser.findElement(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/div/create-feature-view/form/input"))).to.eventually.exist;
         await delay(2000);
        element(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/div/create-feature-view/form/input")).click();
        await delay(10000);
    });
    Then('FCF-0090 Delete feature', async () =>{
        browser.navigate().refresh();
        await delay(10000);
        element(by.xpath("/html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[1]/div[2]/div/ul/li[1]/promo-unit-dashboard-wrapper/div/div/div/div/div[2]/a[2]")).click();
        await delay(4000); 
        element(by.xpath("/html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[1]/div[2]/div/ul/li[1]/promo-unit-dashboard-wrapper/div/div/div/div/div[2]/div/div[2]/div/div/p[2]/a")).click();
        await delay(4000);
  });
   Then('FCF-0120 click on Discussion group' , async () => {
        await delay(4000); 
        element(by.xpath("/html/body/div[3]/div/div/div[2]/div[2]/div/div[2]/div[1]")).click();
        await delay(3000);
        await expect(browser.findElement(by.xpath("html/body/div[3]/div/div/div[2]/div[3]/a"))).to.eventually.exist;
        await delay(2000);
        element(by.xpath("html/body/div[3]/div/div/div[2]/div[3]/a")).click();
        await delay(3000);
   });
  Then('FCF-0120 Click on create discussion group' , async () => {
        await expect(browser.findElement(by.xpath("html/body/div[3]/div/div/div[2]/div/div[2]/a[1]"))).to.eventually.exist;
        await delay(2000);
        await expect(browser.findElement(by.xpath("html/body/div[3]/div/div/div[2]/div/div[2]/a[2]"))).to.eventually.exist;
        await delay(2000);
        element(by.xpath("html/body/div[3]/div/div/div[2]/div/div[2]/a[1]")).click();
        await delay(15000);
  });
  Then('FCF-0120 click on View group' , async () => {
    await delay(2000);
        await expect(browser.findElement(by.xpath("html/body/div[3]/div/div/div[2]/div/div[2]/a[1]"))).to.eventually.exist;
        await delay(2000);
        await expect(browser.findElement(by.xpath("html/body/div[3]/div/div/div[2]/div/div[2]/a[2]"))).to.eventually.exist;
        await delay(2000);
        element(by.xpath("html/body/div[3]/div/div/div[2]/div/div[2]/a[1]")).click();
        await delay(15000);
   });
Then('FCF-0130 Edit the group' , async () => {
	await delay(5000);
    element(by.xpath("//*[@id='workspace']/div[2]/div/div/promo-unit-dashboard-wrapper/div/div/div/div/div[2]/modal-link/a")).click();
    await delay(10000);
    await expect(browser.findElement(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/create-group-view/div[2]/div/a"))).to.eventually.exist;
    await delay(2000);
    element("html/body/div[3]/div/div/promo-unit-modal/div[3]/create-group-view/div[1]/ul/li[2]/a/tab-heading/div/h3").click();
    await delay(3000);
    await expect(browser.findElement(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/create-group-view/div[2]/div/a"))).to.eventually.exist;
    await delay(2000);
    element(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/create-group-view/div[1]/ul/li[3]/a/tab-heading/div/h3")).click();
    await delay(5000);
    await expect(browser.findElement(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/create-group-view/div[2]/div/a"))).to.eventually.exist;
    await delay(2000);
    element(by.xpath("html/body/div[3]/div/div/promo-unit-modal/a/i")).click();
});
Then('FCF-0160 click on Add session to existing discussion group', async () =>{
    element(by.xpath("html/body/div[3]/div/div/div[2]/div[2]/div/div[3]/div[1]")).click();
    await delay(5000);
    await expect(browser.findElement(by.xpath("html/body/div[3]/div/div/div[2]/div[3]/a"))).to.eventually.exist;
    await delay(2000);
    element(by.xpath("html/body/div[3]/div/div/div[2]/div[3]/a")).click();
    await delay(5000);
});
Then('FCF-0160 select group and click on Addsession', async () =>{
    element(by.xpath(".//*[@id='promoUnitSelect']")).click();
    await delay(5000);
    element(by.xpath("html/body/div[3]/div/div/div[2]/div/span/div/ul/li[1]/div")).click();
    await delay(3000);
    await expect(browser.findElement(by.xpath("html/body/div[3]/div/div/div[2]/div/div[3]/a[1]"))).to.eventually.exist;
    await delay(2000);
    element(by.xpath("html/body/div[3]/div/div/div[2]/div/div[3]/a[1]")).click();
    await delay(10000);
});
When('FCF-0160 click on View group', async () =>{
    await expect(browser.findElement(by.xpath("html/body/div[3]/div/div/div[2]/div/div[3]/a[1]"))).to.eventually.exist;
    await delay(2000);
    await expect(browser.findElement(by.xpath("html/body/div[3]/div/div/div[2]/div/div[3]/a[2]"))).to.eventually.exist;
    await delay(2000);
    element(by.xpath("html/body/div[3]/div/div/div[2]/div/div[3]/a[1]")).click();
    await delay(10000);
});
Then('FCF-0130 click on edit button' , async () => {
    await delay(25000);
    element(by.xpath("//*[@id='workspace']/div[2]/div/div/promo-unit-dashboard-wrapper/div/div/div/div/div[2]/modal-link/a/span")).click();
    await delay(15000);
});
Then('FCF-0130 click on Edit button' , async () => {
    browser.navigate().refresh()
    await delay(10000);
    element(by.xpath("/html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[1]/div[2]/div/ul/li[1]/promo-unit-dashboard-wrapper/div/div/div/div/div[2]/modal-link/a")).click();
    await delay(10000);
});
Then('FCF-0130 click on managesessions and create a session using Youtube' , async () => {
    element(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[1]/ul/li[2]/a/tab-heading/div/h3")).click();
    await delay(7000);
    await expect(browser.findElement(by.xpath("/html/body/div[3]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[1]/div/div[2]/div/manage-sessions-view/form/name-and-description/div[1]/div"))).to.eventually.exist;
    await delay(3000);
    element(by.xpath("/html/body/div[3]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[1]/div/div[2]/div/manage-sessions-view/form/div[2]/a/span[2]")).click();
    await delay(5000);
    element(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[1]/div/div[2]/div/manage-sessions-view/form/name-and-description/div[1]/input")).sendKeys("Formed");
    await delay(5000);
    element(by.xpath("/html/body/div[3]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[1]/div/div[2]/div/manage-sessions-view/form/name-and-description/div[2]/ng-quill-editor/div/div/div[1]")).sendKeys("fOrmed.org");
    await delay(5000);
    element(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[1]/div/div[2]/div/manage-sessions-view/form/media-type-selector/div/div/div[2]/div[1]/div[2]/div")).click();
    await delay(5000);
    element(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[1]/div/div[2]/div/manage-sessions-view/form/media-embed/div[2]/div[2]/div/textarea")).sendKeys('<iframe width="560" height="315" src="https://www.youtube.com/embed/gkgGN54h6vg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    await delay(10000);
});
Then('FCF-0140 Click on manage sessions' , async () => {
    await delay(4000);
    await expect(browser.findElement(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[1]/ul/li[2]/a/tab-heading/div/h3"))).to.eventually.exist;
    await delay(1000);
    element(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[1]/ul/li[2]/a/tab-heading/div/h3")).click();
    await delay(5000);
    await expect(browser.findElement(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[1]/div/div[2]/div/manage-sessions-view/form/div[2]/a/span[2]"))).to.eventually.exist;
    await delay(1000);
});
Then('FCF-0130 click on save button', async () => {
    await delay(5000);
    element(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[2]/button")).click();
    browser.waitForAngular();
    await delay(10000);
    element(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[1]/i")).click();
	await delay(10000);
});
Then('FCF-0140 create another session' , async () => {
    await delay(10000);
    element(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[1]/ul/li[2]/a/tab-heading/div/h3")).click();
    await delay(5000);
    await expect(browser.findElement(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[1]/div/div[2]/div/manage-sessions-view/form/div[2]/a/span[2]"))).to.eventually.exist;
    await delay(3000);
    element(by.xpath("/html/body/div[3]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[1]/div/div[2]/div/manage-sessions-view/form/div[2]/a/span[2]")).click();
    await delay(2000);
    element(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[1]/div/div[2]/div/manage-sessions-view/form/name-and-description/div[1]/input")).sendKeys("Catholic");
    await delay(2000);
    element(by.xpath("/html/body/div[3]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[1]/div/div[2]/div/manage-sessions-view/form/name-and-description/div[2]/ng-quill-editor/div/div/div[1]")).sendKeys("So much content, it’s my go-to tool for Catholic learning. 5 stars!");
    await delay(2000);
    element(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[1]/div/div[2]/div/manage-sessions-view/form/media-embed/div[2]/div[2]/div/textarea")).sendKeys('<iframe src="https://player.vimeo.com/video/76979871?embedparameter=value" width="640" height="360" frameborder="0" allowfullscreen></iframe>');
    await delay(6000);
    element(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[2]/button")).click();
    browser.waitForAngular();
    await delay(10000);
});
Then('FCF-0140 create a session using Vimeo', async () => {
    element(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[1]/ul/li[2]/a/tab-heading/div/h3")).click();
    await delay(5000);
    await expect(browser.findElement(by.xpath("/html/body/div[3]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[1]/div/div[2]/div/manage-sessions-view/form/name-and-description/div[1]/div"))).to.eventually.exist;
    await delay(3000);          
    element(by.xpath("/html/body/div[3]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[1]/div/div[2]/div/manage-sessions-view/form/div[2]/a/span[2]")).click();
    await delay(2000);               
    element(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[1]/div/div[2]/div/manage-sessions-view/form/name-and-description/div[1]/input")).sendKeys("Formed");
    await delay(2000);
    element(by.xpath("/html/body/div[3]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[1]/div/div[2]/div/manage-sessions-view/form/name-and-description/div[2]/ng-quill-editor/div/div/div[1]")).sendKeys("I’m so excited that FORMED has an app! As someone who has come back to the Catholic faith, FORMED has been such an important part of my love for the Church.");
    await delay(4000);
    element(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[1]/div/div[2]/div/manage-sessions-view/form/media-type-selector/div/div/div[2]/div[1]/div[2]/div")).click();
    await delay(6000);
    element(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[1]/div/div[2]/div/manage-sessions-view/form/media-embed/div[2]/div[2]/div/textarea")).sendKeys('<iframe src="https://player.vimeo.com/video/76979871?embedparameter=value" width="640" height="360" frameborder="0" allowfullscreen></iframe>');
    browser.waitForAngular();
    await delay(10000);
});
When('FCF-0140 click on dropdown from manage sessions', async() => {
    await delay(5000);
    element(by.xpath("//*[@id='sessionSelectDropdown']")).click();
    await delay(5000);
});
Then('FCF-0140 Manage session  dropdown is displayed', async() => {
    await expect(browser.findElement(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[1]/div/div[2]/div/manage-sessions-view/form/span/div/ul/li[4]/div"))).to.eventually.exist;
    await delay(2000);
});
    Then('FCF-0140 click on oraganize sessions', async() => {
    element(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[1]/ul/li[3]/a/tab-heading/div/h3")).click();
    await delay(5000);
    await expect(browser.findElement(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[1]/div/div[3]/div/organize-sessions-view/div[2]/div/div/ul/li[1]/div[2]/div[2]/a/i"))).to.eventually.exist;
    await delay(2000);
});
Then('FCF-0150 delete the session' , async () => {
    element(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[1]/div/div[3]/div/organize-sessions-view/div[2]/div/div/ul/li[1]/div[2]/div[2]/a/i")).click();
    await delay(5000);
    await expect(browser.findElement(by.xpath("html/body/div[4]/div/div/div[4]/input"))).to.eventually.exist;
    await delay(2000);
    element(by.xpath("html/body/div[4]/div/div/div[4]/input")).click();
    await delay(6000);
    element(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[1]/ul/li[2]/a/tab-heading/div/h3")).click();
    await delay(6000);
    element(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[1]/i")).click();
    await delay(6000);
});
When('FCF-0140 click on save button', async() => {
    element(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/create-group-view/div[2]/button")).click();
    await delay(6000);
    element(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/create-group-view/div[2]/div/a")).click();
    await delay(6000);
});
When('FCF-0120 navigate to community page', async() => {
    element(by.xpath(".//*[@id='header']/div/div[1]/div/div/global-nav/ul/li[2]/a")).click();
    await delay(5000);
    await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div/div[3]/div[1]/organization-header/div/div[1]/div[1]/div[1]/div/img"))).to.eventually.exist;
    await delay(1000);
    await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div/div[3]/div[1]/organization-header/div/div[3]/div/div/share/ul/li[1]/a"))).to.eventually.exist;
    await delay(1000);
    await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div/div[3]/div[1]/organization-header/div/div[3]/div/div/share/ul/li[2]/a"))).to.eventually.exist;
    await delay(1000);
    await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div/div[3]/div[1]/organization-header/div/div[3]/div/div/share/ul/li[3]/a"))).to.eventually.exist;
    await delay(1000);
    await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div/div[3]/div[1]/organization-header/div/div[3]/div/div/share/ul/li[4]/a"))).to.eventually.exist;
    await delay(1000);
    element(by.xpath(".//*[@id='simple-dropdown']/span")).click();
    await delay(5000);
    element(by.xpath(".//*[@id='header']/div/div[1]/div/div/ul/profile-menu/div/div/div/div/div[2]/span[1]/a")).click();
    await delay(5000);
    element(by.xpath(".//*[@id='scroll-top']/div/div[2]/div/ul/li[2]")).click();
    browser.waitForAngular();
    await delay(10000);
});
Then('FCF-0140 create a session using Audio', async () => {
    element(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[1]/ul/li[2]/a/tab-heading/div/h3")).click();
    await delay(5000);
    await expect(browser.findElement(by.xpath("/html/body/div[3]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[1]/div/div[2]/div/manage-sessions-view/form/name-and-description/div[1]/div"))).to.eventually.exist;
    await delay(2000);
    element(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[1]/div/div[2]/div/manage-sessions-view/form/div[2]/a/span[1]")).click();
    await delay(5000);
    element(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[1]/div/div[2]/div/manage-sessions-view/form/name-and-description/div[1]/input")).sendKeys("Formed");
    await delay(5000);
    element(by.xpath("/html/body/div[3]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[1]/div/div[2]/div/manage-sessions-view/form/name-and-description/div[2]/ng-quill-editor/div/div/div[1]")).sendKeys("I’m so excited that FORMED has an app! As someone who has come back to the Catholic faith, FORMED has been such an important part of my love for the Church.");
    await delay(3000);
    element(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[1]/div/div[2]/div/manage-sessions-view/form/media-type-selector/div/div/div[2]/div[1]/div[3]/div")).click();
    await delay(5000);
    element(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[1]/div/div[2]/div/manage-sessions-view/form/media-embed/div[3]/div[2]/div/textarea")).sendKeys('<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/328259811&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>');
    await delay(6000);
});
Then('FCF-0170 Click on group roster and verify', async() => {
    await delay(5000);
    element(by.xpath(".//*[@id='content']/div/div/div[2]/div[1]/div[2]/div/div/button")).click();
    await delay(5000);
    await expect(browser.findElement(by.xpath(".//*[@id='content']/div/div/div[2]/div[1]/div[2]/div/div/ul/li[1]/button"))).to.eventually.exist;
    await delay(2000);
});
When('FCF-0180 click on New Post', async() => {
    await expect(browser.findElement(by.xpath(".//*[@id='newPostButton']/button"))).to.eventually.exist;
    await delay(2000);
    element(by.xpath("//*[@id='newPostButton']/button/span/span")).click();
    await delay(3000);
    element(by.xpath(".//*[@id='composer']/div/div[2]/div/div[1]/div[2]/div/div/textarea")).sendKeys('Formed');
    await delay(3000);
    element(by.xpath(".//*[@id='composer']/div/div[2]/div/div[1]/div[2]/div/ul/li[1]/button")).click();
    await delay(3000);
});
Then('FCF-0190 click on Comments', async() => {
    await delay(5000);
    element(by.xpath(".//*[@id='content']/div/div/div[4]/div[2]/div/div/ul/li[1]/div/div/div/div/a")).click();
    await delay(5000);
    await expect(browser.findElement(by.xpath(".//*[@id='content']/div/div[3]/div[2]/header/div/ul/li[2]/div/button[1]"))).to.eventually.exist;
    await delay(2000);
});
Then('FCF-0190 Click on New Comments', async() => {
    await delay(2000);
    element(by.xpath(".//*[@id='content']/div/div[3]/div[2]/header/div/ul/li[2]/div/button[1]")).click();
    await delay(5000);
    element(by.xpath(".//*[@id='composer']/div/div[2]/div/div[1]/div[2]/div/div/textarea")).sendKeys('Catholic Faith');
    await delay(5000);
    element(by.xpath(".//*[@id='composer']/div/div[2]/div/div[1]/div[2]/div/ul/li[1]/button")).click();
    await delay(5000);
});
Then('FCF-0200 likes and replay buttons are dispalyed', async() => {
    await delay(2000);
    await expect(browser.findElement(by.xpath(".//*[@id='content']/div/div[3]/div[2]/div/div/div/div[1]/article/div/aside/ul/li[1]/button"))).to.eventually.exist;
    await delay(2000);
    await expect(browser.findElement(by.xpath(".//*[@id='content']/div/div[3]/div[2]/div/div/div/div[1]/article/div/aside/ul/li[2]/button"))).to.eventually.exist;
    await delay(2000);
});
When('FCF-0210 click on likes and replay buttons', async() => {
    element(by.xpath(".//*[@id='content']/div/div[3]/div[2]/div/div/div/div[1]/article/div/aside/ul/li[1]/button")).click();
    await delay(3000);
    element(by.xpath(".//*[@id='content']/div/div[3]/div[2]/div/div/div/div[1]/article/div/aside/ul/li[2]/button")).click();
    await delay(3000);
});
When('FCF-0210 enter the text in replay textarea', async() => {
    await delay(8000);
    element(by.xpath(".//*[@id='composer']/div/div[2]/div/div[1]/div[2]/div/div/textarea")).sendKeys('Thank you');
    await delay(5000);
    element(by.xpath(".//*[@id='composer']/div/div[2]/div/div[1]/div[2]/div/ul/li[1]/button")).click();
    await delay(8000);
});
When('FCF-0140 click on save button and cencel button', async() => {
    await delay(8000);
    await expect(browser.findElement(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[2]/button"))).to.eventually.exist;
    await delay(2000);
    element(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[2]/button")).click();
    await delay(8000);
    element(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[1]/i")).click();
    await delay(8000);
});
When('FCF-0290 delete the Comments', async() => {
    element(by.xpath(".//*[@id='content']/div/div[3]/div[2]/div/div/div/div[1]/article/div/aside/ul/li[3]/div/button")).click();
    await delay(4000);
    await expect(browser.findElement(by.xpath(".//*[@id='content']/div/div[3]/div[2]/div/div/div/div[1]/article/div/aside/ul/li[3]/div/ul/li[3]/button"))).to.eventually.exist;
    await delay(2000);
    element(by.xpath(".//*[@id='content']/div/div[3]/div[2]/div/div/div/div[1]/article/div/aside/ul/li[3]/div/ul/li[3]/button")).click();
    await delay(10000);
});
Then('FCF-0220 click on Edit comment button', async() => {
    element(by.xpath(".//*[@id='content']/div/div[3]/div[2]/div/div/div/div[1]/article/div/aside/ul/li[3]/div/button")).click();
    await delay(5000);
    await expect(browser.findElement(by.xpath(".//*[@id='content']/div/div[3]/div[2]/div/div/div/div[1]/article/div/aside/ul/li[3]/div/ul/li[1]/button"))).to.eventually.exist;
    await delay(5000);
    element(by.xpath(".//*[@id='content']/div/div[3]/div[2]/div/div/div/div[1]/article/div/aside/ul/li[3]/div/ul/li[1]/button")).click();
    await delay(5000);
});
Then('FCF-0220 Enter text in Edit textarea', async() => {
    element(by.xpath(".//*[@id='composer']/div/div[2]/div/div[1]/div[2]/div/div/textarea")).sendKeys('GOOD product');
    await delay(3000);
    element(by.xpath(".//*[@id='composer']/div/div[2]/div/div[1]/div[2]/div/ul/li[1]/button")).click();
    await delay(2000);
});
Then('FCF-0230 click on Return to the session', async () => {
    await delay(8000);
    await expect(browser.findElement(by.xpath(".//*[@id='content']/div/div[1]/a"))).to.eventually.exist;
    await delay(3000);
    element(by.xpath(".//*[@id='content']/div/div[1]/a")).click();
    await delay(3000);
});
Then('FCF-0230 click on Edit button', async () => {
    element(by.xpath(".//*[@id='content']/div/div/div[2]/div[3]/div[1]/div/button")).click();
    await delay(5000);
    element(by.xpath(".//*[@id='content']/div/div/div[4]/div[2]/div/div/ul/li/div[2]/div[2]/div/div/div/button")).click();
    await delay(5000);
    element(by.xpath(".//*[@id='composer']/div/div[2]/div/div[1]/div[2]/div/div/textarea")).sendKeys("Formed");
    await delay(10000);
    element(by.xpath(".//*[@id='composer']/div/div[2]/div/div[1]/div[2]/div/ul/li[1]/button")).click();
    await delay(5000);

});
Then('FCF-0240 click on Return to the formed link', async () => {
    await expect(browser.findElement(by.xpath(".//*[@id='app']/main/div[1]/a"))).to.eventually.exist;
    await delay(3000);
    element(by.xpath(".//*[@id='app']/main/div[1]/a")).click();
    await delay(7000);
});
Then('click on logout button in community page', async () => {
    element(by.xpath(".//*[@id='simple-dropdown']/span")).click();
    await delay(5000);
    element(by.xpath(".//*[@id='header']/div/div[1]/div/div/ul/profile-menu/div/div/div/div/div[2]/a[3]")).click();
    browser.waitForAngular();
    await delay(8000);
});
Then('FCF-0250 individual user community page is displayed', async () =>{
    element(by.xpath(".//*[@id='simple-dropdown']")).click();
    await delay(5000);
    element(by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/span/div/login/form/input[1]")).sendKeys("rajeshnakka@gmail.com");
    await delay(1000);
    element(by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/span/div/login/form/input[2]")).sendKeys("Honey@123");
    await delay(1000);
    element(by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/span/div/login/form/button")).click();
    browser.waitForAngular();
    await delay(7000);
});
When('FCF-0250 navigate to community page', async () => {
    await delay(5000);
    element(by.xpath(".//*[@id='header']/div/div/div/div/global-nav/ul/li[2]/a")).click();
    await delay(10000);
});
When('click on logout button in community page individual user', async  () => {
    element(by.xpath(".//*[@id='simple-dropdown']/span")).click();
    await delay(2000);
    element(by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/div/div/div[2]/a[3]")).click();
    await delay(10000);
});
When('FCF-0260 Click on username drop down', async  () => {
    element(by.xpath(".//*[@id='simple-dropdown']")).click();
    await delay(2000);
    element(by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/span/div/login/form/input[1]")).sendKeys("rajeshnakka.cmc@gmail.com");
    await delay(1000);
    element(by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/span/div/login/form/input[2]")).sendKeys("123456");
    await delay(1000);
    element(by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/span/div/login/form/button")).click();
    await delay(5000);
    element(by.xpath(".//*[@id='header']/div/div/div/div/global-nav/ul/li[2]/a")).click();
    browser.waitForAngular();
    await delay(10000);
    await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div/div[3]/div/organization-header/div/div[3]/div/div/share/ul/li[1]/a"))).to.eventually.exist;
    await delay(5000);
});
Then('click on logout button from parish user', async  () => {
    element(by.xpath(".//*[@id='simple-dropdown']/span")).click();
    await delay(2000);
    element(by.xpath(".//*[@id='header']/div/div[1]/div/div/ul/profile-menu/div/div/div/div/div[2]/a[3]")).click();
    await delay(5000);
});
Then('FCF-0100 naviagte to read link and click on Nonfiction' , async () => {
    await delay(10000);
    browser.actions().mouseMove(element(by.xpath("//a[@href='/catholic-books']"))).perform();
    await delay(5000);
    element(by.xpath("//a[@href='/catholic-books?linkId=read-nonfiction']")).click();
    await delay(10000);
    element(by.xpath("//*[@id='scroll-top']/div/segmented-page/div/div[1]/segment/div[2]/div/stripe/div/div/div[2]/div/div/div/div/div[11]/div/a/img")).click();
    await delay(5000);
});
Then('FCF-0100 click on create feature and discussion group', async () => {
    await delay(20000);
    await expect(browser.findElement(by.xpath(".//*[@id='book']/div[3]/div[1]/custom-content-creator/div/div/modal-link/a/span"))).to.eventually.exist;
    await delay(2000);
    element(by.xpath(".//*[@id='book']/div[3]/div[1]/custom-content-creator/div/div/modal-link/a/span")).click();
    await delay(5000);
});
Then('FCF-0110 Navigate to study link and click on Faith Formation' , async () => {
    browser.actions().mouseMove(element(by.xpath("//a[@href='/catholic-programs']"))).perform();
    await delay(7000);
    element(by.xpath("//a[@href='/catholic-programs?linkId=study-faith-formation']")).click();
    browser.waitForAngular();
    await delay(10000);
    element(by.xpath("//*[@id='scroll-top']/div/segmented-page/div/div[3]/segment/div[2]/div/stripe/div/div/div[2]/div/div/div/div/div[6]/div/a/img")).click();
    await delay(10000);
});
Then('FCF-0120 click on create feature and discussion group', async () => {
    await delay(2000);
    await expect(browser.findElement(by.xpath("//*[@id='scroll-top']/div/div/div[3]/div[1]/custom-content-creator/div/div/modal-link/a/span"))).to.eventually.exist;
    await delay(2000);
    element(by.xpath(".//*[@id='scroll-top']/div/div/div[3]/div[1]/custom-content-creator/div/div/modal-link/a/span")).click();
    await delay(10000);
})
When('FCF-0110 naviagte to watch link and click on movies', async () => {
    await delay(10000);
    browser.actions().mouseMove(element(by.xpath("//a[@href='/catholic-movies']"))).perform();
    await delay(10000);
    element(by.xpath("//a[@href='/catholic-movies?linkId=watch-movies']")).click();
    browser.waitForAngular();
    await delay(10000);
    await expect(browser.findElement(by.xpath("//*[@id='scroll-top']/div/segmented-page/div/div[1]/segment/div[2]/div/stripe/div/div/div[2]/div/div/div/div/div[6]/div/a/img"))).to.eventually.exist;
    await delay(2000);
    element(by.xpath("//*[@id='scroll-top']/div/segmented-page/div/div[1]/segment/div[2]/div/stripe/div/div/div[2]/div/div/div/div/div[6]/div/a/img")).click();
    await delay(10000);
});
Then('FCF-0110 click on create feature and discussion group', async () => {
    await expect(browser.findElement(by.xpath(".//*[@id='description']/custom-content-creator/div/div/modal-link/a/span"))).to.eventually.exist;
    await delay(2000);
    element(by.xpath(".//*[@id='description']/custom-content-creator/div/div/modal-link/a/span")).click();
    await delay(8000);
});
Then('FCF-0260 click on new button and feature content option is displayed', async () => {
    await delay(8000);
    element(by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[1]/div[1]/h4/a/span/div/div[2]/span/a")).click();
    await delay(5000);
    await expect(browser.findElement(by.xpath(".//*[@id='workspace']/div[1]/h4/a/span/div/div[2]/span/div/ul/li[1]/modal-link/a/span"))).to.eventually.exist;
    await delay(2000);
    element(by.xpath(".//*[@id='workspace']/div[1]/h4/a/span/div/div[2]/span/div/ul/li[1]/modal-link/a/span")).click();
    await delay(8000);
});
Then('TS-0130 click on video product ondemand page without user', async () => {
	await delay(15000);
	element(by.xpath(".//*[@id='scroll-top']/div/div/trending-topics/div[2]/div/div/div/div/div[7]/a/div/div/div[2]/div")).click();
	await delay(1000);
	browser.waitForAngular();
	await delay(5000);
})
Then('FCF-0260 Feature Editor is displayed', async () => {
    await delay(10000);
    await expect(browser.findElement(by.xpath(".//*[@class='header']"))).to.eventually.exist;
    await delay(2000);
    await expect(browser.findElement(by.xpath(".//*[@placeholder='Custom Content Name']"))).to.eventually.exist;
    await delay(2000);
});
When('FCF-0260 create a feature using a Youtube embed code', async () => {
    element(by.xpath(".//*[@placeholder='Custom Content Name']")).sendKeys("youtube");
    await delay(2000);
    element(by.xpath(".//*[@data-placeholder='Type the description for your Feature here']")).sendKeys("youtubecode");
    await delay(2000);
    element(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/div/create-feature-view/form/media-type-selector/div/div/div[2]/div[1]/div[2]/div")).click();
    await delay(2000);
    element(by.xpath(".//*[@placeholder='Paste video embed code here']")).sendKeys('<iframe width="560" height="315" src="https://www.youtube.com/embed/d57hAb9FJoE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
    await delay(8000);
});
When('FCF-0270 create a feature using a vimeo code', async () => {
    element(by.xpath(".//*[@placeholder='Custom Content Name']")).sendKeys("Vimeo");
    await delay(3000);
    element(by.xpath(".//*[@data-placeholder='Type the description for your Feature here']")).sendKeys("vimeocode");
    await delay(3000);
    element(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/div/create-feature-view/form/media-type-selector/div/div/div[2]/div[1]/div[2]/div")).click();
    await delay(4000);
    element(by.xpath(".//*[@placeholder='Paste video embed code here']")).sendKeys('<iframe src="https://player.vimeo.com/video/76979871?embedparameter=value" width="640" height="360" frameborder="0" allowfullscreen></iframe>');
    await delay(8000);
});
When('FCF-0280 create a feature using a Soundcloud embed code', async () => {
    element(by.xpath(".//*[@placeholder='Custom Content Name']")).sendKeys("Soundcloudembed");
    await delay(3000);
    element(by.xpath(".//*[@data-placeholder='Type the description for your Feature here']")).sendKeys("Soundcloud embed code");
    await delay(3000);
    element(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/div/create-feature-view/form/media-type-selector/div/div/div[2]/div[1]/div[3]/div")).click();
    await delay(3000);
    element(by.xpath(".//*[@placeholder='Paste audio embed code here']")).sendKeys('<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/328259811&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>');
    await delay(5000);
});
Then('FCF-0280 parish admin community page is displayed' , async () => {
    await delay(10000);
    await expect(browser.findElement(by.xpath(".//*[@id='community-tabs']/div/div[1]/div[1]/organization-header/div/div[3]/div/div/share/ul/li[1]/a"))).to.eventually.exist;
    await delay(1000);
    await expect(browser.findElement(by.xpath("//*[@id='community-tabs']/div/div[1]/div[1]/organization-header/div/div[3]/div/div/share/ul/li[2]/a"))).to.eventually.exist;
    await delay(1000);//
    await expect(browser.findElement(by.xpath("//*[@id='community-tabs']/div/div[1]/div[1]/organization-header/div/div[3]/div/div/share/ul/li[3]/a"))).to.eventually.exist;
    await delay(1000);
    await expect(browser.findElement(by.xpath("//*[@id='community-tabs']/div/div[1]/div[1]/organization-header/div/div[3]/div/div/share/ul/li[4]/a"))).to.eventually.exist;
    await delay(1000);
    await expect(browser.findElement(by.xpath(".//*[@id='community-tabs']/div/div[1]/div[1]/organization-header/div/div[1]/div[1]/div[1]/div/img"))).to.eventually.exist;
    await delay(1000);
});
Then('FCF-0280 Click on save button', async () => {
    await delay(5000);
    await expect(browser.findElement(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/div/create-feature-view/form/input"))).to.eventually.exist;
    await delay(2000);
    element(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/div/create-feature-view/form/input")).click();
    browser.waitForAngular();
    await delay(10000);
});
When('REPO-002-A Work Area and Template Catalog is displayed', async () => {
    await delay(5000);
    await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[1]/h4/a/span/div/div[1]/h2"))).to.eventually.exist;
    await delay(1000);
    await expect(browser.findElement(by.xpath(".//*[@id='workspace']/div[1]/h4/a/span/div/div[1]/h2"))).to.eventually.exist;
    await delay(1000);
    await expect(browser.findElement(by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[1]/div[2]/div/ul/li[1]/promo-unit-dashboard-wrapper/div/div/div/div/div[2]/a[3]"))).to.eventually.exist;
    await delay(1000);
});
Then('REPO-002-A Click on the Template Catalog', async () => {
    await delay(5000);
    element(by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[1]/h4/a/span/div/div[1]")).click();
    browser.waitForAngular();
    await delay(10000);
    await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[1]/div/form/div[4]/input"))).to.eventually.exist;
    await delay(2000);
});
Then('REPO-002 Click on the Template Catalog', async () => {
    await delay(5000);
    element(by.xpath(".//*[@id='scroll-top']/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[1]/h4/a/span/div/div[1]")).click();
    await delay(10000);
    await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[1]/div/form/div[4]/input"))).to.eventually.exist;
    await delay(2000);
});
Then('REPO-002-A CliCk on the Work Area', async () => {
    await delay(5000);
    element(by.xpath(".//*[@id='workspace']/div[1]/h4/a/span/div/div[1]/h2")).click();
    await delay(10000);
});
Then('REPO-003-A click on USE icon and verify', async () => {
    await delay(5000);
    element(by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[3]/div/ul/li[1]/content-template/div/div[1]/div[2]/span/a")).click();
    await delay(10000);
    await expect(browser.findElement(by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[3]/div/ul/li[1]/content-template/div[2]/div[1]/div[2]/span/div/ul/li[1]/a"))).to.eventually.exist;
    await delay(2000);                         
    await expect(browser.findElement(by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[3]/div/ul/li[1]/content-template/div[2]/div[1]/div[2]/span/div/ul/li[2]/a"))).to.eventually.exist;
    await delay(2000);
});
Then('REPO-003-A Select the copy to Work Area option from the USE Icon', async () => {
    await delay(5000);
    element(by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[3]/div/ul/li[1]/content-template/div[2]/div[1]/div[2]/span/div/ul/li[1]/a")).click();
    await delay(10000);
    await expect(browser.findElement(by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[1]/div[2]/div/ul/li[1]/promo-unit-dashboard-wrapper/div/div/div/div/a"))).to.eventually.exist;
    await delay(2000);
})
Then('REPO-004-A Select Newest and verify', async () => {
    await delay(5000);
    browser.executeScript('window.scrollTo(0,2500)');
    await delay(5000);
    element(by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[1]/div/form/div[3]/div/div[2]/div/div[1]/span")).click();
    await delay(10000);
    await expect(browser.findElement(by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[1]/div/form/div[2]/div/div[2]/div/ul/li/div[4]/a/div"))).to.eventually.exist;
    await delay(2000);
    await expect(browser.findElement(by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[1]/div/form/div[2]/div/div[2]/div/ul/li/div[5]/a/div"))).to.eventually.exist;
    await delay(2000);
});
Then('REPO-004-A Select to sort A-Z and verify', async () => {
    await delay(5000);
    element(by.xpath(".//*[@id='ui-select-choices-row-1-1']/a/div")).click();
    await delay(10000);
    await expect(element(by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[3]/div/ul/li[1]/content-template/div/div[1]/div[1]/h2")).getText()).to.eventually.equal('Beloved: Living Marriage');
	await delay(5000);
});
Then('REPO-004-A Select to sort Z-A and verify', async () => {
    await delay(5000);
    element(by.xpath(".//*[@id='scroll-top']/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[1]/div/form/div[3]/div/div[2]/div/div[1]/span/span[2]/span")).click();
    await delay(7000);
    element(by.xpath(".//*[@id='ui-select-choices-row-1-2']/a/div")).click();
    await delay(8000);
    await expect(element(by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[3]/div/ul/li[1]/content-template/div/div[1]/div[1]/h2")).getText()).to.eventually.equal('Who am I to Judge?');
    await delay(5000);
    element(by.xpath(".//*[@id='scroll-top']/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[1]/div/form/div[3]/div/div[2]/div/div[1]/span/span[2]/span")).click();
    await delay(8000);
    element(by.xpath(".//*[@id='ui-select-choices-row-1-0']/a/div")).click();
    await delay(8000);
});
When('REPO-007 Select Published in Status ALL', async () => {
    element(by.xpath(".//*[@id='ui-select-choices-row-2-3']/a/div")).click();
    await delay(8000);
    element(by.xpath(".//*[@id='scroll-top']/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[1]/div/form/div[1]/div/div[2]/div/div[1]/span/span[2]/span")).click();
    await delay(5000);
    element(by.xpath(".//*[@id='ui-select-choices-row-2-0']/a/div")).click();
    await delay(5000);
});
When('REPO-007 Select Status ALL and verify', async () => {
    await delay(5000);
    browser.executeScript('window.scrollTo(0,2500)');
    await delay(5000);
    await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[1]/div/form/div[1]/div/div[2]/div/div[1]/span"))).to.eventually.exist;
    await delay(1000);
    element(by.xpath(".//*[@id='scroll-top']/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[1]/div/form/div[1]/div/div[2]/div/div[1]/span")).click();
    await delay(7000);
    await expect(browser.findElement(by.xpath(".//*[@id='ui-select-choices-row-2-3']/a/div"))).to.eventually.exist;
    await delay(1000);
    await expect(browser.findElement(by.xpath(".//*[@id='ui-select-choices-row-2-1']/a/div"))).to.eventually.exist;
    await delay(1000);
    await expect(browser.findElement(by.xpath(".//*[@id='ui-select-choices-row-2-2']/a/div"))).to.eventually.exist;
    await delay(1000);
    await expect(browser.findElement(by.xpath(".//*[@id='ui-select-choices-row-2-4']/a/div"))).to.eventually.exist;
    await delay(1000);
});
Then('REPO-006 Select Type ALL and verify', async () => {
    await delay(5000);
    browser.executeScript('window.scrollTo(888,10)');
    await delay(5000);
    element(by.xpath(".//*[@id='scroll-top']/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[1]/div/form/div[2]/div/div[2]/div/div[1]/span/span[2]/span")).click();
    await delay(5000);
    await expect(browser.findElement(by.xpath(".//*[@id='ui-select-choices-row-0-1']/a/div"))).to.eventually.exist;
    browser.manage().timeouts().implicitlyWait(3000);
    await expect(browser.findElement(by.xpath(".//*[@id='ui-select-choices-row-0-2']/a/div"))).to.eventually.exist;
    await delay(1000);
});
When('REPO-006-A Select Group in Type ALL and verify', async () => {
    await delay(3000);
    element(by.xpath(".//*[@id='ui-select-choices-row-0-1']/a/div")).click();
    await delay(5000);
    await expect(browser.findElement(by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[3]/div/ul/li[1]/content-template/div[2]/div[3]/div/div"))).to.eventually.exist;
    await delay(2000);
});
When('REPO-006-A Select Feature in Type ALL and verify', async () => {
    await delay(3000);
    browser.executeScript('window.scrollTo(888,10)');
    await delay(5000);
    element(by.xpath(".//*[@id='scroll-top']/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[1]/div/form/div[2]/div/div[2]/div/div[1]/span/span[2]/span")).click();
    await delay(5000);
    element(by.xpath(".//*[@id='ui-select-choices-row-0-2']/a/div")).click();
    await delay(5000);
    await expect(browser.findElement(by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[3]/div/ul/li[1]/content-template/div[2]/div[3]/div/div"))).to.eventually.exist;
    await delay(1000);
});
Then('REPO-013 Card elements are displayed', async () => {
    await delay(5000);
    await expect(browser.findElement(by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[3]/div/ul/li[1]/content-template/div/div[1]/div[2]/span/div/ul/li[2]/a"))).to.eventually.exist;
    browser.manage().timeouts().implicitlyWait(3000);
    await expect(browser.findElement(by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[3]/div/ul/li[1]/content-template/div/div[1]/div[2]/span/div/ul/li[1]/a"))).to.eventually.exist;
    browser.manage().timeouts().implicitlyWait(3000);
    await expect(browser.findElement(by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[3]/div/ul/li[1]/content-template/div/div[1]/div[2]/span/div/ul/li[3]/a"))).to.eventually.exist;
    browser.manage().timeouts().implicitlyWait(3000);
    await expect(browser.findElement(by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[3]/div/ul/li[1]/content-template/div/div[2]/div[1]/img"))).to.eventually.exist;
    browser.manage().timeouts().implicitlyWait(3000);
});
When('REPO-014 Click on View more button', async () => {
    await delay(5000);
    browser.executeScript('window.scrollTo(312,8)');
    await delay(10000);
    element(by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[3]/div/ul/li[1]/content-template/div[2]/div[2]/div[2]/span/modal-link/a/span")).click();
    await delay(10000);
    await expect(browser.findElement(by.xpath("html/body/div[3]/div/div/div[2]/div[2]/div/div"))).to.eventually.exist;
    await delay(5000);
    element(by.xpath("html/body/div[3]/div/div/div[1]/i")).click();
    await delay(8000); 
});
Then('REPO-014 Card Description Overflow', async () => {
    await expect(browser.findElement(by.xpath("html/body/div[3]/div/div/div[2]/div[2]/div/div"))).to.eventually.exist;
    await delay(2000);
    element(by.xpath("html/body/div[3]/div/div/div[1]/i")).click();
    await delay(10000);
})
Then('REPO-021 Click on Submit As Template', async () => {
    await delay(20000);
    element(by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[1]/div[2]/div/ul/li[1]/promo-unit-dashboard-wrapper/div/div/div/div/div[2]/a[3]")).click();
    await delay(15000);
    element(by.xpath("html/body/div[3]/div/div/div[4]/input")).click();
    await delay(10000);
});
When('REPO-015 click on USE icon and verify', async () => {
    await delay(5000);
    element(by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[3]/div/ul/li[1]/content-template/div[2]/div[1]/div[2]/span/a/i")).click();
    await delay(10000);
    await expect(browser.findElement(by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[3]/div/ul/li[1]/content-template/div[2]/div[1]/div[2]/span/div/ul/li[1]/a"))).to.eventually.exist;
    browser.manage().timeouts().implicitlyWait(3000);                         
    await expect(browser.findElement(by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[3]/div/ul/li[1]/content-template/div[2]/div[1]/div[2]/span/div/ul/li[2]/a"))).to.eventually.exist;
    await delay(2000);
});
When('REPO-042 Click on USE icon and verify', async () => {
    await delay(5000);
    browser.executeScript('window.scrollTo(474, 142)');
    await delay(5000);
    element(by.xpath("/html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[3]/div/ul/li[1]/content-template/div[2]/div[1]/div[2]/span/a/div")).click();
    await delay(10000);
    await expect(browser.findElement(by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[3]/div/ul/li[1]/content-template/div[2]/div[1]/div[2]/span/div/ul/li[1]/a"))).to.eventually.exist;
    await delay(2000);                         
    await expect(browser.findElement(by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[3]/div/ul/li[1]/content-template/div[2]/div[1]/div[2]/span/div/ul/li[2]/a"))).to.eventually.exist;
    await delay(2000);
    await expect(browser.findElement(by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[3]/div/ul/li[1]/content-template/div[2]/div[1]/div[2]/span/div/ul/li[3]/a"))).to.eventually.exist;
    await delay(2000);
    await expect(browser.findElement(by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[3]/div/ul/li[1]/content-template/div[2]/div[1]/div[2]/span/div/ul/li[4]/a"))).to.eventually.exist;
    await delay(2000);
});
Then('REPO-015 Select the copy to Work Area option from the USE Icon', async () => {
    await delay(5000);
    element(by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[3]/div/ul/li[1]/content-template/div[2]/div[1]/div[2]/span/div/ul/li[1]/a")).click();
    await delay(15000);
    await expect(browser.findElement(by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[1]/div[2]/div/ul/li[1]/promo-unit-dashboard-wrapper/div/div/div/div/a"))).to.eventually.exist;
    await delay(2000);
});
Then('REPO-041 Modifications To Cards Pendig review is displayed', async () => {
    await delay(5000);
    await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[3]/div/ul/li[1]/content-template/div[1]"))).to.eventually.exist;
    await delay(2000);
});
Then('REPO-002 Filters and search are displayed', async () => {
    await delay(5000);
    await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[1]/div/form/div[1]/div/div[2]/div/div[1]/span"))).to.eventually.exist;
    await delay(2000);                       
    await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[1]/div/form/div[2]/div/div[2]/div/div[1]/span"))).to.eventually.exist;
    await delay(2000);
    await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[1]/div/form/div[3]/div/div[2]/div/div[1]/span/span[2]/span"))).to.eventually.exist;
    await delay(2000);
    await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[1]/div/form/div[4]/input"))).to.eventually.exist;
    await delay(2000);
});
When('REPO-003 Select Copy to work area option from the use icon', async () => {
    await delay(5000);
    browser.executeScript('window.scrollTo(902,20)');
    await delay(5000);
    element(by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[3]/div/ul/li[41]/content-template/div/div[1]/div[2]/span/a")).click();
    await delay(10000);
    await expect(browser.findElement(by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[3]/div/ul/li[1]/content-template/div[2]/div[1]/div[2]/span/div/ul/li[1]/a"))).to.eventually.exist;
    await delay(2000);
    element(by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[3]/div/ul/li[1]/content-template/div[2]/div[1]/div[2]/span/div/ul/li[1]/a")).click();
    await delay(15000);
});     
Then('REPO-003 Work area is displayed', async () => {  
    await delay(5000);
    await expect(browser.findElement(by.xpath(".//*[@id='workspace']/div[1]/h4/a/span/div/div[1]/h2"))).to.eventually.exist;
    await delay(2000);
});
When('REPO-004 click on Sort and verify', async () => {  
    browser.executeScript('window.scrollTo(1105,10)');
    element(by.xpath(".//*[@id='scroll-top']/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[1]/div/form/div[3]/div/div[2]/div/div[1]/span/span[2]/span")).click();
    await delay(10000);
    await expect(browser.findElement(by.xpath(".//*[@id='ui-select-choices-row-1-1']/a/div"))).to.eventually.exist;
    browser.manage().timeouts().implicitlyWait(3000);
    await expect(browser.findElement(by.xpath(".//*[@id='ui-select-choices-row-1-2']/a/div"))).to.eventually.exist;
    await delay(2000);
});
Then('REPO-004 Click on A to Z and verify', async () => {  
    element(by.xpath(".//*[@id='ui-select-choices-row-1-1']/a/div")).click();
    await delay(10000);
    await expect(browser.findElement(by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[3]/div/ul/li[1]/content-template/div/div[2]/div[2]/p"))).to.eventually.exist;
    await delay(2000);
    element(by.xpath(".//*[@id='scroll-top']/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[1]/div/form/div[3]/div/div[2]/div/div[1]/span/span[2]/span")).click();
    await delay(10000);
});
When('REPO-004 Click on Z to A and verify', async () => {  
    await delay(10000);
    element(by.xpath(".//*[@id='ui-select-choices-row-1-2']/a/div")).click();
    await delay(10000);
    await expect(browser.findElement(by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[3]/div/ul/li[1]/content-template/div/div[2]/div[2]/p"))).to.eventually.exist;
    await delay(2000);
    element(by.xpath(".//*[@id='scroll-top']/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[1]/div/form/div[3]/div/div[2]/div/div[1]/span/span[2]/span")).click();
    await delay(10000);
    element(by.xpath(".//*[@id='ui-select-choices-row-1-0']/a/div")).click();
    await delay(8000);
});
Then('REPO-007 Click on Status All and verify Published', async () => {  
    element(by.xpath(".//*[@id='scroll-top']/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[1]/div/form/div[1]/div/div[2]/div/div[1]/span")).click();
    await delay(5000); 
    await expect(browser.findElement(by.xpath(".//*[@id='ui-select-choices-row-2-3']/a/div"))).to.eventually.exist;
    await delay(2000);
});
Then('REPO-006 Click on Group option and verify', async () => {  
    element(by.xpath(".//*[@id='ui-select-choices-row-0-1']/a/div")).click();
    await delay(10000); 
    await expect(browser.findElement(by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[3]/div/ul/li[1]/content-template/div[2]/div[3]/div/div"))).to.eventually.exist;
    await delay(2000);
});
Then('REPO-006 Click on Copy to Work Area', async () => {
    await delay(5000);
    element(by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[3]/div/ul/li[1]/content-template/div[2]/div[1]/div[2]/span/div/ul/li[1]/a")).click();
    await delay(10000);
});
Then('REPO-006 Click on Feature option and verify', async () => {  
    await delay(5000); 
    element(by.xpath(".//*[@id='ui-select-choices-row-0-2']/a/div")).click();
    await delay(10000); 
    await expect(browser.findElement(by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[3]/div/ul/li[1]/content-template/div/div[2]/div[1]/img"))).to.eventually.exist;
    await delay(2000);
});
When('REPO-006 Remove Filters and Verify', async () => {
    element(by.xpath(".//*[@id='scroll-top']/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[1]/div/form/div[2]/div/div[2]/div/div[1]/span")).click();
    await delay(10000); 
    element(by.xpath(".//*[@id='ui-select-choices-row-0-0']/a/div")).click();
    await delay(5000);   
    await expect(browser.findElement(by.xpath(".//*[@id='content-template-list']/div/ul/li[1]/content-template/div[1]"))).to.eventually.exist;
    browser.manage().timeouts().implicitlyWait(3000);
    await expect(browser.findElement(by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[3]/div/ul/li[1]/content-template/div[2]/div[1]/div[2]/span/a"))).to.eventually.exist;
    await delay(2000);
});
Then('REPO-006 click on Search icon', async () => {
    element(by.xpath("/html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[1]/div/form/div[4]/input")).sendKeys('AUG');
    await delay(15000);
});
When('REPO-017 Click on Review', async () => {
    await delay(5000);
    browser.executeScript('window.scrollTo(443,57)');
    await delay(2000);
    element(by.xpath("/html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[3]/div/ul/li[1]/content-template/div[2]/div[1]/div[2]/span/a/div ")).click();
    await delay(10000);                   
    element(by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[3]/div/ul/li[1]/content-template/div[2]/div[1]/div[2]/span/div/ul/li[2]/a")).click();
    await delay(8000);
});
Then('REPO-017 Group Editor is displayed', async () => {
    await delay(7000);
    await expect(browser.findElement(by.xpath("/html/body/div[3]/div/div/promo-unit-modal/div[3]/manage-template-view/form/div[1]/div/ul/li[1]/a/tab-heading/div/h3"))).to.eventually.exist;
    await delay(2000);                            
    element(by.xpath("/html/body/div[3]/div/div/promo-unit-modal/div[1]/i")).click();
    await delay(10000);
});
Then('REPO-016 Click on Feature option', async () => {
    await delay(5000);
    browser.executeScript('window.scrollTo(937, 20)');
    await delay(2000);
    element(by.xpath(".//*[@id='scroll-top']/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[1]/div/form/div[2]/div/div[2]/div/div[1]/span")).click();
    await delay(5000);
    element(by.xpath(".//*[@id='ui-select-choices-row-0-2']/a/div")).click();
    await delay(10000);
    await expect(browser.findElement(by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[3]/div/ul/li[1]/content-template/div[2]/div[1]/div[2]/span/a/div"))).to.eventually.exist;
    await delay(2000);
});
Then('REPO-016 Click on USE dropdown and verify Review option', async () => {
    await delay(5000);
    element(by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[3]/div/ul/li[1]/content-template/div/div[1]/div[2]/span/a/div")).click();
    await delay(5000);
    await expect(browser.findElement(by.xpath("/html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[3]/div/ul/li[1]/content-template/div/div[1]/div[2]/span/div/ul/li[2]/a"))).to.eventually.exist;
    await delay(2000);                         
});
When('REPO-018 Click on Review for Feature Editor', async () => {
    await delay(5000);
    element(by.xpath("/html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[3]/div/ul/li[1]/content-template/div/div[1]/div[2]/span/div/ul/li[2]/a")).click();
    await delay(15000); 
});
Then('REPO-018 Feature Editor is displayed', async () => {
    await delay(5000);
    await expect(browser.findElement(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/manage-template-view/form/div[1]/div/content-tags/div/tags-input/div/div"))).to.eventually.exist;
    await delay(2000);
    element(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[1]/i")).click();
    await delay(5000); 
});
Then('REPO-043 Click on Approve button', async () => {
    await delay(5000);
    browser.executeScript('window.scrollTo(443, 141)');
    await delay(5000); 
    element(by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[3]/div/ul/li[1]/content-template/div[2]/div[1]/div[2]/span/div/ul/li[3]/a")).click();
    await delay(10000);
    await expect(browser.findElement(by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[3]/div/ul/li[1]/content-template/div/div[1]/div[2]/span/div/ul/li[3]/a"))).to.eventually.exist;
    await delay(2000);
});
Then('REPO-016 Click on Copy to Work Area in USE icon', async () => {
    await delay(10000);
    element(by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[3]/div/ul/li[1]/content-template/div/div[1]/div[2]/span/a")).click();
    await delay(5000); 
    element(by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[3]/div/ul/li[1]/content-template/div[2]/div[1]/div[2]/span/div/ul/li[1]/a")).click();
    await delay(10000); 
    await expect(browser.findElement(by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[1]/div[2]/div/ul/li[2]/promo-unit-dashboard-wrapper/div/div/div/div/div[2]/modal-link/a"))).to.eventually.exist;
    await delay(2000);
});
Then('REPO-016 Click on Copy to Work Area in USE icon for Feature', async () => {
    await delay(10000);
    element(by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[3]/div/ul/li[1]/content-template/div/div[1]/div[2]/span/a")).click();
    await delay(10000); 
    element(by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[3]/div/ul/li[1]/content-template/div/div[1]/div[2]/span/div/ul/li[1]/a")).click();
    await delay(10000); 
    await expect(browser.findElement(by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[1]/div[2]/div/ul/li[2]/promo-unit-dashboard-wrapper/div/div/div/div/div[2]/modal-link/a"))).to.eventually.exist;
    await delay(2000);
});
Then('REPO-019 Click on Edit button for group', async () => {
    await delay(5000);
    browser.executeScript('window.scrollTo(173, 169)');
    await delay(5000);
    element(by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[1]/div[2]/div/ul/li[1]/promo-unit-dashboard-wrapper/div/div/div/div/div[2]/modal-link/a")).click();
    await delay(15000); 
    element(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[1]/div/div[1]/div/manage-group-view/form/group-settings/div/div[2]/div[2]/div[1]/div[1]/div")).click();
    await delay(10000); 
    element(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[2]/button")).click();
    await delay(10000); 
    element(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[1]/i")).click();
    await delay(5000); 
});
Then('REPO-019 Click on Edit button for Feature', async () => {
    await delay(5000);
    browser.executeScript('window.scrollTo(173, 169)');
    await delay(5000);
    element(by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[1]/div[2]/div/ul/li[1]/promo-unit-dashboard-wrapper/div/div/div/div/div[2]/modal-link/a")).click();
    await delay(15000); 
    element(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/div/create-feature-view/form/media-position-selector/div/div/div[2]/div[1]/div[1]/div")).click();
    await delay(10000); 
    element(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/div/create-feature-view/form/input")).click();
    await delay(10000); 
});
Then('REPO-025 Add a Tag in Group Editor', async () => {
    await delay(5000);
    await expect(browser.findElement(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/manage-template-view/form/div[1]/div/div/div[1]/div/div/content-tags/div/tags-input/div/div"))).to.eventually.exist;
    await delay(2000);                         
    element(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/manage-template-view/form/div[1]/div/div/div[1]/div/div/content-tags/div/tags-input/div/div/input")).click();
    await delay(5000); 
    element(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/manage-template-view/form/div[1]/div/div/div[1]/div/div/content-tags/div/tags-input/div/div/input")).sendKeys('session');
    await delay(5000); 
    element(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/manage-template-view/form/div[1]/div/div/div[1]/div/div/background-color/div/div[1]")).click();
    await delay(5000); 
    element(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/manage-template-view/form/input")).click();
    await delay(10000); 
});
Then('REPO-025 Add a Tag in Feature Editor', async () => {
    await delay(5000);
    await expect(browser.findElement(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/manage-template-view/form/div[1]/div/content-tags/div/tags-input/div/div"))).to.eventually.exist;
    await delay(2000);
    element(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/manage-template-view/form/div[1]/div/content-tags/div/tags-input/div/div/input")).click();
    await delay(5000);
    element(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/manage-template-view/form/div[1]/div/content-tags/div/tags-input/div/div/input")).sendKeys('Advent');
    await delay(5000); 
    element(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/manage-template-view/form/div[1]/div/background-color/div/div[1]")).click();
    await delay(5000); 
    element(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/manage-template-view/form/input")).click();
    await delay(5000); 
});
Then('REPO-026 Add Additional tag', async () => {
    await delay(5000);
    await expect(browser.findElement(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/manage-template-view/form/div[1]/div/content-tags/div/tags-input/div/div"))).to.eventually.exist;
    await delay(2000);
    element(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/manage-template-view/form/div[1]/div/content-tags/div/tags-input/div/div/input")).sendKeys('Formed');
    await delay(10000); 
    element(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/manage-template-view/form/div[1]/div/background-color/div/div[1]")).click();
    await delay(5000); 
    element(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/manage-template-view/form/input")).click();
    await delay(5000); 
});
When('REPO-027 Select matching Tag', async () => {
    await delay(5000);
    await expect(browser.findElement(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/manage-template-view/form/div[1]/div/content-tags/div/tags-input/div/div"))).to.eventually.exist;
    await delay(2000);
    element(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/manage-template-view/form/div[1]/div/content-tags/div/tags-input/div/div")).sendKeys('Aug');
    await delay(5000); 
    element(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/manage-template-view/form/div[1]/div/content-tags/div/tags-input/div/auto-complete/div/ul/li/ti-autocomplete-match/ng-include/span")).click();
    await delay(5000);
    element(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/manage-template-view/form/input")).click();
    await delay(5000);
});
Then('REPO-029 Delete the second tag', async () => {
    await delay(5000);
    await expect(browser.findElement(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/manage-template-view/form/div[1]/div/content-tags/div/tags-input/div/div"))).to.eventually.exist;
    await delay(5000);
    element(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/manage-template-view/form/div[1]/div/content-tags/div/tags-input/div/div/ul/li[2]/ti-tag-item/ng-include/a")).click();
    await delay(5000);    
    await expect(browser.findElement(by.xpath("html/body/div[3]/div/div/promo-unit-modal/div[3]/manage-template-view/form/input"))).to.eventually.exist;
    await delay(2000);  
});
Then('REPO-030 Tags are displayed alphabetical order', async () => {
    await delay(5000);
    await expect(element(by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[3]/div/ul/li[1]/content-template/div[2]/div[3]/div/span/span[1]/a"))).to.eventually.exist;
    await delay(5000);
    await expect(element(by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[3]/div/ul/li[1]/content-template/div[2]/div[3]/div/span/span[2]/a"))).to.eventually.exist;
	await delay(5000);
});
Then('REPO-006 Show Tags is displayed', async () => {
    await delay(5000);
    await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[2]/div/a"))).to.eventually.exist;
    await delay(2000);
});
When('REPO-006 Click on Show Tags', async () => {
    await delay(5000);
    browser.executeScript('window.scrollTo(150, 10)');
    await delay(5000);
    element(by.xpath(".//*[@id='scroll-top']/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[2]/div/a")).click();
    await delay(10000);
});
Then('REPO-007 Tags are displayed', async () => {
    await delay(15000);
    await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[2]/div/div/a[1]"))).to.eventually.exist;
    await delay(2000);
});
When('REPO-008 Select one Tag', async () => {
    await delay(5000);
    element(by.xpath(".//*[@id='scroll-top']/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[2]/div/div/a[23]")).click();
    await delay(10000); 
});
Then('REPO-010 Select Second Tag in Card', async () => {
    await delay(5000);
    element(by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[3]/div/ul/li[1]/content-template/div[2]/div[3]/div/span/span[1]/a")).click();
    await delay(5000);
    element(by.xpath(".//*[@id='scroll-top']/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[2]/div/div/a[23]")).click();
    await delay(8000); 
});
Then('REPO-010 Related Tags Cards are displayed', async () => {
    await delay(5000);
    await expect(browser.findElement(by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[3]/div/ul/li/content-template/div[2]/div[2]/div[2]/p"))).to.eventually.exist;
    await delay(2000);
});
Then('REPO-011 Clear Tags are displayed', async () => {
    await delay(5000);
    await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[2]/div/span/span/a"))).to.eventually.exist;
    await delay(2000);
});
When('REPO-011 Click on Clear Tags', async () => {
    await delay(5000);
    element(by.xpath(".//*[@id='scroll-top']/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[2]/div/span/span/a")).click();
    await delay(5000); 
});
Then('REPO-011 Remove selected Tags', async () => {
    await delay(5000);
    await expect(browser.findElement(by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[3]/div/ul/li[1]/content-template/div[2]/div[2]/div[2]/p"))).to.eventually.exist;
    await delay(2000);
});
When('REPO-011 click on Hide Tags', async () => {
    await delay(5000);
    element(by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[3]/div[2]/div/content-template-list/div[2]/div/span/a")).click();
    await delay(10000);
});
When('FCF-0290 click on New button in Discussion prompts for this session', async () => {
    await delay(5000);
    element(by.xpath("/html/body/div[3]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[1]/div/div[2]/div/manage-sessions-view/form/manage-prompts-view/div/div[1]/div[2]/a")).click();
    await delay(5000);
    element(by.xpath("/html/body/div[4]/div/div/div[2]/form/div[1]/ng-quill-editor/div/div/div[1]")).sendKeys('Test Discussion prompt');
    await delay(3000);
    element(by.xpath("/html/body/div[4]/div/div/div[2]/form/input")).click();
    await delay(5000);
});
Then('FCF-0290 Click on Visit group', async () => {
	await delay(5000);
    element(by.xpath("//*[@id='workspace']/div[2]/div/div/promo-unit-dashboard-wrapper/div/div/div/div/a")).click();
	await delay(5000);
	element(by.xpath(".//*[@id='header']/div/div/div/div/global-nav/ul/li[2]/a")).click();
	await delay(10000);
	element(by.xpath("//*[@id='community-tabs']/div/div[1]/div[2]/custom-content-wrapper/div/div/div/promo-unit/div/div[1]/a")).click();
});
When('FCF-0180 Click on session', async () => {
    await delay(5000);
    element(by.xpath("//*[@id='content']/div/div/div[2]/div[3]/div/div/button/span")).click();
    await delay(5000);
    await expect(browser.findElement(by.xpath("//*[@id='content']/div/div/div[2]/div[3]/div/div/ul/li[1]/a/div/div/div[2]"))).to.eventually.exist;
    await delay(2000);
    element(by.xpath("//*[@id='content']/div/div/div[2]/div[3]/div/div/ul/li[1]/a/div/div/div[2]")).click();
    await delay(5000);
});
When('navigate to market page', async () => {
	await delay(10000);
	element(by.xpath("//a[@href='https://market.beta.formed.org']")).click();
	await delay(5000);
	browser.waitForAngular();
});
Then('click on ondemand subscription' , async () => {
	await delay(15000);
	browser.actions().mouseMove(element(by.linkText("Subscriptions"))).perform();                           
	await delay(5000);
    element(by.xpath("//a[@href='https://market.beta.formed.org/all-products/formed-subscriptions/on-demand.html']")).click();
	await delay(1000);
	browser.waitForAngular();
	await delay(7000);
    element(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[1]/div/a/img")).click();
	await delay(1000);
	browser.waitForAngular();
});
Then('VR-0020 click on checkout button', async  () => {
	await delay(20000);
	element(by.xpath(".//*[@id='attribute201']/div[1]/label/span")).click();
	await delay(10000);
	await expect(browser.findElement(by.xpath(".//*[@id='product-addtocart-button']"))).to.eventually.exist;
	await delay(7000);
	element(by.xpath(".//*[@id='product-addtocart-button']")).click();
	await delay(3000);
	browser.waitForAngular();
	await delay(5000);
	element(by.xpath(".//*[@class='counter-number']")).click();
	await delay(5000);
	element(by.xpath(".//*[@id='top-cart-btn-checkout']")).click();
	await delay(5000);
});
Then('PBP-0070 Enter Details in create Account', async () => {
	await delay(50000);
	await expect(browser.findElement(by.xpath("//*[@id='checkout-step-billing']/div/div/a"))).to.eventually.exist;
    await delay(3000);
	element(by.xpath("//*[@id='checkout-step-billing']/div/div/a")).click();
	await delay(5000);
	browser.waitForAngular();
	await delay(10000);
	var x = 9999999;
	var rand = Math.floor(Math.random()*x) + 1;
	element(by.xpath(".//*[@id='gigya-register-screen']/form/div[1]/div[1]/input")).sendKeys("Fname");
	await delay(1000);
	element(by.xpath(".//*[@id='gigya-register-screen']/form/div[1]/div[2]/input")).sendKeys("Lname");
	await delay(1000);
	element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[1]/input")).sendKeys("50000");
	await delay(1000);
	element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[2]/input")).sendKeys("invalid"+rand+"@gmail.com");
	await delay(1000);
	element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[3]/input")).sendKeys("Raj@2016");
	await delay(1000);
	element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[4]/input")).sendKeys("Raj@2016");
	await delay(1000);
	element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[5]/div/label")).click();
	await delay(5000);
	element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[6]/input[1]")).click();        
	await delay(5000);
	browser.waitForAngular();
	await delay(10000);
});
Then('VR-0030 Enter Payment Method', async () => { 
	await delay(15000);
	element(by.xpath(".//*[@placeholder='Street Address']")).sendKeys("Chicago illonois");
	await delay(3000);
	element(by.xpath(".//*[@placeholder='City']")).sendKeys("Chicago");
	await delay(3000);
	element(by.xpath(".//*[@value='12']")).click();
	await delay(3000);
	element(by.xpath(".//*[@placeholder='Zip/Postal Code']")).sendKeys("60014");
	await delay(5000);
	//await delay(5000);
	//element(by.xpath(".//*[@id='magedelight_cybersource_cc_type']")).click();
	await delay(5000);
	//element(by.xpath(".//*[@id='billing-new-address-form']/div[4]/div")).click();
	element(by.xpath(".//*[@id='magedelight_cybersource_cc_type']/option[3]")).click();
	await delay(1000);
	element(by.xpath(".//*[@id='magedelight_cybersource_cc_number']")).sendKeys("4242424242424242");
	await delay(1000);
	element(by.xpath(".//*[@id='magedelight_cybersource_expiration']/option[2]")).click();
	await delay(1000);
	element(by.xpath(".//*[@id='magedelight_cybersource_expiration_yr']/option[4]")).click();
	await delay(1000);
	element(by.xpath(".//*[@id='magedelight_cybersource_cc_cid']")).sendKeys("123");
});
When('VR-0050 order conformation is displayed', async () => {
	await delay(5000);
	element(by.xpath(".//*[@id='checkout-step-payment']/div/div[3]/div/button")).click();
	await delay(5000);
	element(by.xpath(".//*[@id='group-subscription-diocese-select']")).click();
	await delay(3000);
	element(by.xpath(".//*[@id='group-subscription-diocese-select']/option[5]")).click();
	await delay(2000);
	element(by.xpath(".//*[@id='group-subscription-organization-select']")).click();
	await delay(3000);
	element(by.xpath(".//*[@id='group-subscription-organization-select']/option[6]")).click();
	await delay(3000);
	element(by.xpath(".//*[@id='group-subscription-organization']/div[4]/div/button")).click();
	await delay(10000);	
	await expect(browser.findElement(by.xpath(".//*[@id='checkout-step-review']/div[5]/div/button"))).to.eventually.exist;
	await delay(5000);
	element(by.xpath(".//*[@id='checkout-step-review']/div[5]/div/button")).click();
	await delay(3000);
	browser.waitForAngular();
    await delay(15000);
	await expect(browser.findElement(by.xpath("//a[@href='https://beta.formed.org/']"))).to.eventually.exist;
	browser.manage().timeouts().implicitlyWait(40000);
	await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[1]/div[1]/div[2]/span"))).to.eventually.exist;
	await delay(5000);
	element(by.xpath("//a[@href='https://beta.formed.org/']")).click();
	await delay(2000);
	browser.navigate().refresh();
	await delay(3000);
	browser.waitForAngular();
});
When('VR-0060 Enter organization information', async () => {
	await delay(30000);
	element(by.xpath("//*[@placeholder='Group Name']")).sendKeys("St Thomas the Doubter");
	await delay(2000);
	element(by.xpath(".//*[@id='groupLeader']")).sendKeys("Formed.org");
	await delay(2000);
	element(by.xpath(".//*[@id='groupMission']")).sendKeys("Catholic");
	await delay(10000);
	element(by.xpath(".//*[@placeholder='Your organization website (Ex: stmarys.org)']")).sendKeys("Formed");
	await delay(2000);
	element(by.xpath(".//*[@value='activate']")).click();
	await delay(3000); 
	element(by.xpath(".//*[@value='OK']")).click();
	await delay(10000);
});
});
