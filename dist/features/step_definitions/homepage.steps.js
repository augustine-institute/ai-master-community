"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
var expects = chai.use(chaiAsPromised).expect;
const protractor_1 = require("protractor");
const cucumber_1 = require("cucumber");
const hooks_1 = require("../../support/hooks");
cucumber_1.defineSupportCode(function ({ Given, Then, When }) {
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    Given('I navigate to {path}', (path) => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get(path);
        yield delay(15000);
    }));
    When('FCF-0010 navigate to community page', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.navigate().refresh();
        yield delay(20000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='header']/div/div/div/div/global-nav/ul/li[2]/a")).click();
        yield delay(20000);
    }));
    Then('FCF-0010 Enter Parish user name and password', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='simple-dropdown']")).click();
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/span/div/login/form/input[1]")).sendKeys("test+parish@formed.org");
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/span/div/login/form/input[2]")).sendKeys("formed");
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/span/div/login/form/button")).click();
        yield delay(30000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='simple-dropdown']/span")).click();
        yield delay(10000);
    }));
    When('FCF-0020 navigate to community page and Enter parish user name details', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='header']/div/div[1]/div/div/global-nav/ul/li[2]/a")).click();
        yield delay(20000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='simple-dropdown']")).click();
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/span/div/login/form/input[1]")).sendKeys("test+parish@formed.org");
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/span/div/login/form/input[2]")).sendKeys("formed");
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/span/div/login/form/button")).click();
        yield delay(30000);
    }));
    When('navigate to community page', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(10000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='header']/div/div[1]/div/div/global-nav/ul/li[2]/a")).click();
        yield delay(20000);
    }));
    Then('FCF-0020 Feature and group tab in dashboard menu', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='header']/div/div[1]/div/div/ul/profile-menu/div/div/div/div/div[2]/span[1]/a")).click();
        yield delay(10000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='scroll-top']/div/div[2]/div/ul/li[1]"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='scroll-top']/div/div[2]/div/ul/li[2]"))).to.eventually.exist;
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='scroll-top']/div/div[2]/div/ul/li[2]/a/tab-heading/div/i")).click();
        yield delay(15000);
    }));
    When('FCF-0030 naviagte to listen link and click on audio books', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.actions().mouseMove(protractor_1.element(protractor_1.by.xpath("//a[@href='/listen']"))).perform();
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='header']/div/div[3]/div/main-nav/ul/li[3]/segmented-menu-item/div/segmented-links/div/div[4]/a")).click();
        yield delay(10000);
    }));
    Then('FCF-0040 click on image in audio books', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(20000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='scroll-top']/div/div[2]/div/segmented-page/div/div[2]/segment/div[7]/div/stripe/div/div/div[2]/div/div/div/div/div[8]/div/a/img"))).to.eventually.exist;
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='scroll-top']/div/div[2]/div/segmented-page/div/div[2]/segment/div[7]/div/stripe/div/div/div[2]/div/div/div/div/div[8]/div/a/img")).click();
        yield delay(20000);
    }));
    Then('FCF-0050 click on create feature and discussion group', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(10000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='audio']/div[3]/div[1]/custom-content-creator/div/div/modal-link/a/span"))).to.eventually.exist;
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='audio']/div[3]/div[1]/custom-content-creator/div/div/modal-link/a/span")).click();
        yield delay(8000);
    }));
    Then('FCF-0060 create feature contant', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/div[2]/div[2]/div/div[1]/div[1]")).click();
        yield delay(5000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("html/body/div[5]/div/div/div[2]/div[3]/a"))).to.eventually.exist;
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/div[2]/div[3]/a")).click();
        yield delay(5000);
    }));
    Then('FCF-0060 click on create community feature', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("html/body/div[5]/div/div/div[2]/div/div[2]/a[1]"))).to.eventually.exist;
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/div[2]/div/div[2]/a[1]")).click();
        yield delay(5000);
    }));
    Then('FCF-0060 click on view community feature', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("html/body/div[5]/div/div/div[2]/div/div[2]/a[1]"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("html/body/div[5]/div/div/div[2]/div/div[2]/a[2]"))).to.eventually.exist;
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/div[2]/div/div[2]/a[1]")).click();
        yield delay(25000);
    }));
    When('FCF-0070 Move a feature into the Published', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[1]/div[2]/div/ul/li[1]/promo-unit-dashboard-wrapper/div/div/div/div/a/i")).click();
        yield delay(10000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='header']/div/div/div/div/global-nav/ul/li[2]/a")).click();
        yield delay(20000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='simple-dropdown']/span")).click();
        yield delay(10000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='header']/div/div[1]/div/div/ul/profile-menu/div/div/div/div/div[2]/span[1]/a")).click();
        yield delay(10000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='scroll-top']/div/div[2]/div/ul/li[2]")).click();
        yield delay(15000);
    }));
    Then('FCF-0080 move a published feature into unpublished list', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(10000);
        protractor_1.element(protractor_1.by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/div[1]/div[2]/ul/li[3]/promo-unit-dashboard-wrapper/div/div/div/div/a")).click();
        yield delay(10000);
    }));
    Then('FCF-0070 click on Edit feature in unpublish list', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div/div[2]/div/ul/li[1]/promo-unit-dashboard-wrapper/div/div/div/div/div/modal-link/a/span")).click();
        yield delay(8000);
    }));
    Then('FCF-0070 change the name Title ,text color and click on cencle button', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(10000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/div/create-feature-view/form/name-and-description/div[1]/input")).click();
        yield delay(8000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/div/create-feature-view/form/name-and-description/div[1]/input")).sendKeys('mind');
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/div/create-feature-view/form/name-and-description/div[2]/ng-quill-editor/div/div/div[1]")).click();
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/div/create-feature-view/form/name-and-description/div[2]/ng-quill-editor/div/div/div[1]")).sendKeys('sasicharah');
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/div/create-feature-view/form/media-position-selector/div/div/div[2]/div[1]/div[2]/div")).click();
        yield delay(8000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/div/create-feature-view/form/background-color/div/div[2]/ul/li[8]/a")).click();
        yield delay(8000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/div/create-feature-view/form/div[2]/a")).click();
        yield delay(15000);
    }));
    Then('FCF-0070 change the name Title ,text color and click on Update button', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(10000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/div/create-feature-view/form/name-and-description/div[1]/input")).click();
        yield delay(8000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/div/create-feature-view/form/name-and-description/div[1]/input")).sendKeys('mind');
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/div/create-feature-view/form/name-and-description/div[2]/ng-quill-editor/div/div/div[1]")).click();
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/div/create-feature-view/form/name-and-description/div[2]/ng-quill-editor/div/div/div[1]")).sendKeys('sasicharah');
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/div/create-feature-view/form/media-position-selector/div/div/div[2]/div[1]/div[2]/div")).click();
        yield delay(8000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/div/create-feature-view/form/background-color/div/div[2]/ul/li[8]/a")).click();
        yield delay(8000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/div/create-feature-view/form/input"))).to.eventually.exist;
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/div/create-feature-view/form/input")).click();
        yield delay(15000);
    }));
    Then('FCF-0090 Delete feature', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[1]/div[2]/div/ul/li[1]/promo-unit-dashboard-wrapper/div/div/div/div/div/a[2]")).click();
        yield delay(8000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[1]/div[2]/div/ul/li[1]/promo-unit-dashboard-wrapper/div/div/div/div/div/div/div[2]/div/div/p[2]/a"))).to.eventually.exist;
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[1]/div[2]/div/ul/li[1]/promo-unit-dashboard-wrapper/div/div/div/div/div/div/div[2]/div/div/p[2]/a")).click();
        yield delay(8000);
    }));
    Then('FCF-0120 click on Discussion group', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/div[2]/div[2]/div/div[2]/div[1]")).click();
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("html/body/div[5]/div/div/div[2]/div[3]/a"))).to.eventually.exist;
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/div[2]/div[3]/a")).click();
        yield delay(3000);
    }));
    Then('FCF-0120 Click on create discussion group', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("html/body/div[5]/div/div/div[2]/div/div[2]/a[1]"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("html/body/div[5]/div/div/div[2]/div/div[2]/a[2]"))).to.eventually.exist;
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/div[2]/div/div[2]/a[1]")).click();
        yield delay(15000);
    }));
    Then('FCF-0120 click on View group', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("html/body/div[5]/div/div/div[2]/div/div[2]/a[1]"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("html/body/div[5]/div/div/div[2]/div/div[2]/a[2]"))).to.eventually.exist;
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/div[2]/div/div[2]/a[1]")).click();
        yield delay(8000);
    }));
    Then('FCF-0130 Edit the group', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/div[3]/ul/li[1]/promo-unit-dashboard-wrapper/div/div/div/div/div/modal-link/a/span")).click();
        yield delay(10000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/create-group-view/div[2]/div/a"))).to.eventually.exist;
        yield delay(2000);
        protractor_1.element("html/body/div[5]/div/div/promo-unit-modal/div[3]/create-group-view/div[1]/ul/li[2]/a/tab-heading/div/h3").click();
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/create-group-view/div[2]/div/a"))).to.eventually.exist;
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/create-group-view/div[1]/ul/li[3]/a/tab-heading/div/h3")).click();
        yield delay(5000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/create-group-view/div[2]/div/a"))).to.eventually.exist;
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/a/i")).click();
    }));
    Then('FCF-0160 click on Add session to existing discussion group', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/div[2]/div[2]/div/div[3]/div[1]")).click();
        yield delay(5000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("html/body/div[5]/div/div/div[2]/div[3]/a"))).to.eventually.exist;
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/div[2]/div[3]/a")).click();
        yield delay(5000);
    }));
    Then('FCF-0160 select group and click on Addsession', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='promoUnitSelect']")).click();
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/div[2]/div/span/div/ul/li[1]/div")).click();
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("html/body/div[5]/div/div/div[2]/div/div[3]/a[1]"))).to.eventually.exist;
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/div[2]/div/div[3]/a[1]")).click();
        yield delay(15000);
    }));
    When('FCF-0160 click on View group', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("html/body/div[5]/div/div/div[2]/div/div[3]/a[1]"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("html/body/div[5]/div/div/div[2]/div/div[3]/a[2]"))).to.eventually.exist;
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/div[2]/div/div[3]/a[1]")).click();
        yield delay(10000);
    }));
    Then('FCF-0130 click on edit button', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[1]/div[2]/div/ul/li[1]/promo-unit-dashboard-wrapper/div/div/div/div/div/modal-link/a/span")).click();
        yield delay(15000);
    }));
    Then('FCF-0130 click on managesessions and create a session using Youtube', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[1]/ul/li[2]/a/tab-heading/div/h3")).click();
        yield delay(10000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[1]/div/div[2]/div/manage-sessions-view/form/div[2]/a/span[2]"))).to.eventually.exist;
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[1]/div/div[2]/div/manage-sessions-view/form/div[2]/a/span[2]")).click();
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[1]/div/div[2]/div/manage-sessions-view/form/name-and-description/div[1]/input")).sendKeys("Formed");
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath("/html/body/div[5]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[1]/div/div[2]/div/manage-sessions-view/form/name-and-description/div[2]/ng-quill-editor/div/div/div[1]")).sendKeys("fOrmed.org");
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[1]/div/div[2]/div/manage-sessions-view/form/media-type-selector/div/div/div[2]/div[1]/div[2]/div")).click();
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[1]/div/div[2]/div/manage-sessions-view/form/media-embed/div[2]/div[2]/div/textarea")).sendKeys('<iframe width="560" height="315" src="https://www.youtube.com/embed/uHUTbq-j0UU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
        yield delay(10000);
    }));
    Then('FCF-0130 click on save button', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(10000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[2]/button")).click();
        yield delay(30000);
    }));
    Then('FCF-0140 create another session', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[1]/ul/li[2]/a/tab-heading/div/h3")).click();
        yield delay(10000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[1]/div/div[2]/div/manage-sessions-view/form/div[2]/a/span[2]"))).to.eventually.exist;
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[1]/div/div[2]/div/manage-sessions-view/form/div[2]/a/span[1]")).click();
        yield delay(10000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[1]/div/div[2]/div/manage-sessions-view/form/name-and-description/div[1]/input")).sendKeys("Catholic");
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath("/html/body/div[5]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[1]/div/div[2]/div/manage-sessions-view/form/name-and-description/div[2]/ng-quill-editor/div/div/div[1]")).sendKeys("So much content, it’s my go-to tool for Catholic learning. 5 stars!");
        yield delay(15000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[1]/div/div[2]/div/manage-sessions-view/form/media-embed/div[2]/div[2]/div/textarea")).sendKeys('<iframe src="https://player.vimeo.com/video/76979871?embedparameter=value" width="640" height="360" frameborder="0" allowfullscreen></iframe>');
        yield delay(20000);
    }));
    Then('FCF-0140 create a session using Vimeo', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[1]/ul/li[2]/a/tab-heading/div/h3")).click();
        yield delay(10000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[1]/div/div[2]/div/manage-sessions-view/form/div[2]/a/span[2]"))).to.eventually.exist;
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[1]/div/div[2]/div/manage-sessions-view/form/div[2]/a/span[1]")).click();
        yield delay(10000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[1]/div/div[2]/div/manage-sessions-view/form/name-and-description/div[1]/input")).sendKeys("Formed");
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath("/html/body/div[5]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[1]/div/div[2]/div/manage-sessions-view/form/name-and-description/div[2]/ng-quill-editor/div/div/div[1]")).sendKeys("I’m so excited that FORMED has an app! As someone who has come back to the Catholic faith, FORMED has been such an important part of my love for the Church.");
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[1]/div/div[2]/div/manage-sessions-view/form/media-type-selector/div/div/div[2]/div[1]/div[2]/div")).click();
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[1]/div/div[2]/div/manage-sessions-view/form/media-embed/div[2]/div[2]/div/textarea")).sendKeys('<iframe src="https://player.vimeo.com/video/76979871?embedparameter=value" width="640" height="360" frameborder="0" allowfullscreen></iframe>');
        yield delay(10000);
    }));
    When('FCF-0140 click on dropdown from manage sessions', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(10000);
        protractor_1.element(protractor_1.by.xpath("//*[@id='sessionSelectDropdown']")).click();
        yield delay(10000);
    }));
    Then('FCF-0140 Manage session  dropdown is displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[1]/div/div[2]/div/manage-sessions-view/form/span/div/ul/li[4]/div"))).to.eventually.exist;
        yield delay(2000);
    }));
    Then('FCF-0140 click on oraganize sessions', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[1]/ul/li[3]/a/tab-heading/div/h3")).click();
        yield delay(5000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[1]/div/div[3]/div/organize-sessions-view/div[2]/div/div/ul/li[1]/div[2]/div[2]/a/i"))).to.eventually.exist;
        yield delay(2000);
    }));
    Then('FCF-0150 delete the session', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[1]/div/div[3]/div/organize-sessions-view/div[2]/div/div/ul/li[1]/div[2]/div[2]/a/i")).click();
        yield delay(5000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("html/body/div[6]/div/div/div[4]/input"))).to.eventually.exist;
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[6]/div/div/div[4]/input")).click();
        yield delay(10000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[1]/ul/li[2]/a/tab-heading/div/h3")).click();
        yield delay(10000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[1]/i")).click();
        yield delay(10000);
    }));
    When('FCF-0140 click on save button', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/create-group-view/div[2]/button")).click();
        yield delay(10000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/create-group-view/div[2]/div/a")).click();
        yield delay(10000);
    }));
    When('FCF-0120 navigate to community page', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='header']/div/div[1]/div/div/global-nav/ul/li[2]/a")).click();
        yield delay(10000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='scroll-top']/div/div/div[3]/div[1]/organization-header/div/div[1]/div[1]/div[1]/div/img"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='scroll-top']/div/div/div[3]/div[1]/organization-header/div/div[3]/div/div/share/ul/li[1]/a"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='scroll-top']/div/div/div[3]/div[1]/organization-header/div/div[3]/div/div/share/ul/li[2]/a"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='scroll-top']/div/div/div[3]/div[1]/organization-header/div/div[3]/div/div/share/ul/li[3]/a"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='scroll-top']/div/div/div[3]/div[1]/organization-header/div/div[3]/div/div/share/ul/li[4]/a"))).to.eventually.exist;
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='simple-dropdown']/span")).click();
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='header']/div/div[1]/div/div/ul/profile-menu/div/div/div/div/div[2]/span[1]/a")).click();
        yield delay(10000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='scroll-top']/div/div[2]/div/ul/li[2]")).click();
        yield delay(15000);
    }));
    Then('FCF-0140 create a session using Audio', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[1]/ul/li[2]/a/tab-heading/div/h3")).click();
        yield delay(10000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[1]/div/div[2]/div/manage-sessions-view/form/div[2]/a/span[2]"))).to.eventually.exist;
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[1]/div/div[2]/div/manage-sessions-view/form/div[2]/a/span[1]")).click();
        yield delay(10000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[1]/div/div[2]/div/manage-sessions-view/form/name-and-description/div[1]/input")).sendKeys("Formed");
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath("/html/body/div[5]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[1]/div/div[2]/div/manage-sessions-view/form/name-and-description/div[2]/ng-quill-editor/div/div/div[1]")).sendKeys("I’m so excited that FORMED has an app! As someone who has come back to the Catholic faith, FORMED has been such an important part of my love for the Church.");
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[1]/div/div[2]/div/manage-sessions-view/form/media-type-selector/div/div/div[2]/div[1]/div[3]/div")).click();
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/div/create-group-view/div[1]/div/div[2]/div/manage-sessions-view/form/media-embed/div[3]/div[2]/div/textarea")).sendKeys('<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/328259811&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>');
        yield delay(10000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/create-group-view/div[2]/button")).click();
        yield delay(15000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/create-group-view/div[1]/ul/li[3]/a/tab-heading/div/h3")).click();
        yield delay(5000);
    }));
    Then('FCF-0170 Click on visit group and click on group roster', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='community-tabs']/div/div[1]/div[2]/custom-content-wrapper/div/div/div[1]/promo-unit/div/div[1]/a"))).to.eventually.exist;
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='community-tabs']/div/div[1]/div[2]/custom-content-wrapper/div/div/div[1]/promo-unit/div/div[1]/a")).click();
        yield delay(10000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='content']/div/div/div[2]/div[1]/div[2]/div/div/button")).click();
        yield delay(5000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='content']/div/div/div[2]/div[1]/div[2]/div/div/ul/li[1]/button"))).to.eventually.exist;
        yield delay(2000);
    }));
    When('FCF-0180 click on New Post', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='newPostButton']/button"))).to.eventually.exist;
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath("//*[@id='newPostButton']/button/span/span")).click();
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='composer']/div/div[2]/div/div[1]/div[2]/div/div/textarea")).sendKeys('Formed');
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='composer']/div/div[2]/div/div[1]/div[2]/div/ul/li[1]/button")).click();
        yield delay(5000);
    }));
    Then('FCF-0190 click on Comments', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='content']/div/div/div[4]/div[2]/div/div/ul/li[1]/div[2]/div[2]/div/div/a")).click();
        yield delay(5000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='content']/div/div[3]/div[2]/header/div/ul/li[2]/div/button[1]"))).to.eventually.exist;
        yield delay(2000);
    }));
    Then('FCF-0190 Click on New Comments', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='content']/div/div[3]/div[2]/header/div/ul/li[2]/div/button[1]")).click();
        yield delay(10000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='composer']/div/div[2]/div/div[1]/div[2]/div/div/textarea")).sendKeys('Catholic Faith');
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='composer']/div/div[2]/div/div[1]/div[2]/div/ul/li[1]/button")).click();
        yield delay(10000);
    }));
    Then('FCF-0200 likes and replay buttons are dispalyed', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='content']/div/div[3]/div[2]/div/div/div/div[1]/article/div/aside/ul/li[1]/button"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='content']/div/div[3]/div[2]/div/div/div/div[1]/article/div/aside/ul/li[2]/button"))).to.eventually.exist;
        yield delay(2000);
    }));
    When('FCF-0210 click on likes and replay buttons', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='content']/div/div[3]/div[2]/div/div/div/div[1]/article/div/aside/ul/li[1]/button")).click();
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='content']/div/div[3]/div[2]/div/div/div/div[1]/article/div/aside/ul/li[2]/button")).click();
        yield delay(5000);
    }));
    When('FCF-0210 enter the text in replay textarea', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='composer']/div/div[2]/div/div[1]/div[2]/div/div/textarea")).sendKeys('Thank you');
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='composer']/div/div[2]/div/div[1]/div[2]/div/ul/li[1]/button")).click();
        yield delay(5000);
    }));
    When('FCF-0140 click on save button and cencel button', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/create-group-view/div[2]/button")).click();
        yield delay(15000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/create-group-view/div[2]/div/a")).click();
        yield delay(10000);
    }));
    When('FCF-0290 delete the Comments', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='content']/div/div[3]/div[2]/div/div/div/div[1]/article/div/aside/ul/li[3]/div/button")).click();
        yield delay(5000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='content']/div/div[3]/div[2]/div/div/div/div[1]/article/div/aside/ul/li[3]/div/ul/li[3]/button"))).to.eventually.exist;
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='content']/div/div[3]/div[2]/div/div/div/div[1]/article/div/aside/ul/li[3]/div/ul/li[3]/button")).click();
        yield delay(10000);
    }));
    Then('FCF-0220 click on Edit comment button', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='content']/div/div[3]/div[2]/div/div/div/div[1]/article/div/aside/ul/li[3]/div/button")).click();
        yield delay(5000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='content']/div/div[3]/div[2]/div/div/div/div[1]/article/div/aside/ul/li[3]/div/ul/li[1]/button"))).to.eventually.exist;
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='content']/div/div[3]/div[2]/div/div/div/div[1]/article/div/aside/ul/li[3]/div/ul/li[1]/button")).click();
        yield delay(5000);
    }));
    Then('FCF-0220 Enter text in Edit textarea', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='composer']/div/div[2]/div/div[1]/div[2]/div/div/textarea")).sendKeys('GOOD product');
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='composer']/div/div[2]/div/div[1]/div[2]/div/ul/li[1]/button")).click();
        yield delay(5000);
    }));
    Then('FCF-0230 click on Return to the session', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='content']/div/div[1]/a"))).to.eventually.exist;
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='content']/div/div[1]/a")).click();
        yield delay(5000);
    }));
    Then('FCF-0230 click on Edit button', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='content']/div/div/div[2]/div[3]/div[1]/div/button")).click();
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='content']/div/div/div[4]/div[2]/div/div/ul/li/div[2]/div[2]/div/div/div/button")).click();
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='composer']/div/div[2]/div/div[1]/div[2]/div/div/textarea")).sendKeys("Formed");
        yield delay(15000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='composer']/div/div[2]/div/div[1]/div[2]/div/ul/li[1]/button")).click();
        yield delay(15000);
    }));
    Then('FCF-0240 click on Return to the formed link', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='app']/main/div[1]/a"))).to.eventually.exist;
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='app']/main/div[1]/a")).click();
        yield delay(15000);
    }));
    Then('click on logout button in community page', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='simple-dropdown']/span")).click();
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='header']/div/div[1]/div/div/ul/profile-menu/div/div/div/div/div[2]/a[3]")).click();
        yield delay(15000);
    }));
    Then('FCF-0250 individual user community page is displayed', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='simple-dropdown']")).click();
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/span/div/login/form/input[1]")).sendKeys("rajeshnakka@gmail.com");
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/span/div/login/form/input[2]")).sendKeys("Honey@123");
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/span/div/login/form/button")).click();
        yield delay(10000);
    }));
    When('FCF-0250 navigate to community page', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='header']/div/div/div/div/global-nav/ul/li[2]/a")).click();
        yield delay(20000);
    }));
    When('click on logout button in community page individual user', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='simple-dropdown']/span")).click();
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/div/div/div[2]/a[3]")).click();
        yield delay(15000);
    }));
    When('FCF-0260 Click on username drop down', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='simple-dropdown']")).click();
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/span/div/login/form/input[1]")).sendKeys("rajeshnakka.cmc@gmail.com");
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/span/div/login/form/input[2]")).sendKeys("123456");
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/span/div/login/form/button")).click();
        yield delay(10000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='header']/div/div/div/div/global-nav/ul/li[2]/a")).click();
        yield delay(20000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='scroll-top']/div/div/div[3]/div/organization-header/div/div[3]/div/div/share/ul/li[1]/a"))).to.eventually.exist;
        yield delay(5000);
    }));
    Then('click on logout button from parish user', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='simple-dropdown']/span")).click();
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='header']/div/div[1]/div/div/ul/profile-menu/div/div/div/div/div[2]/a[3]")).click();
        yield delay(10000);
    }));
    Then('FCF-0100 naviagte to read link and click on Nonfiction', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.actions().mouseMove(protractor_1.element(protractor_1.by.xpath("//a[@href='/read']"))).perform();
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='header']/div/div[3]/div/main-nav/ul/li[4]/segmented-menu-item/div/segmented-links/div/div[1]/a")).click();
        yield delay(20000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='scroll-top']/div/segmented-page/div/div[1]/segment/div[2]/div/stripe/div/div/div[1]/div[1]/h3"))).to.eventually.exist;
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='scroll-top']/div/segmented-page/div/div[1]/segment/div[2]/div/stripe/div/div/div[2]/div/div/div/div/div[13]/div/a/img")).click();
        yield delay(20000);
    }));
    Then('FCF-0100 click on create feature and discussion group', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='book']/div[3]/div[1]/custom-content-creator/div/div/modal-link/a/span"))).to.eventually.exist;
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='book']/div[3]/div[1]/custom-content-creator/div/div/modal-link/a/span")).click();
        yield delay(10000);
    }));
    Then('FCF-0110 Navigate to study link and click on Faith Formation', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.actions().mouseMove(protractor_1.element(protractor_1.by.xpath("//a[@href='/study']"))).perform();
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='header']/div/div[3]/div/main-nav/ul/li[1]/segmented-menu-item/div/segmented-links/div/div[1]/a")).click();
        yield delay(20000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='scroll-top']/div/segmented-page/div/div[1]/segment/div[2]/div/stripe/div/div/div[2]/div/div/div/div/div[5]/div/a/img")).click();
        yield delay(15000);
    }));
    Then('FCF-0120 click on create feature and discussion group', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='scroll-top']/div/div/div[2]/div[1]/custom-content-creator/div/div/modal-link/a/span"))).to.eventually.exist;
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='scroll-top']/div/div/div[2]/div[1]/custom-content-creator/div/div/modal-link/a/span")).click();
        yield delay(10000);
    }));
    When('FCF-0110 naviagte to watch link and click on movies', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.actions().mouseMove(protractor_1.element(protractor_1.by.xpath("//a[@href='/watch']"))).perform();
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='header']/div/div[3]/div/main-nav/ul/li[2]/segmented-menu-item/div/segmented-links/div/div[1]/a")).click();
        yield delay(20000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='scroll-top']/div/segmented-page/div/div[1]/segment/div[2]/div/stripe/div/div/div[1]/div[1]/h3"))).to.eventually.exist;
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='scroll-top']/div/segmented-page/div/div[1]/segment/div[2]/div/stripe/div/div/div[2]/div/div/div/div/div[6]/div/a/img")).click();
        yield delay(20000);
    }));
    Then('FCF-0110 click on create feature and discussion group', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='description']/custom-content-creator/div/div/modal-link/a/span"))).to.eventually.exist;
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='description']/custom-content-creator/div/div/modal-link/a/span")).click();
        yield delay(8000);
    }));
    Then('FCF-0260 click on new button and feature content option is displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(25000);
        protractor_1.element(protractor_1.by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/uib-accordion/div/div[1]/div[1]/h4/a/span/div/div[2]/span/a")).click();
        yield delay(8000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='workspace']/div[1]/h4/a/span/div/div[2]/span/div/ul/li[1]/modal-link/a/span"))).to.eventually.exist;
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='workspace']/div[1]/h4/a/span/div/div[2]/span/div/ul/li[1]/modal-link/a/span")).click();
        yield delay(8000);
    }));
    Then('FCF-0260 Feature Editor is displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/div/create-feature-view/form/name-and-description/div[1]/div"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[2]"))).to.eventually.exist;
        yield delay(2000);
    }));
    When('FCF-0260 create a feature using a Youtube embed code', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/div/create-feature-view/form/name-and-description/div[1]/input")).sendKeys("youtube");
        yield delay(8000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/div/create-feature-view/form/name-and-description/div[2]/ng-quill-editor/div/div/div[1]")).click();
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/div/create-feature-view/form/name-and-description/div[2]/ng-quill-editor/div/div/div[1]")).sendKeys("youtubecode");
        yield delay(8000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/div/create-feature-view/form/media-type-selector/div/div/div[2]/div[1]/div[2]/div")).click();
        yield delay(8000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/div/create-feature-view/form/media-embed/div[2]/div[2]/div/textarea")).sendKeys('<iframe width="560" height="315" src="https://www.youtube.com/embed/d57hAb9FJoE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
        yield delay(8000);
    }));
    When('FCF-0270 create a feature using a vimeo code', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/div/create-feature-view/form/name-and-description/div[1]/input")).sendKeys("Vimeo");
        yield delay(8000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/div/create-feature-view/form/name-and-description/div[2]/ng-quill-editor/div/div/div[1]")).click();
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/div/create-feature-view/form/name-and-description/div[2]/ng-quill-editor/div/div/div[1]")).sendKeys("vimeocode");
        yield delay(8000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/div/create-feature-view/form/media-type-selector/div/div/div[2]/div[1]/div[2]/div")).click();
        yield delay(8000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/div/create-feature-view/form/media-embed/div[2]/div[2]/div/textarea")).sendKeys('<iframe src="https://player.vimeo.com/video/76979871?embedparameter=value" width="640" height="360" frameborder="0" allowfullscreen></iframe>');
        yield delay(8000);
    }));
    When('FCF-0280 create a feature using a Soundcloud embed code', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/div/create-feature-view/form/name-and-description/div[1]/input")).sendKeys("Soundcloudembed");
        yield delay(8000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/div/create-feature-view/form/name-and-description/div[2]/ng-quill-editor/div/div/div[1]")).click();
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/div/create-feature-view/form/name-and-description/div[2]/ng-quill-editor/div/div/div[1]")).sendKeys("Soundcloud embed code");
        yield delay(8000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/div/create-feature-view/form/media-type-selector/div/div/div[2]/div[1]/div[3]/div")).click();
        yield delay(8000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/div/create-feature-view/form/media-embed/div[3]/div[2]/div/textarea")).sendKeys('<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/328259811&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>');
        yield delay(8000);
    }));
    Then('FCF-280 parish admin community page is dispalyed', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='community-tabs']/div/div[1]/div[1]/organization-header/div/div[3]/div/div/share/ul/li[1]/a"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("//*[@id='community-tabs']/div/div[1]/div[1]/organization-header/div/div[3]/div/div/share/ul/li[2]/a"))).to.eventually.exist;
        yield delay(2000); //
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("//*[@id='community-tabs']/div/div[1]/div[1]/organization-header/div/div[3]/div/div/share/ul/li[3]/a"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("//*[@id='community-tabs']/div/div[1]/div[1]/organization-header/div/div[3]/div/div/share/ul/li[4]/a"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='community-tabs']/div/div[1]/div[1]/organization-header/div/div[1]/div[1]/div[1]/div/img"))).to.eventually.exist;
        yield delay(2000);
    }));
    Then('FCF-0280 Click on save button', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/div/create-feature-view/form/input"))).to.eventually.exist;
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/div/create-feature-view/form/input")).click();
        yield delay(15000);
    }));
});
//# sourceMappingURL=homepage.steps.js.map