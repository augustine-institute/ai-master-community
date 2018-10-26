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
    When('navigate to Community page', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='header']/div/div/div/div/global-nav/ul/li[2]/a")).click();
        yield delay(20000);
    }));
    When('Enter parish username and password', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='simple-dropdown']")).click();
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/span/div/login/form/input[1]")).sendKeys("test+parish@formed.org");
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/span/div/login/form/input[2]")).sendKeys("formed");
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/span/div/login/form/button")).click();
        yield delay(15000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='simple-dropdown']/span")).click();
        yield delay(10000);
    }));
    When('FCM-0010 click on dashboard', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='header']/div/div[1]/div/div/ul/profile-menu/div/div/div/div/div[2]/span[1]/a")).click();
        yield delay(10000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='scroll-top']/div/div[2]/div/ul/li[1]"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='scroll-top']/div/div[2]/div/ul/li[2]"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='scroll-top']/div/div[2]/div/ul/li[3]"))).to.eventually.exist;
        yield delay(2000);
    }));
    When('FCM-0020 click on Feature and Groups tab', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='scroll-top']/div/div[2]/div/ul/li[2]")).click();
        yield delay(15000);
    }));
    When('Watch link is hovered', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.actions().mouseMove(protractor_1.element(protractor_1.by.xpath("//a[@href='/watch']"))).perform();
        yield delay(5000);
    }));
    When('FCM-0030 click on movie product in parish admin', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='header']/div/div[3]/div/main-nav/ul/li[2]/segmented-menu-item/div/segmented-links/div/div[1]/a")).click();
        yield delay(10000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='scroll-top']/div/segmented-page/div/div[1]/segment/div[3]/div/stripe/div/div/div/div/div/div/div/div[5]/div/a/img"))).to.eventually.exist;
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='scroll-top']/div/segmented-page/div/div[1]/segment/div[3]/div/stripe/div/div/div/div/div/div/div/div[5]/div/a/img")).click();
        yield delay(20000);
    }));
    Then('FCM-0030 One-click custom content wording modification is displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='description']/custom-content-creator/div/div/modal-link/a/span"))).to.eventually.exist;
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='description']/custom-content-creator/div/div/modal-link/a/span")).click();
        yield delay(8000);
    }));
    Then('FCM-0040 Create Community Feature /Discussion Group prompt is displayed and select create Discussion Group', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/div[2]/div[2]/div/div[2]/div[1]")).click();
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("html/body/div[5]/div/div/div[2]/div[3]/a"))).to.eventually.exist;
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/div[2]/div[3]/a")).click();
        yield delay(3000);
    }));
    Then('FCM-0040 click on create group button', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("html/body/div[5]/div/div/div[2]/div/div[2]/a[1]"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("html/body/div[5]/div/div/div[2]/div/div[2]/a[2]"))).to.eventually.exist;
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/div[2]/div/div[2]/a[1]")).click();
        yield delay(15000);
    }));
    Then('FCM-0040 click on view group', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/div[2]/div/div[2]/a[1]")).click();
        yield delay(8000);
    }));
    Then('FCM-0050 click on Add session to existing discussion group button', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/div[2]/div[2]/div/div[3]/div[1]")).click();
        yield delay(5000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("html/body/div[5]/div/div/div[2]/div[3]/a"))).to.eventually.exist;
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/div[2]/div[3]/a")).click();
        yield delay(5000);
    }));
    When('FCM-0050 clcik on Select group then Click on Add session buton', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='discussionSelect']")).click();
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/div[2]/div/span/div/ul/li[2]/div")).click();
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("html/body/div[5]/div/div/div[2]/div/div[3]/a[1]"))).to.eventually.exist;
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/div[2]/div/div[3]/a[1]")).click();
        yield delay(5000);
    }));
    Then('FCM-0050 session added successfully and Viewgroup and view later meaasges are displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("html/body/div[5]/div/div/div[2]/div/div[3]/a[1]"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("html/body/div[5]/div/div/div[2]/div/div[3]/a[2]"))).to.eventually.exist;
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/div[2]/div/div[3]/a[1]")).click();
        yield delay(10000);
    }));
    Then('FCM-0060 click on feature content', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/div[2]/div[2]/div/div[1]/div[1]")).click();
        yield delay(5000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("html/body/div[5]/div/div/div[2]/div[3]/a"))).to.eventually.exist;
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/div[2]/div[3]/a")).click();
        yield delay(5000);
    }));
    When('FCM-0060 create community prompt is displayed', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/div[2]/div/div[2]/a[1]")).click();
        yield delay(5000);
    }));
    When('FCM-0060 click on create button', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/div[2]/div/div[2]/a[1]")).click();
        yield delay(25000);
    }));
    When('FCM-0080 click on EDIT button in  product', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/div[3]/ul/li[4]/promo-unit-dashboard-wrapper/div/div/div/div/div/modal-link/a/span")).click();
        yield delay(10000);
    }));
    When('FCM-0090 click on Managesession', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/create-group-view/div[1]/ul/li[2]/a/tab-heading/div/h3")).click();
        yield delay(4000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/create-group-view/div[1]/div/div[2]/div/manage-sessions-view/form/div[2]/a")).click();
        yield delay(4000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/create-group-view/div[1]/div/div[2]/div/manage-sessions-view/form/name-and-description/div[1]/input")).sendKeys("myyy");
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath("/html/body/div[5]/div/div/promo-unit-modal/div[3]/create-group-view/div[1]/div/div[2]/div/manage-sessions-view/form/name-and-description/div[2]/ng-quill-editor/div/div/div[1]")).sendKeys("formed");
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/create-group-view/div[1]/div/div[2]/div/manage-sessions-view/form/media-embed/div[2]/div[2]/div/textarea")).sendKeys("https player vimeo.com/video/273353406?color=27b9fc&title=0&byline=0&portrait width=6400 height=360 frameborder=0 webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>FORMED Topic Sharing from <a href=https:vimeo.com/formedcatholic");
        yield delay(8000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/create-group-view/div[2]/button")).click();
        yield delay(10000);
    }));
    When('FCM-0100 create new Managesession', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/create-group-view/div[1]/div/div[2]/div/manage-sessions-view/form/div[2]/a")).click();
        yield delay(4000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/create-group-view/div[1]/div/div[2]/div/manage-sessions-view/form/name-and-description/div[1]/input")).sendKeys("USA");
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath("/html/body/div[5]/div/div/promo-unit-modal/div[3]/create-group-view/div[1]/div/div[2]/div/manage-sessions-view/form/name-and-description/div[2]/ng-quill-editor/div/div/div[1]")).sendKeys("formed.org");
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/create-group-view/div[1]/div/div[2]/div/manage-sessions-view/form/media-embed/div[2]/div[2]/div/textarea")).sendKeys("https player vimeo.com/video/273353406?color=27b9fc&title=0&byline=0&po width=6400 height=360 frameborder=0 webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>FORMED Topic Sharing from <a href=https:vimeo.com/formedcatholic");
        yield delay(8000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/create-group-view/div[2]/button")).click();
        yield delay(10000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='sessionSelectDropdown']/i")).click();
        yield delay(5000);
    }));
    When('FCM-0100 click on Organize session', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/create-group-view/div[1]/ul/li[3]/a/tab-heading/div/h3")).click();
        yield delay(8000);
    }));
    When('FCM-0110 click on delete button', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/create-group-view/div[1]/div/div[3]/div/organize-sessions-view/div[2]/div/div/ul/li[1]/div[2]/div[2]/a/i")).click();
        yield delay(3000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[6]/div/div/div[4]/input")).click();
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/a/i")).click();
        yield delay(10000);
    }));
    Then('FCM-0120 parish admin community page is diaplayed', () => __awaiter(this, void 0, void 0, function* () {
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
    }));
    When('FCM-0130 click on group banner from the community page', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='scroll-top']/div/div/div[3]/div[2]/custom-content-wrapper/div/div/div[1]/promo-unit/div/div[1]/a")).click();
        yield delay(5000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='content']/div/div/div[2]/div[1]/div[2]/div/div/button"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='content']/div/div/div[2]/div[3]/div[1]/div/button"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='newPostButton']/button"))).to.eventually.exist;
        yield delay(2000);
    }));
    When('FCM-0140 click on Group Roster', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='content']/div/div/div[2]/div[1]/div[2]/div/div/button")).click();
        yield delay(5000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='content']/div/div/div[2]/div[1]/div[2]/div/div/ul/li[1]/button"))).to.eventually.exist;
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='newPostButton']/button")).click();
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='composer']/div/div[2]/div/div[1]/div[2]/div/ul/li[2]/button")).click();
        yield delay(5000);
    }));
    When('FCM-0150 click on comments', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='content']/div/div/div[4]/div[2]/div/div/ul/li[1]/div/div/div/div/a")).click();
        yield delay(5000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='content']/div/div[2]/div[2]/div/div/div/div[3]/article/div/aside/ul/li[1]/button"))).to.eventually.exist;
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='content']/div/div[2]/div[2]/header/div/ul/li[4]/div/button[1]")).click();
        yield delay(5000);
    }));
    When('FCM-0160 click on New comment', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='content']/div/div[2]/div[2]/header/div/ul/li[4]/div/button[1]")).click();
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='composer']/div/div[2]/div/div[1]/div[2]/div/ul/li[2]/button")).click();
        yield delay(5000);
    }));
    Then('click on logout button in community page with parish user', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='simple-dropdown']/span")).click();
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='account-dropdown']/div/div[2]/a[3]")).click();
        yield delay(15000);
    }));
    Then('FCM-0170 individual user community page is displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='promo1']/div/div/div/img"))).to.eventually.exist;
        yield delay(2000);
    }));
    When('FCM-0180 community page is displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='scroll-top']/div/div/div[3]/div/organization-header/div/div[3]/div/div/share/ul/li[1]/a"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='scroll-top']/div/div/div[3]/div/organization-header/div/div[3]/div/div/share/ul/li[2]/a"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='scroll-top']/div/div/div[3]/div/organization-header/div/div[3]/div/div/share/ul/li[3]/a"))).to.eventually.exist;
        yield delay(2000);
    }));
    When('FCM-0180 Click on username drop down for parish user but northing published', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(15000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='simple-dropdown']")).click();
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/span/div/login/form/input[1]")).sendKeys("rajeshnakka.cmc@gmail.com");
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/span/div/login/form/input[2]")).sendKeys("123456");
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/span/div/login/form/button")).click();
        yield delay(10000);
    }));
    Then('click on log out for parish user but northing published', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='simple-dropdown']/span")).click();
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='header']/div/div[1]/div/div/ul/profile-menu/div/div/div/div/div[2]/a[3]")).click();
        yield delay(10000);
    }));
    Then('LLP-0050 Click on username drop down for individual user', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='simple-dropdown']")).click();
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/span/div/login/form/input[1]")).sendKeys("rajeshnakka@gmail.com");
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/span/div/login/form/input[2]")).sendKeys("Honey@123");
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/span/div/login/form/button")).click();
        yield delay(10000);
    }));
    When('click on logout button in community page individual user', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='simple-dropdown']/span")).click();
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/div/div/div[2]/a[3]")).click();
        yield delay(15000);
    }));
    When('FCM-0070 click on NEW button', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/div[3]/div/div[2]/span/a")).click();
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='workspace']/div/div[2]/span/div/ul/li[1]/modal-link/a/span"))).to.eventually.exist;
        yield delay(1000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='workspace']/div/div[2]/span/div/ul/li[2]/modal-link/a/span"))).to.eventually.exist;
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='workspace']/div/div[2]/span/div/ul/li[1]/modal-link/a/span")).click();
        yield delay(10000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/create-feature-view/form/input"))).to.eventually.exist;
        yield delay(5000);
    }));
    When('FCM-0070 click on Group in New button', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/a/i")).click();
        yield delay(3000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='workspace']/div/div[2]/span/div/ul/li[1]/modal-link/a/span")).click();
        yield delay(10000);
        protractor_1.element(protractor_1.by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/div[3]/div/div[2]/span/a")).click();
        yield delay(8000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='workspace']/div/div[2]/span/div/ul/li[2]/modal-link/a/span")).click();
        yield delay(8000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/a/i")).click();
        yield delay(5000);
    }));
    When('FCM-0070 click on Group in New button', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='simple-dropdown']")).click();
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='workspace']/div/div[2]/span/div/ul/li[1]/modal-link/a/span"))).to.eventually.exist;
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='workspace']/div/div[2]/span/div/ul/li[1]/modal-link/a/span")).click();
        yield delay(8000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/create-feature-view/form/name-and-description/div[1]/input")).sendkeys("asassasasasas");
        yield delay(8000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/create-feature-view/form/name-and-description/div[2]/ng-quill-editor/div/div/div[1]/p")).sendkeys("rule");
        yield delay(8000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/create-feature-view/form/media-type-selector/div/div/div[2]/div[1]/div[2]/div")).click();
        yield delay(3000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/create-feature-view/form/media-embed/div[2]/div[2]/div/textarea")).sendkeys("https www.youtube.com/embed/zkfJe3Hco14 frameborder=0 allowautoplaycencrypted-media allowfullscreen iframe");
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/create-feature-view/form/input")).click();
        yield delay(3000);
    }));
});
//# sourceMappingURL=Formed Community MVP.steps.js.map