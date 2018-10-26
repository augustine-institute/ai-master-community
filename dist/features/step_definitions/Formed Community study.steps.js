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
    When('FCF-0010 navigate tocommunity page and Enter parish user name details', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='header']/div/div/div/div/global-nav/ul/li[2]/a")).click();
        yield delay(20000);
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
    Then('FCF-0020 Feature and group tab in dashboard menu', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='header']/div/div[1]/div/div/ul/profile-menu/div/div/div/div/div[2]/span[1]/a")).click();
        yield delay(10000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='scroll-top']/div/div[2]/div/ul/li[1]"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='scroll-top']/div/div[2]/div/ul/li[2]"))).to.eventually.exist;
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='scroll-top']/div/div[2]/div/ul/li[2]")).click();
        yield delay(15000);
    }));
    When('FCF-0030 One-click custom content wording modification is displayed', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.actions().mouseMove(protractor_1.element(protractor_1.by.xpath("//a[@href='/study']"))).perform();
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='header']/div/div[3]/div/main-nav/ul/li[1]/segmented-menu-item/div/segmented-links/div/div[1]/a")).click();
        yield delay(10000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='scroll-top']/div/segmented-page/div/div[1]/segment/div[2]/div/stripe/div/div/div[2]/div/div/div/div/div[5]/div/a/img"))).to.eventually.exist;
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='scroll-top']/div/segmented-page/div/div[1]/segment/div[2]/div/stripe/div/div/div[2]/div/div/div/div/div[5]/div/a/img")).click();
        yield delay(20000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='scroll-top']/div/div/div[2]/div[1]/custom-content-creator/div/div/modal-link/a/span"))).to.eventually.exist;
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='scroll-top']/div/div/div[2]/div[1]/custom-content-creator/div/div/modal-link/a/span")).click();
        yield delay(8000);
    }));
    Then('FCF-0040 Create Community Feature /Discussion Group prompt is displayed and select create Discussion Group', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/div[2]/div[2]/div/div[2]/div[1]")).click();
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("html/body/div[5]/div/div/div[2]/div[3]/a"))).to.eventually.exist;
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/div[2]/div[3]/a")).click();
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("html/body/div[5]/div/div/div[2]/div/div[2]/a[1]"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("html/body/div[5]/div/div/div[2]/div/div[2]/a[2]"))).to.eventually.exist;
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/div[2]/div/div[2]/a[1]")).click();
        yield delay(15000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/div[2]/div/div[2]/a[1]")).click();
        yield delay(8000);
    }));
    Then('FCF-0050 click on Add session to existing discussion group button', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/div[2]/div[2]/div/div[3]/div[1]")).click();
        yield delay(5000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("html/body/div[5]/div/div/div[2]/div[3]/a"))).to.eventually.exist;
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/div[2]/div[3]/a")).click();
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='discussionSelect']")).click();
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/div[2]/div/span/div/ul/li[2]/div")).click();
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("html/body/div[5]/div/div/div[2]/div/div[3]/a[1]"))).to.eventually.exist;
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/div[2]/div/div[3]/a[1]")).click();
        yield delay(5000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("html/body/div[5]/div/div/div[2]/div/div[3]/a[1]"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("html/body/div[5]/div/div/div[2]/div/div[3]/a[2]"))).to.eventually.exist;
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/div[2]/div/div[3]/a[1]")).click();
        yield delay(10000);
    }));
    Then('FCF-0060 create feature contant', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/div[2]/div[2]/div/div[1]/div[1]")).click();
        yield delay(5000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("html/body/div[5]/div/div/div[2]/div[3]/a"))).to.eventually.exist;
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/div[2]/div[3]/a")).click();
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/div[2]/div/div[2]/a[1]")).click();
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/div[2]/div/div[2]/a[1]")).click();
        yield delay(25000);
    }));
    When('FCM-0070 click on Group in New button', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/div[3]/div/div[2]/span/a")).click();
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/div[3]/div/div[2]/span/div/ul/li[1]/modal-link/a/span"))).to.eventually.exist;
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/div[3]/div/div[2]/span/div/ul/li[1]/modal-link/a/span")).click();
        yield delay(8000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/create-feature-view/form/name-and-description/div[1]/input")).sendKeys("asassasasasas");
        yield delay(8000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/create-feature-view/form/name-and-description/div[2]/ng-quill-editor/div/div/div[1]")).sendKeys("rule");
        yield delay(8000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/create-feature-view/form/media-type-selector/div/div/div[2]/div[1]/div[2]/div")).click();
        yield delay(3000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/create-feature-view/form/media-embed/div[2]/div[2]/div/textarea")).sendKeys("https www.youtube.com/embed/zkfJe3Hco14 frameborder=0 allowautoplaycencrypted-media allowfullscreen iframe");
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/create-feature-view/form/input")).click();
        yield delay(15000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='published']/div[1]/div[2]/a"))).to.eventually.exist;
        yield delay(5000);
    }));
});
//# sourceMappingURL=Formed Community study.steps.js.map