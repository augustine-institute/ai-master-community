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
    When('navigate to market page', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(10000);
        protractor_1.element(protractor_1.by.xpath("//a[@href='https://market.beta.formed.org']")).click();
        yield delay(15000);
        yield protractor_1.browser.get("https://market2.beta.formed.org");
        yield delay(20000);
    }));
    When('Click on market page', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(10000);
        protractor_1.element(protractor_1.by.xpath("//a[@href='https://market2.beta.formed.org/']")).click();
        yield delay(20000);
    }));
    When('Click on Start shopping', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(10000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='amasty-shopby-product-list']/section/a")).click();
        yield delay(20000);
    }));
    When('i click on login button and enter username and password', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(10000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='login-dropdown-button']")).click();
        yield delay(3000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='gigya-login-screen']/form/div/div[1]/div[1]/input")).sendKeys("rajeshnakka.cmc@gmail.com");
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='gigya-login-screen']/form/div/div[1]/div[2]/input")).sendKeys("123456");
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='gigya-login-screen']/form/div/div[2]/div/input[1]")).click();
        yield delay(10000);
    }));
    When('ALA-0010 click on login button and enter username and password', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='login-dropdown-button']")).click();
        yield delay(3000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='gigya-login-screen']/form/div/div[1]/div[1]/input")).sendKeys("test1+girardt100@formed.org");
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='gigya-login-screen']/form/div/div[1]/div[2]/input")).sendKeys("formed18!");
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='gigya-login-screen']/form/div/div[2]/div/input[1]")).click();
        yield delay(15000);
    }));
    When('ALP-0020 click on Account page', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='account-dropdown-button']")).click();
        yield delay(3000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='account-dropdown']/div/a[1]")).click();
        yield delay(15000);
    }));
    When('ALP-0030 click On Demand Subscription in Account page', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='account-dropdown']/div/a[1]"))).to.eventually.exist;
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='account-dropdown']/div/a[1]")).click();
        yield delay(10000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[1]/div/a/img")).click();
        yield delay(8000);
    }));
    When('i click on login user with out purchase product', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(10000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='login-dropdown-button']")).click();
        yield delay(3000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='gigya-login-screen']/form/div/div[1]/div[1]/input")).sendKeys("saicharan@gmail.com");
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='gigya-login-screen']/form/div/div[1]/div[2]/input")).sendKeys("Honey@123");
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='gigya-login-screen']/form/div/div[2]/div/input[1]")).click();
        yield delay(10000);
    }));
    Then('ABP-0010 plan details are displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("//a[@href='https://market2.beta.formed.org/creditplans.html/']"))).to.eventually.exist;
        yield delay(3000); //
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//a[@href='https://market2.beta.formed.org/customer/account/']"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='cancel-credit-plan-btn']"))).to.eventually.exist;
        yield delay(3000);
    }));
    When('ABP-0010 click on account overview', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='account-nav']/ul/li[1]/a")).click();
        yield delay(10000);
    }));
    When('ABP-0010 account overview is displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='maincontent']/div[3]/div[1]/div[1]/div[2]/div/p[2]/a[1]"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='cancel-credit-plan-btn']"))).to.eventually.exist;
        yield delay(3000);
    }));
    When('ABP-0020 click on login settings', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//a[@href='https://market2.beta.formed.org/customer/account/edit/']")).click();
        yield delay(15000);
    }));
    Then('ABP-0020 login details are displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='gigya-update-profile-screen']/form/div[2]/div[3]/div/input[1]"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='gigya-update-profile-screen']/form/div[2]/div[2]/a[1]"))).to.eventually.exist;
        yield delay(3000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='gigya-update-profile-screen']/form/div[2]/div[2]/a[1]")).click();
        yield delay(15000);
    }));
    Then('ABP-0020 Password settings are displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='gigya-change-password-screen']/form/div[1]/div/div[1]/input"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='gigya-change-password-screen']/form/div[1]/div/div[2]/input"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='gigya-change-password-screen']/form/div[1]/div/div[3]/input"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='gigya-change-password-screen']/form/div[2]/div[3]/a[1]"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='gigya-change-password-screen']/form/div[2]/div[2]/div/input[1]"))).to.eventually.exist;
        yield delay(3000);
    }));
    When('ABP-0030 click on payment method', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath("//a[@href='https://market2.beta.formed.org/magedelight_cybersource/cards/listing/']")).click();
        yield delay(15000);
    }));
    Then('ABP-0030 payment method details is displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='my-saved-cards-table']/tbody/tr[1]/td[5]/span/form[1]/a"))).to.eventually.exist;
        yield delay(5000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='maincontent']/div[3]/div[1]/div[3]/div[3]/button"))).to.eventually.exist;
        yield delay(3000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='my-saved-cards-table']/tbody/tr[1]/td[5]/span/form[1]/a")).click();
        yield delay(10000);
    }));
    Then('ABP-0040 edit page is displayed in payment method', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='magedelight_cybersource_firstname']"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='magedelight_cybersource_lastname']"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='magedelight_cybersource_street']"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='magedelight_cybersource_city']"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='magedelight_cybersource_region_id']"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='magedelight_cybersource_zip']"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='country']"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='maincontent']/div[3]/div[1]/div[3]/div[2]/p/a"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='cybersource_add_card_btn']"))).to.eventually.exist;
        yield delay(3000);
    }));
    When('ABP-0050 click on credit plan', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath("//a[@href='https://market2.beta.formed.org/rewards/account/']")).click();
        yield delay(10000);
    }));
    Then('ABP-0050 credit plan details are displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='cancel-credit-plan-btn']"))).to.eventually.exist;
        yield delay(3000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='maincontent']/div[3]/div[1]/div[3]/div[2]/div/p[2]/a[1]")).click();
        yield delay(15000);
    }));
    Then('ABP-0050 credit plan subscription is displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='amasty-shopby-product-list']/div[1]/ul/li[2]/form/button"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='amasty-shopby-product-list']/div[1]/ul/li[3]/form/button"))).to.eventually.exist;
        yield delay(3000);
    }));
    When('ABP-0050 click on cancel credit plan', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='cancel-credit-plan-btn']")).click();
        yield delay(10000);
    }));
    Then('ABP-0050 cancel credit plan prompt is displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@class='cancel-credit-plan-btn']"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@class='keep-credit-plan-btn']"))).to.eventually.exist;
        yield delay(3000);
        protractor_1.element(protractor_1.by.xpath(".//*[@class='cancel-credit-plan-btn']")).click();
        yield delay(10000);
    }));
    When('ABP-0060 click on your orders', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath("//a[@href='https://market2.beta.formed.org/sales/order/history/']")).click();
        yield delay(10000);
    }));
    Then('ABP-0070 orders page is displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='my-orders-table']/tbody/tr[1]/td[6]/a/span"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='my-orders-table']/tbody/tr[1]/td[4]/span"))).to.eventually.exist;
        yield delay(3000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='my-orders-table']/tbody/tr[1]/td[6]/a/span")).click();
        yield delay(10000);
    }));
    Then('ABP-0070 View details is displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='maincontent']/div[2]/div[1]/div[3]/div[1]/div[4]/div[1]/div/div[2]/button"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='maincontent']/div[2]/div[1]/div[3]/div[1]/div[4]/div[1]/div/div[1]/div/div[1]/div[1]/img[1]"))).to.eventually.exist;
        yield delay(3000);
    }));
    When('click on logout button', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='account-dropdown-button']")).click();
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='account-dropdown']/div/a[4]")).click();
        yield delay(15000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='login-dropdown-button']"))).to.eventually.exist;
        yield delay(3000);
    }));
    When('i move to shops products', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        protractor_1.browser.actions().mouseMove(protractor_1.element(protractor_1.by.xpath("//a[@href='https://market2.beta.formed.org/shop-products.html']"))).perform();
        yield delay(5000);
    }));
    When('i move to study products', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        protractor_1.browser.actions().mouseMove(protractor_1.element(protractor_1.by.linkText("Study"))).perform();
        yield delay(5000);
    }));
    When('i move to watch products', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        protractor_1.browser.actions().mouseMove(protractor_1.element(protractor_1.by.linkText("Watch"))).perform();
        yield delay(5000);
    }));
    When('i move to listen products', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        protractor_1.browser.actions().mouseMove(protractor_1.element(protractor_1.by.linkText("Listen"))).perform();
        yield delay(5000);
    }));
    When('i move to read products', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        protractor_1.browser.actions().mouseMove(protractor_1.element(protractor_1.by.linkText("Read"))).perform();
        yield delay(5000);
    }));
    When('i move to subscription products', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        protractor_1.browser.actions().mouseMove(protractor_1.element(protractor_1.by.xpath("//a[@href='ttps://market2.beta.formed.org/formed-subscriptions.html']"))).perform();
        yield delay(5000);
    }));
    When('PAP-0010 click on Talks', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(7000);
        protractor_1.element(protractor_1.by.xpath(".//*[@href='https://market2.beta.formed.org/shop-products/listen/talks.html']")).click();
        yield delay(20000);
    }));
    Then('PAP-0010 Talks page is displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='sorter']"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[1]/div/a/img"))).to.eventually.exist;
        yield delay(2000);
    }));
    When('PAP-0020 i click on Item', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[1]/div/a/img")).click();
        yield delay(15000);
    }));
    Then('PAP-0020 Product details is displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='maincontent']/div[2]/div/div[4]/div[2]/h1/span"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='maincontent']/div[2]/div/div[5]/div[1]/div[1]/div/img"))).to.eventually.exist;
        yield delay(3000);
    }));
    Then('PAP-0020 Text, You May Also Like, Product card in right column with image, Add to cart button are displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='related-products-slider']/div/div/div[1]/a/div/img"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='related-products-slider']/div/div/div[1]/a/span"))).to.eventually.exist;
        yield delay(5000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='product-addtocart-button']"))).to.eventually.exist;
        yield delay(5000);
    }));
    Then('Click on Add to cart', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='product-addtocart-button']")).click();
        yield delay(15000);
    }));
    When('PBP-0060 click on incart icon', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@class='counter qty']")).click();
        yield delay(6000);
    }));
    Then('PBP-0060 Added product details is dispalyed', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='mini-cart']/li/div/span/img"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='top-cart-btn-checkout']"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='mini-cart']/li/div/div/strong[1]/a"))).to.eventually.exist;
        yield delay(3000);
    }));
    When('PBP-0060 click on title', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='mini-cart']/li/div/div/strong[1]/a"))).to.eventually.exist;
        yield delay(3000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='mini-cart']/li/div/div/strong[1]/a")).click();
        yield delay(20000);
    }));
    When('PAP-0050 click on product in you may also like', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(10000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='related-products-slider-desktop']/div/div/div[1]/a/div/img")).click();
        yield delay(20000);
    }));
    When('PBP-0050 click on product in you may also like', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(15000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='related-products-slider-desktop']/div/div/div[3]/a/div/img")).click();
        yield delay(20000);
    }));
    When('PBP-0060 click on remove option', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='mini-cart']/li[2]/div/div/div[2]/div/a")).click();
        yield delay(15000);
    }));
    Then('PBP-0060 Item Remove prompt is displayed and click on OK button', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@class='action-secondary action-dismiss']"))).to.eventually.exist;
        yield delay(3000);
        protractor_1.element(protractor_1.by.xpath(".//*[@class='action-primary action-accept']")).click();
        yield delay(10000);
    }));
    When('PBP-0060 Click on checkout option', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@class='counter qty']")).click();
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='top-cart-btn-checkout']")).click();
        yield delay(20000);
    }));
    When('Click on Checkout option', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@class='counter qty']")).click();
        yield delay(20000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='top-cart-btn-checkout']")).click();
        yield delay(20000);
    }));
    When('PBP-0070 Click on create account', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='checkout-step-billing']/div/div/a")).click();
        yield delay(25000);
    }));
    Then('PBP-0070 Enter Details in create Account', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.navigate().refresh();
        yield delay(25000);
        var x = 999999;
        var rand = Math.floor(Math.random() * x) + 1;
        protractor_1.element(protractor_1.by.xpath(".//*[@id='gigya-register-screen']/form/div[1]/div[1]/input")).sendKeys("Fname");
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='gigya-register-screen']/form/div[1]/div[2]/input")).sendKeys("Lname");
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[1]/input")).sendKeys("5000");
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[2]/input")).sendKeys("invalid" + rand + "@gmail.com");
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[3]/input")).sendKeys("Raj@2016");
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[4]/input")).sendKeys("Raj@2016");
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[5]/div/label")).click();
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[6]/input[1]")).click();
        yield delay(20000);
    }));
    Then('PBP-0070 Enter Billing information', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(20000);
        protractor_1.element(protractor_1.by.xpath("html/body/main/div/main/div/div/div[3]/div[4]/div/div[1]/div/div[4]/div[1]/div[2]/div/div[1]/div/div[2]/div[1]/form/fieldset/fieldset/div/div[1]/div/input")).sendKeys("Chicago illonois");
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath("html/body/main/div/main/div/div/div[3]/div[4]/div/div[1]/div/div[4]/div[1]/div[2]/div/div[1]/div/div[2]/div[1]/form/fieldset/div[3]/div/input")).sendKeys("Chicago");
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath("html/body/main/div/main/div/div/div[3]/div[4]/div/div[1]/div/div[4]/div[1]/div[2]/div/div[1]/div/div[2]/div[1]/form/fieldset/div[5]/div/select")).click();
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath("html/body/main/div/main/div/div/div[3]/div[4]/div/div[1]/div/div[4]/div[1]/div[2]/div/div[1]/div/div[2]/div[1]/form/fieldset/div[5]/div/select/option[13]")).click();
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath("html/body/main/div/main/div/div/div[3]/div[4]/div/div[1]/div/div[4]/div[1]/div[2]/div/div[1]/div/div[2]/div[1]/form/fieldset/div[6]/div/input")).sendKeys("60014");
        yield delay(5000);
    }));
    Then('PBP-0070 Enter Shipping information', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(20000);
        protractor_1.element(protractor_1.by.xpath("html/body/main/div/main/div/div/div[3]/div[4]/div/div[1]/div/div[2]/div/div[2]/form/div/fieldset/div/div[1]/div/input")).sendKeys("Chicago illonois");
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath("html/body/main/div/main/div/div/div[3]/div[4]/div/div[1]/div/div[2]/div/div[2]/form/div/div[3]/div/input")).sendKeys("Chicago");
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath("html/body/main/div/main/div/div/div[3]/div[4]/div/div[1]/div/div[2]/div/div[2]/form/div/div[5]/div/select")).click();
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath("html/body/main/div/main/div/div/div[3]/div[4]/div/div[1]/div/div[2]/div/div[2]/form/div/div[5]/div/select/option[13]")).click();
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath("html/body/main/div/main/div/div/div[3]/div[4]/div/div[1]/div/div[2]/div/div[2]/form/div/div[6]/div/input")).sendKeys("60014");
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='checkout-step-shipping']/div[5]/h2")).click();
        yield delay(10000);
    }));
    Then('PBP-0070 select Shipping Service Speed', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='checkout-shipping-method-load']/div[5]/label/span"))).to.eventually.exist;
        yield delay(3000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='checkout-shipping-method-load']/div[5]/label/span")).click();
        yield delay(10000);
    }));
    Then('PBP-0070 Enter Payment Method', () => __awaiter(this, void 0, void 0, function* () {
        //await delay(5000);
        //element(by.xpath(".//*[@id='magedelight_cybersource_cc_type']")).click();
        yield delay(5000);
        //element(by.xpath(".//*[@id='billing-new-address-form']/div[4]/div")).click();
        protractor_1.element(protractor_1.by.xpath(".//*[@id='magedelight_cybersource_cc_type']")).click();
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='magedelight_cybersource_cc_type']/option[3]")).click();
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='magedelight_cybersource_cc_number']")).sendKeys("4242424242424242");
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='magedelight_cybersource_expiration']")).click();
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='magedelight_cybersource_expiration']/option[2]")).click();
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='magedelight_cybersource_expiration_yr']")).click();
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='magedelight_cybersource_expiration_yr']/option[4]")).click();
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='magedelight_cybersource_cc_cid']")).sendKeys("123");
        yield delay(3000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='checkout-step-payment']/div/div[3]")).click();
        yield delay(5000);
    }));
    Then('PBP-0070 Verify the Checkout Page', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='checkout-step-payment']/div/div[3]/div/button")).click();
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='checkout-step-review']/div[2]/div/button")).click();
        yield delay(15000);
    }));
    Then('PBP-0070 Click on purchase product in library page', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='amasty-shopby-product-list']/div[4]/div/ol/li/div/div/a/img"))).to.eventually.exist;
        yield delay(10000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='amasty-shopby-product-list']/div[4]/div/ol/li/div/div/a/img")).click();
        yield delay(8000);
    }));
    Then('PBP-0070 Order Confirmation is displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(10000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[1]/div[4]/div[1]/div[5]/button"))).to.eventually.exist;
        yield delay(10000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[1]/div[1]/h2"))).to.eventually.exist;
        yield delay(10000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[1]/div[4]/div[1]/div[5]/button")).click();
        yield delay(10000);
        //element(by.linkText("Order Date")).isDisplayed();
        //element(by.linkText("1Year FORMED On Demand Gift Subscription")).isDisplayed();
        //element(by.linkText("Payment summary")).isDisplayed();
        //element(by.linkText("Sent to: Fname Lname")).isDisplayed();
        //element(by.linkText("rajeshnakka.c212c@gmail.com")).isDisplayed();
        yield delay(10000);
    }));
    When('PBP-0070 Click on view in library', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(3000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[1]/div[4]/div[1]/div[5]/button")).click();
        yield delay(10000);
    }));
    Then('PBP-0070 View in library is displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='product-viewinlibrary-button']"))).to.eventually.exist;
        yield delay(10000);
    }));
    Then('Click on Product in watch', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[1]/div/a/img")).click();
        yield delay(15000);
    }));
    When('CO-0010 Click on Watch in Digital products', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(8000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='narrow-by-list']/dd[1]/ol/form/li[2]/ol/li[1]/a/label/div")).click();
        yield delay(10000);
    }));
    Then('Click on Product2 in watch', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[5]/div/a/img")).click();
        yield delay(10000);
    }));
    Then('CO-0010 Verify Check Out in Cart', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='mini-cart']/li[1]/div[1]/div/strong[1]/a")).click();
        yield delay(10000);
    }));
    Then('CO-0020 Cart should contain added products', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='maincontent']/div[2]/div/div[5]/div[1]/div[1]/div/img"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='product-alreadyincart-button']"))).to.eventually.exist;
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='product-alreadyincart-button']")).click();
        yield delay(10000);
    }));
    Then('CO-0030 delete product from Cart', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='mini-cart']/li[2]/div[1]/div/div/div/a")).click();
        yield delay(10000);
    }));
    Then('CO-0040 Create Account and Continue login is displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='register_modal_trigger']"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='login_modal_trigger']"))).to.eventually.exist;
        yield delay(5000);
    }));
    Then('Click on Checkout in Cart Summary', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='top-cart-btn-checkout']")).click();
        yield delay(20000);
    }));
    Then('CO-0050 Enter Details in create Account', () => __awaiter(this, void 0, void 0, function* () {
        var x = 999999;
        var rand = Math.floor(Math.random() * x) + 1;
        protractor_1.element(protractor_1.by.xpath(".//*[@id='gigya-register-screen']/form/div[1]/div[1]/input")).sendKeys("Fname");
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='gigya-register-screen']/form/div[1]/div[2]/input")).sendKeys("Lname");
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[1]/input")).sendKeys("5000");
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[2]/input")).sendKeys("sair7989@gmail.com");
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[3]/input")).sendKeys("krishna@123");
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[4]/input")).sendKeys("Krishna@123");
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[5]/div/label")).click();
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[6]/input[1]")).click();
        yield delay(20000);
    }));
    When('VR-0020 Click on the create an account', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='register_modal_trigger']")).click();
        yield delay(10000);
    }));
    When('SGB-0060 Conformation prompt is displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@value='OK']"))).to.eventually.exist;
        yield delay(3000);
        protractor_1.element(protractor_1.by.xpath(".//*[@value='OK']")).click();
        yield delay(10000);
    }));
    Then('SGB-0070 leader check list is displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='leaders-wrapper']/div/div[9]/a"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='leaders-wrapper']/div/div[8]/label"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='leaders-wrapper']/div/div[8]/label"))).to.eventually.exist;
        yield delay(3000);
    }));
    Then('CPS-0060 Enter Billing Information', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.navigate().refresh();
        //element(by.xpath(".//*[@id='billing-new-address-form']/div[9]/div/button[1]")).click();
        yield delay(5000);
        //element(by.css("html body.checkout-index-index.page-layout-1column main.formed__container.logged__in div.page-wrapper main#maincontent.page-main div.columns div.column.main div#checkout.checkout-container div.opc-wrapper ol#checkoutSteps.opc li#payment.checkout-payment-method div#checkout-step-payment.step-content form#co-payment-form.form.payments fieldset.fieldset div#checkout-payment-method-load.opc-payment div.items.payment-methods div.payment-group div.payment-method.custom-cybersource._active div.payment-method-content div div.payment-method-billing-address div.checkout-billing-address fieldset.fieldset div.billing-address-form form div#billing-new-address-form.fieldset.address fieldset.field.street.admin__control-fields.required div.control div.field._required div.control")).click();
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[4]/ol/li[5]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/fieldset/div/div[1]/div/input")).sendKeys("Chicago illonois");
        yield delay(5000);
        //element(by.xpath(".//*[@id='billing-new-address-form']/div[4]/div")).click();
        protractor_1.element(protractor_1.by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[4]/ol/li[5]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[4]/div/input")).sendKeys("Chicago");
        yield delay(1000);
        //element(by.css("html/body/main/div/main/div[3]/div/div[3]/div[4]/ol/li[5]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[5]/div/select")).click();
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[4]/ol/li[5]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[5]/div/select/option[13]")).click();
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[4]/ol/li[5]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[7]/div/input")).sendKeys("60014");
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='billing-new-address-form']/div[9]/div/button[1]")).click();
        yield delay(10000);
    }));
    Then('CPS-0060 Enter Payment Method', () => __awaiter(this, void 0, void 0, function* () {
        //await delay(5000);
        //element(by.xpath(".//*[@id='magedelight_cybersource_cc_type']")).click();
        yield delay(5000);
        //element(by.xpath(".//*[@id='billing-new-address-form']/div[4]/div")).click();
        protractor_1.element(protractor_1.by.xpath(".//*[@id='magedelight_cybersource_cc_type']/option[3]")).click();
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='magedelight_cybersource_cc_number']")).sendKeys("4111111111111111");
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='magedelight_cybersource_expiration']/option[7]")).click();
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='magedelight_cybersource_expiration_yr']/option[3]")).click();
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='magedelight_cybersource_cc_cid']")).sendKeys("222");
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='checkout-payment-method-load']/div/div[2]/div[2]/div[2]/div[2]/div[6]/div/button")).click();
        yield delay(10000);
    }));
    When('i click on user name drop down', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='account-dropdown-button']")).click();
        yield delay(10000);
    }));
    When('ABP-0010 click on get credit plan', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(10000);
        protractor_1.element(protractor_1.by.xpath("html/body/header/section[2]/div[8]/div/a/span")).click();
        yield delay(15000);
    }));
    When('click on credits', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='amasty-shopby-product-list']/div[1]/ul/li[1]/form/button")).click();
        yield delay(8000);
        protractor_1.element(protractor_1.by.xpath(".//*[@class='counter qty']")).click();
        yield delay(8000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='top-cart-btn-checkout']")).click();
        yield delay(15000);
    }));
    Then('CO-0080 Enter CVV', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='magedelight_cybersource_cc_cid']")).sendKeys('123');
        yield delay(15000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='checkout-step-payment']/div/div[3]")).click();
        yield delay(15000);
    }));
    Then('CO-0080 Click on place Order', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='checkout-step-payment']/div/div[3]/div/button")).click();
        yield delay(15000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='checkout-step-review']/div[2]/div/button")).click();
        yield delay(15000);
    }));
    When('click on watch document product', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath("html/body/header/section[3]/section/div[1]/div[2]/div/ul/li[2]/div/a")).click();
        yield delay(15000);
    }));
    Then('click on watch document', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[8]/div/div/strong/a")).click();
        yield delay(15000);
    }));
    Then('click on watch document1', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[13]/div/a/img")).click();
        yield delay(15000);
    }));
    Then('CPS-0080 Order Confirmation is displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(10000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[1]/div[1]/h2"))).to.eventually.exist;
        yield delay(5000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[1]/div[1]/div/div[1]/strong"))).to.eventually.exist;
        yield delay(10000);
    }));
    Then('CPS-0010 there is get credit plan', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(10000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("html/body/header/section[2]/div[8]/div/a/span"))).to.eventually.exist;
        //element(by.xpath("html/body/header/section[1]/div[8]/div/a/span")).isDisplayed();
    }));
    Then('click on product', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[3]/div/a/img")).click();
        yield delay(10000);
    }));
    Then('CPS-0020 Get Credit Plan prompt is displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("html/body/header/section[2]/div[8]/div/a/span"))).to.eventually.exist;
        yield delay(10000);
    }));
    When('CPS-0030 i click on get credits plan', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.linkText("Get Credit Plan")).click();
        yield delay(10000);
    }));
    Then('CPS-0030 get credits plan link is displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='offer-dt']/p[4]/a/button"))).to.eventually.exist;
        yield delay(10000);
    }));
    When('CPS-0050 Click on Monthly credit plan', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='amasty-shopby-product-list']/div[1]/ul/li[2]/form/button")).click();
        yield delay(10000);
    }));
    Then('CPS-0090 Available credits are displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@class='counter amount']"))).to.eventually.exist;
        yield delay(5000);
    }));
    Then('Account option is dispalyed in user drop down', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='account-dropdown']/div/a[1]"))).to.eventually.exist;
        yield delay(3000);
    }));
    When('i click on account', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='account-dropdown']/div/a[1]")).click();
        yield delay(10000);
    }));
    When('CPS-0100 Click on Annual credit plan', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='amasty-shopby-product-list']/div[1]/ul/li[4]/form/button")).click();
        yield delay(5000);
    }));
    Then('CPS-0100 Click on Change credit plan', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath(".//*[@href='https://market2.beta.formed.org/creditplans.html/']")).click();
        yield delay(6000);
    }));
    Then('CPS-0110 Click on Cancel Credit Plan', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(6000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='cancel-credit-plan-btn']")).click();
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@class='cancel-credit-plan-btn']"))).to.eventually.exist;
        yield delay(3000);
        protractor_1.element(protractor_1.by.xpath(".//*[@class='cancel-credit-plan-btn']")).click();
        yield delay(10000);
    }));
    Then('CO-0050 Verify Details in create Account', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='gigya-register-screen']/form/div[1]/div[1]/input"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='gigya-register-screen']/form/div[1]/div[2]/input"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='gigya-register-screen']/form/div[1]/div[2]/input"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[2]/input"))).to.eventually.exist;
        yield delay(5000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[3]/input"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[4]/input"))).to.eventually.exist;
        yield delay(5000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[5]/div/label/span[2]"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[6]/input[1]"))).to.eventually.exist;
        yield delay(5000);
    }));
    When('click on get credit plan in market view', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(6000);
        protractor_1.element(protractor_1.by.xpath("html/body/header/section[2]/div[8]/div/a/span")).click();
        yield delay(3000);
    }));
    Then('CO-0100 Click on Apply credits', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(6000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='opc-sidebar']/div[1]/div/div[2]/div/ol/li[1]/div/div[2]/label/span")).click();
        yield delay(3000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='opc-sidebar']/div[1]/div/div[2]/div/ol/li[2]/div/div[2]/label/span")).click();
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='minicart-apply-credits']"))).to.eventually.exist;
        yield delay(1000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='reward-points-form']/div[1]"))).to.eventually.exist;
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='opc-sidebar']/div[1]/div/div[2]/div/ol/li[2]/div/div[2]/label/span")).click();
        yield delay(3000);
    }));
    Then('CO-0100 click on apply credits', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='minicart-apply-credits']/button[1]"))).to.eventually.exist;
        yield delay(1000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='minicart-apply-credits']/button[2]"))).to.eventually.exist;
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='minicart-apply-credits']/button[1]")).click();
        yield delay(15000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='checkout-payment-method-load']/div/div[2]/div[2]/div[2]/div[2]/div[4]"))).to.eventually.exist;
        yield delay(2000);
    }));
    Then('HPF-0020 market details are displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@href='https://market2.beta.formed.org/shop-products.html']"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='search_mini_form']/div[1]/div/label/span[1]"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='login-dropdown-button']"))).to.eventually.exist;
        yield delay(3000);
    }));
    When('HPF-0020 move to shop products', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.actions().mouseMove(protractor_1.element(protractor_1.by.xpath("//a[@href='https://market2.beta.formed.org/shop-products.html']"))).perform();
        yield delay(5000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/watch.html']"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/watch/feature-films.html']"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/watch/documentaries.html']"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/watch/talks.html']"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/watch/tv-shows.html']"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/watch/spanish.html']"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/listen.html']"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/listen/talks.html']"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/listen/audio-dramas.html']"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/listen/audiobooks.html']"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/listen/espa-ol.html']"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/formed-subscriptions.html']"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/formed-subscriptions/on-demand.html']"))).to.eventually.exist;
        yield delay(2000);
    }));
    When('i click on search icon and enter text', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='search_mini_form']/div[1]/div/label/span[1]")).click();
        yield delay(4000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='search']")).sendKeys("Listen");
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='search_mini_form']/div[1]/div/label/span[1]")).click();
        yield delay(8000);
    }));
    When('HPF-0030 click on demand page', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//a[@href='https://beta.formed.org/']")).click();
        yield delay(10000);
    }));
    When('HPF-0050 i click on library link', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(20000);
        protractor_1.element(protractor_1.by.xpath(".//a[@href='https://market2.beta.formed.org/mylibrary/']']")).click();
        yield delay(15000);
    }));
    Then('your library is  empty and some message is displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='amasty-shopby-product-list']/section/h1"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='amasty-shopby-product-list']/section/p/a"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='amasty-shopby-product-list']/section/a"))).to.eventually.exist;
        yield delay(2000);
    }));
    When('HPF-0060 Click on user name', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='simple-dropdown']/span")).click();
        yield delay(6000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/div/div/div[2]/a[1]"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/div/div/div[2]/a[2]"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/div/div/div[2]/a[3]"))).to.eventually.exist;
        yield delay(5000);
    }));
    Then('HPF-0070 login user market page details', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@href='https://market2.beta.formed.org/shop-products.html']"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='account-dropdown-button']"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='search_mini_form']/div[1]/div/label/span[1]"))).to.eventually.exist;
        yield delay(3000);
    }));
    When('HPF-0080 click on library page', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath("//a[@href='https://market2.beta.formed.org/mylibrary/']")).click();
        yield delay(10000);
    }));
    When('HPF-0080 show purchase products', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='amasty-shopby-product-list']/div[4]/div/ol/li[1]/div/div/a/img"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='amasty-shopby-product-list']/div[4]/div/ol/li[2]/div/div/a/img"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='amasty-shopby-product-list']/div[4]/div/ol/li[3]/div/div/a/img"))).to.eventually.exist;
        yield delay(3000);
    }));
    When('LP-0020 click on library page', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//a[@href='https://market2.beta.formed.org/mylibrary/']")).click();
        yield delay(20000);
    }));
    Then('LP-0030 Purchase products is displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='amasty-shopby-product-list']/div[4]/div/ol/li[1]/div/div/a/img"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='amasty-shopby-product-list']/div[4]/div/ol/li[2]/div/div/a/img"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='amasty-shopby-product-list']/div[4]/div/ol/li[3]/div/div/a/img"))).to.eventually.exist;
        yield delay(3000);
    }));
    When('LP-0050 click on watch', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='narrow-by-list']/dd[1]/ol/form/li/ol/li[1]/a/label")).click();
        yield delay(10000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("//a[@href='https://market2.beta.formed.org/catalog/product/view/id/376/s/vd-threemiraclesofhappiness-en/category/6/']"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='open-modal-mylibrary-player-1969']/i"))).to.eventually.exist;
        yield delay(5000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='amasty-shopby-product-list']/div[4]/div/ol/li[1]/div/div/div[1]"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='open-modal-mylibrary-player-1969']/i"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='amasty-shopby-product-list']/div[4]/div/ol/li[1]/div/div/div[2]"))).to.eventually.exist;
        yield delay(3000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='open-modal-mylibrary-player-1969']/i")).click();
        yield delay(10000);
    }));
    Then('LP-0060 click on play button', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='close-modal-mylibrary-player-1969']")).click();
        yield delay(5000);
    }));
    Then('LP-0070 click on play button', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='close-modal-mylibrary-player-1665']")).click();
        yield delay(5000);
    }));
    When('LP-0070 click on Listen', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='narrow-by-list']/dd[1]/ol/form/li/ol/li[2]/a/label/div[1]")).click();
        yield delay(10000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='amasty-shopby-product-list']/div[4]/div/ol/li/div/div/a/img"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='amasty-shopby-product-list']/div[4]/div/ol/li/div/div/div[1]/div"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='amasty-shopby-product-list']/div[4]/div/ol/li/div/div/div[2]"))).to.eventually.exist;
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='open-modal-mylibrary-player-1665']/i")).click();
        yield delay(15000);
    }));
    When('LP-0040 click on Titel string', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='sorter']")).click();
        yield delay(10000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='sorter']/option[1]"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='sorter']/option[2]"))).to.eventually.exist;
        yield delay(3000);
    }));
    When('LP-0080 click on Read', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='narrow-by-list']/dd[1]/ol/form/li/ol/li[3]/a/label/div[1]")).click();
        yield delay(10000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='amasty-shopby-product-list']/div[4]/div/ol/li[1]/div/div/div[2]/strong"))).to.eventually.exist;
        yield delay(3000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='open-ebook-download-modal-2297']/i")).click();
        yield delay(10000);
    }));
    Then('LP-0090 Download format is displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='ebook-download-modal-2297']/p"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='ebook-download-modal-2297']/div/div[1]/a"))).to.eventually.exist;
        yield delay(5000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='ebook-download-modal-2297']/div/div[1]/p"))).to.eventually.exist;
        yield delay(3000);
    }));
    Then('LLP-0010 Formed icon, Ondemand, Library, Market are displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(15000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@title='On Demand']"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@title='Community']"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@href='https://market2.beta.formed.org/mylibrary/']"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@href='https://market2.beta.formed.org/']"))).to.eventually.exist;
        yield delay(3000);
    }));
    When('i click on login button to verify for forgot password', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='login-dropdown-button']")).click();
        yield delay(5000);
    }));
    Then('LLP-0020 Email, Password, submit, Forgot password are displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='gigya-login-screen']/form/div/div[1]/div[1]/input"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='gigya-login-screen']/form/div/div[1]/div[2]/input"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='gigya-login-screen']/form/div/div[2]/div/input[1]"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='gigya-login-screen']/form/div/div[3]/a"))).to.eventually.exist;
        yield delay(2000);
    }));
    When('LLP-0040 When click on Forgot Password', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='gigya-login-screen']/form/div/div[3]/a")).click();
        yield delay(2000);
    }));
    Then('LLP-0040 Prompt is displayed to enter email', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='gigya-forgot-password-screen']/form/div/div[1]/div/input"))).to.eventually.exist;
        yield delay(2000);
    }));
    Then('click on back to enter email', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='gigya-forgot-password-screen']/form/div/div[3]/label/a")).click();
        yield delay(2000);
    }));
    When('LLP-0050 Click on account drop down for parish user', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='gigya-login-screen']/form/div/div[1]/div[1]/input")).sendKeys("test+parish@formed.org");
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='gigya-login-screen']/form/div/div[1]/div[2]/input")).sendKeys("formed");
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='gigya-login-screen']/form/div/div[2]/div/input[1]")).click();
        yield delay(15000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='account-dropdown-button']")).click();
        yield delay(1000);
    }));
    Then('LLP-0050 Account, subscription, dashboard, logout are displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='account-dropdown']/div/a[1]"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='account-dropdown']/div/a[2]"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='account-dropdown']/div/a[3]"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='account-dropdown']/div/a[4]"))).to.eventually.exist;
        yield delay(2000);
    }));
    When('LLP-0060 Click on Account in username drop down', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='account-dropdown']/div/a[1]")).click();
        yield delay(5000);
    }));
    Then('LLP-0060 Name, Email, Password are displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='maincontent']/div[3]/div[1]/div[1]/div[2]/section/p"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='maincontent']/div[3]/div[1]/div[1]/div[2]/section/h2"))).to.eventually.exist;
        yield delay(2000);
    }));
    When('LLP-0080 Click on Subscription in username drop down', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='account-dropdown-button']")).click();
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='account-dropdown']/div/a[2]")).click();
        yield delay(12000);
    }));
    Then('LLP-0080 Subscription, Parish, Payment information are displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(8000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='scroll-top']/div/div/div[1]/div[2]/div/div/div[1]/div[2]/a"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='parishCode']"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='scroll-top']/div/div/div[1]/div[2]/div/div/div[1]/div[2]/a"))).to.eventually.exist;
        yield delay(2000);
    }));
    When('LLP-0110 Click on dashboard in username drop down', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='simple-dropdown']/span")).click();
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='header']/div/div[1]/div/div/ul/profile-menu/div/div/div/div/div[2]/span[1]/a")).click();
        yield delay(12000);
    }));
    When('LLP-0120 Click on logout button', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='simple-dropdown']/span")).click();
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='header']/div/div[1]/div/div/ul/profile-menu/div/div/div/div/div[2]/a[3]")).click();
        yield delay(20000);
    }));
    When('LLP-0050 Click on username drop down for individual user', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(15000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='simple-dropdown']")).click();
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/span/div/login/form/input[1]")).sendKeys("rajeshnakka.cmc@gmail.com");
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/span/div/login/form/input[2]")).sendKeys("123456");
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/span/div/login/form/button")).click();
        yield delay(10000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='simple-dropdown']/span")).click();
        yield delay(2000);
    }));
    Then('LLP-0050 Account, Subscription, logout are displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/div/div/div[2]/a[1]"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/div/div/div[2]/a[2]"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/div/div/div[2]/a[3]"))).to.eventually.exist;
        yield delay(2000);
    }));
    When('LLP-0100 Click on Subscription for individual user', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/div/div/div[2]/a[2]")).click();
        yield delay(10000);
    }));
    Then('LLP-0100 Subscription payement is displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='scroll-top']/div/div/div/div/div/div/div[2]/div/div[1]"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='scroll-top']/div/div/div/div/div/div/div[2]/div/div[2]/div/modal-link/a/span"))).to.eventually.exist;
        yield delay(2000);
    }));
    Then('click on ondemand subscription', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/formed-subscriptions/on-demand.html']")).click();
        yield delay(15000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[1]/div/a/img")).click();
        yield delay(8000);
    }));
    Then('VR-0020 sign in group detail is displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='maincontent']/div[2]/div/div[4]/div[2]/h1/span"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='maincontent']/div[2]/div/div[5]/div[1]/div[1]/div/img"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='product-addtocart-button']"))).to.eventually.exist;
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='product-options-wrapper']/div/div[1]/div/label")).click();
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='product-addtocart-button']")).click();
        yield delay(10000);
    }));
    Then('VR-0020 click on checkout button', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@class='counter-number']")).click();
        yield delay(8000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='top-cart-btn-checkout']")).click();
        yield delay(15000);
    }));
    When('PBC-0010 click on pay by check', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='checkout-payment-method-load']/div/div[1]/div/div/div/select")).click();
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='checkout-payment-method-load']/div/div[1]/div/div/div/select/option[2]")).click();
        yield delay(10000);
    }));
    Then('PBC-0020 Billing information are displayed', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='checkout-payment-method-load']/div/div[2]/div[2]/div[2]/div[2]/div/input")).sendKeys("test");
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@name=street[0]]")).sendKeys("Chicago illonois");
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@name=city")).sendKeys("Chicago");
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@name=region_id")).click();
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[5]/ol/li[5]/div/form/fieldset/div[1]/div/div[2]/div[2]/div[2]/div[3]/div/fieldset/div[2]/form/div/div[5]/div/select/option[13]")).click();
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@name=country_id]")).click();
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[5]/ol/li[5]/div/form/fieldset/div[1]/div/div[2]/div[2]/div[2]/div[3]/div/fieldset/div[2]/form/div/div[8]/div/select/option[219]")).click();
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@name=telephone]")).sendKeys("9898985555");
        yield delay(3000);
        protractor_1.element(protractor_1.by.xpath(".//[@name=postcode]")).sendKeys("60014");
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='billing-new-address-form']/div[10]/div/button[1]")).click();
        yield delay(5000);
    }));
    When('PBCC-0040 click on Entercupon', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(8000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='coupons-tax-exempt']/div[1]/strong/a")).click();
        yield delay(10000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='coupons-tax-exempt']/div[2]/div[1]/label/input"))).to.eventually.exist;
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='coupons-tax-exempt']/div[2]/div[1]/label/input")).sendKeys("2018FormedSP");
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='coupons-tax-exempt']/div[2]/div[1]/button[1]")).click();
        yield delay(2000);
    }));
    When('PBC-0030 order conformation is displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/img[1]"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[1]/div[4]/div[1]/div[2]/div[2]/div[2]/span[1]/span"))).to.eventually.exist;
        yield delay(2000);
    }));
    When('click on Dashboard', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='account-dropdown-button']")).click();
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='account-dropdown']/div/a[3]")).click();
        yield delay(20000);
    }));
    When('click on login user in ondemand page', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@class='initials ng-binding']")).click();
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='header']/div/div[1]/div/div/ul/profile-menu/div/div/div/div/div[2]/a[2]")).click();
        yield delay(10000);
    }));
    When('subscription information is displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='scroll-top']/div/div/div[1]/div[1]/div/div/div[2]/div/div[1]"))).to.eventually.exist;
        yield delay(5000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='scroll-top']/div/div/div[1]/div[1]/div/div/div[1]/div[1]/a"))).to.eventually.exist;
        yield delay(5000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='scroll-top']/div/div/div[1]/div[1]/div/div/div[2]/div/div[2]/div/modal-link/a/span"))).to.eventually.exist;
        yield delay(5000);
    }));
    Then('VR-0010 entercode,getfreetrail,sign up group is displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(20000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='scroll-top']/div/div/div[2]/div[3]/registration-column/a"))).to.eventually.exist;
        yield delay(10000);
    }));
    Then('VR-0030 Billing information are displayed', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.navigate().refresh();
        protractor_1.element(protractor_1.by.css("html body.checkout-index-index.page-layout-1column main.formed__container.logged__in div.page-wrapper main#maincontent.page-main div.columns div.column.main div#checkout.checkout-container div.opc-wrapper ol#checkoutSteps.opc li#payment.checkout-payment-method div#checkout-step-payment.step-content form#co-payment-form.form.payments fieldset.fieldset div#checkout-payment-method-load.opc-payment div.items.payment-methods div.payment-group div.payment-method.custom-cybersource._active div.payment-method-content div div.payment-method-billing-address div.checkout-billing-address fieldset.fieldset div.billing-address-form form div#billing-new-address-form.fieldset.address fieldset.field.street.admin__control-fields.required div.control div.field._required div.control")).click();
        yield delay(12000);
        protractor_1.element(protractor_1.by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[4]/ol/li[5]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/fieldset/div/div[1]/div/input")).sendKeys("Chicago illonois");
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='billing-new-address-form']/div[4]/div")).click();
        protractor_1.element(protractor_1.by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[4]/ol/li[5]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[4]/div/input")).sendKeys("Chicago");
        yield delay(1000);
        protractor_1.element(protractor_1.by.css("html/body/main/div/main/div[3]/div/div[3]/div[4]/ol/li[5]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[5]/div/select")).click();
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[4]/ol/li[5]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[5]/div/select/option[13]")).click();
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[4]/ol/li[5]/div/form/fieldset/div[1]/div/div[2]/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[9]/div/input")).sendKeys("9898985555");
        yield delay(3000);
        protractor_1.element(protractor_1.by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[4]/ol/li[5]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[7]/div/input")).sendKeys("60014");
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='billing-new-address-form']/div[10]/div/button[1]")).click();
        yield delay(5000);
    }));
    Then('VR-0030 Enter Payment Method', () => __awaiter(this, void 0, void 0, function* () {
        //await delay(5000);
        //element(by.xpath(".//*[@id='magedelight_cybersource_cc_type']")).click();
        yield delay(5000);
        //element(by.xpath(".//*[@id='billing-new-address-form']/div[4]/div")).click();
        protractor_1.element(protractor_1.by.xpath(".//*[@id='magedelight_cybersource_cc_type']/option[3]")).click();
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='magedelight_cybersource_cc_number']")).sendKeys("4242424242424242");
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='magedelight_cybersource_expiration']/option[2]")).click();
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='magedelight_cybersource_expiration_yr']/option[4]")).click();
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='magedelight_cybersource_cc_cid']")).sendKeys("123");
    }));
    Then('SGB-0010 Enter Payment Method with Form fund', () => __awaiter(this, void 0, void 0, function* () {
        //await delay(5000);
        //element(by.xpath(".//*[@id='magedelight_cybersource_cc_type']")).click();
        yield delay(5000);
        //element(by.xpath(".//*[@id='billing-new-address-form']/div[4]/div")).click();
        protractor_1.element(protractor_1.by.xpath(".//*[@id='magedelight_cybersource_cc_type']/option[3]")).click();
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='magedelight_cybersource_cc_number']")).sendKeys("4242424242424242");
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='magedelight_cybersource_expiration']/option[2]")).click();
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='magedelight_cybersource_expiration_yr']/option[4]")).click();
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='magedelight_cybersource_cc_cid']")).sendKeys("123");
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='checkout-payment-method-load']/div/div[2]/div[2]/div[2]/div[2]/div[4]/label/span")).click();
        yield delay(4000);
    }));
    Then('SGB-0020 agree for terms of Funding', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(8000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='terms-modal-checkbox']/label/span")).click();
        yield delay(10000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='terms-modal-footer-actions']/button")).click();
        yield delay(2000);
    }));
    Then('SGB-0020 Set goal', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(3000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[6]/aside[1]/div[2]/footer/button[1]")).click();
        yield delay(3000);
    }));
    Then('SGB-0030 summary Page is displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@class='btn formed-funding-order-success__group-setup']"))).to.eventually.exist;
        yield delay(2000);
        //.//*[@id='maincontent']/div[2]/div/div[3]/div/div[2]/button
    }));
    Then('SGB-0040 Click on Setup group and verify', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(3000);
        protractor_1.element(protractor_1.by.xpath(".//*[@class='btn formed-funding-order-success__group-setup']")).click();
        yield delay(15000);
        //.//*[@id='maincontent']/div[2]/div/div[3]/div/div[2]/button
    }));
    Then('SGB-0050 Enter Organisation information is displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(3000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='groupMission']")).sendKeys("");
        //await delay(2000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='groupLeader']")).sendKeys(".//*[@id='groupLeader']");
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath("//*[@id='groupMission']")).sendKeys(".//*[@id='groupLeader']");
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/group-finish-init/div[2]/div[1]/div[2]/form/input[3]")).sendKeys("test");
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath(".//*[@value='activate']")).click();
        yield delay(2000);
        //.//*[@id='maincontent']/div[2]/div/div[3]/div/div[2]/button
    }));
    Then('SGB-0080 Enter Organisation information is displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("html/body/div[5]/div/div/group-finish-init/div[2]/div[1]/div[2]/form/input[3]"))).to.eventually.exist;
        yield delay(10000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("html/body/div[3]/div/div/group-finish-init/div[2]/div[1]/div[2]/form/custom-url/div/div/div[1]/input"))).to.eventually.exist;
        yield delay(10000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@value='activate']"))).to.eventually.exist;
        yield delay(10000);
    }));
    Then('SGB-0050 Enter Organisation information', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='groupName']"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='groupLeader']"))).to.eventually.exist;
        yield delay(2000);
        //.//*[@id='maincontent']/div[2]/div/div[3]/div/div[2]/button
    }));
    When('VR-0040 click on Entercupon', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(8000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='coupons-tax-exempt']/div[1]/strong/a")).click();
        yield delay(10000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='coupons-tax-exempt']/div[2]/div[1]/label/input"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='coupons-tax-exempt']/div[2]/div[2]/input"))).to.eventually.exist;
        yield delay(2000);
    }));
    When('VR-0030 Choose organization', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='group-subscription-diocese-select']")).click();
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='group-subscription-diocese-select']/option[5]")).click();
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='group-subscription-organization-select']")).click();
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='group-subscription-organization-select']/option[6]")).click();
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='checkout-payment-method-load']/div/div[2]/div[2]/div[2]/div[4]/div[3]/div/button")).click();
        yield delay(15000);
    }));
    When('VR-0040 Choose organization', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='group-subscription-diocese-select']")).click();
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='group-subscription-diocese-select']/option[5]")).click();
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='group-subscription-organization-select']")).click();
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='group-subscription-organization-select']/option[6]")).click();
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='checkout-payment-method-load']/div/div[2]/div[2]/div[2]/div[2]/div[6]/div/button")).click();
        yield delay(15000);
    }));
    When('VR-0050 order conformation is displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[1]/div[4]/div[1]/div[3]/button"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[1]/div[1]/h2"))).to.eventually.exist;
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[1]/div[4]/div[1]/div[3]/button")).click();
        yield delay(15000);
    }));
    When('VR-0060 Enter organization information', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='groupLeader']")).sendKeys("Krishna");
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='groupMission']")).sendKeys("I love my country");
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/group-finish-init/div[2]/div[1]/div[2]/form/input[3]")).sendKeys("Formed");
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath(".//*[@value='activate']")).click();
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@value='OK']")).click();
        yield delay(10000);
    }));
    Then('VR-0060 Leader checklist is displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='leaders-wrapper']/div/div[2]/label"))).to.eventually.exist;
        yield delay(1000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='leaders-wrapper']/div/div[3]/label"))).to.eventually.exist;
        yield delay(1000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='leaders-wrapper']/div/div[4]/label"))).to.eventually.exist;
        yield delay(1000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='leaders-wrapper']/div/div[5]/label"))).to.eventually.exist;
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='simple-dropdown']/span")).click();
        yield delay(4000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='header']/div/div[1]/div/div/ul/profile-menu/div/div/div/div/div[2]/a[2]")).click();
        yield delay(10000);
    }));
    Then('VR-0070 Account information is displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='scroll-top']/div/div/div[1]/div[1]/div/div/div/div[3]/div[2]/a"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='scroll-top']/div/div/div[1]/div[1]/div/div/div/div[3]/div[2]/a"))).to.eventually.exist;
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='simple-dropdown']")).click();
        yield delay(4000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='header']/div/div[1]/div/div/ul/profile-menu/div/div/div/div/div[2]/a[3]")).click();
        yield delay(15000);
    }));
    Then('VR-0080 click on ondemand subscription', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/formed-subscriptions/on-demand.html']")).click();
        yield delay(10000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[2]/div/a/img")).click();
        yield delay(8000);
    }));
    Then('VR-0090 sign in group detail is displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='maincontent']/div[2]/div/div[5]/div[1]/div[1]/div/img"))).to.eventually.exist;
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='product-options-wrapper']/div/div[1]/div/label")).click();
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='product-addtocart-button']")).click();
        yield delay(10000);
    }));
    Then('VR-0100 Billing information are displayed', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.navigate().refresh();
        protractor_1.element(protractor_1.by.xpath(".//*[@id='billing-new-address-form']/div[9]/div/button[1]")).click();
        yield delay(5000);
        protractor_1.element(protractor_1.by.css("html body.checkout-index-index.page-layout-1column main.formed__container.logged__in div.page-wrapper main#maincontent.page-main div.columns div.column.main div#checkout.checkout-container div.opc-wrapper ol#checkoutSteps.opc li#payment.checkout-payment-method div#checkout-step-payment.step-content form#co-payment-form.form.payments fieldset.fieldset div#checkout-payment-method-load.opc-payment div.items.payment-methods div.payment-group div.payment-method.custom-cybersource._active div.payment-method-content div div.payment-method-billing-address div.checkout-billing-address fieldset.fieldset div.billing-address-form form div#billing-new-address-form.fieldset.address fieldset.field.street.admin__control-fields.required div.control div.field._required div.control")).click();
        yield delay(12000);
        protractor_1.element(protractor_1.by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[4]/ol/li[5]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/fieldset/div/div[1]/div/input")).sendKeys("Chicago illonois");
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='billing-new-address-form']/div[4]/div")).click();
        protractor_1.element(protractor_1.by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[4]/ol/li[5]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[4]/div/input")).sendKeys("Chicago");
        yield delay(1000);
        protractor_1.element(protractor_1.by.css("html/body/main/div/main/div[3]/div/div[3]/div[4]/ol/li[5]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[5]/div/select")).click();
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[4]/ol/li[5]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[5]/div/select/option[13]")).click();
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[4]/ol/li[5]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[7]/div/input")).sendKeys("60014");
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='billing-new-address-form']/div[9]/div/button[1]")).click();
        yield delay(5000);
    }));
    When('VR-0120 click on Entercupon', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(8000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='coupons-tax-exempt']/div[1]/strong/a")).click();
        yield delay(10000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='coupons-tax-exempt']/div[2]/div[1]/label/input"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='coupons-tax-exempt']/div[2]/div[2]/input"))).to.eventually.exist;
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='checkout-payment-method-load']/div/div[2]/div[2]/div[2]/div[2]/div[6]/div/button")).click();
        yield delay(15000);
    }));
    When('VR-0130 order conformation is displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[1]/div[4]/div[1]/div[3]/button"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/img[1]"))).to.eventually.exist;
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[1]/div[4]/div[1]/div[3]/button")).click();
        yield delay(15000);
    }));
    Then('VR-0140 subscription information', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='simple-dropdown']/span")).click();
        yield delay(4000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='header']/div/div[1]/div/div/ul/profile-menu/div/div/div/div/div[2]/a[2]")).click();
        yield delay(10000);
    }));
    Then('PBP-0010 Read products is displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/read/nonfiction.html']"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/read/fiction.html']"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/read/youth.html']"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/read/espa-ol.html']"))).to.eventually.exist;
        yield delay(3000);
    }));
    Then('PBP-0010 Click on fiction in Read link', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/read/fiction.html']")).click();
        yield delay(15000);
    }));
    When('PBP-0020 Click on product', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[1]/div/a/img")).click();
        yield delay(10000);
    }));
    Then('PBP-0020 Read product and Add to cart button is displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='maincontent']/div[2]/div/div[5]/div/div[1]/div/img"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='product-addtocart-button']"))).to.eventually.exist;
        yield delay(5000);
    }));
    When('PBP-0030 click on Add to cart button', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='product-addtocart-button']")).click();
        yield delay(15000);
    }));
    Then('PBP-0030 Message and cart icon number and incart displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='maincontent']/div[1]/div[2]/div[2]/div/div"))).to.eventually.exist;
        yield delay(5000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='maincontent']/div[2]/div/div[4]/div[2]/h1/span"))).to.eventually.exist;
        yield delay(5000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='product-alreadyincart-button']"))).to.eventually.exist;
        yield delay(5000);
    }));
    When('PBP-0040 Click on incart button', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@class='counter qty']")).click();
        yield delay(5000);
        // element(by.xpath(".//*[@id='minicart-content-wrapper']/div")).isDisplayed();
    }));
    When('PBP-0050 cart icon button is increased by 1', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@class='counter-number']"))).to.eventually.exist;
        yield delay(5000);
    }));
    Then('SPP-0010 digital products and search icon are displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='search_mini_form']/div[1]/div/label/span[1]"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@href='https://market2.beta.formed.org/listen.html']"))).to.eventually.exist;
        yield delay(3000);
    }));
    When('SPP-0020 click on the search icon', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='search_mini_form']/div[1]/div/label/span[1]")).click();
        yield delay(3000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='search']")).sendKeys("pope");
        yield delay(6000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='search_mini_form']/div[1]/div/label/span[1]")).click();
        yield delay(10000);
    }));
    Then('SPP-0030 Search product page is displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='amasty-shopby-product-list']/h1"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='amasty-shopby-product-list']/div[1]/ol/li[1]/div/a/img"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='narrow-by-list']/dd[1]/ol/form/li[4]/a/label/div"))).to.eventually.exist;
        yield delay(3000);
    }));
    When('SPP-0040 click on watch in left side view', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='narrow-by-list']/dd[1]/ol/form/li[3]/a/label/div")).click();
        yield delay(15000);
    }));
    Then('SPP-0040 Watch sub options are displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='narrow-by-list']/dd[1]/ol/form/li[3]/ol/li[1]/a/label/div"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='narrow-by-list']/dd[1]/ol/form/li[3]/ol/li[2]/a/label/div"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='narrow-by-list']/dd[1]/ol/form/li[3]/ol/li[3]/a/label/div"))).to.eventually.exist;
        yield delay(3000);
    }));
    When('SPP-0040 click on Listen in left side view', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='narrow-by-list']/dd[1]/ol/form/li[4]/a/label/div")).click();
        yield delay(15000);
    }));
    Then('SPP-0040 Listen sub options are displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='narrow-by-list']/dd[1]/ol/form/li[4]/ol/li[1]/a/label/div"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='narrow-by-list']/dd[1]/ol/form/li[4]/ol/li[2]/a/label/div"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='narrow-by-list']/dd[1]/ol/form/li[4]/ol/li[3]/a/label/div"))).to.eventually.exist;
        yield delay(3000);
    }));
    When('SPP-0040 click on Read in left side view', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='narrow-by-list']/dd[1]/ol/form/li[5]/a/label/div")).click();
        yield delay(15000);
    }));
    Then('SPP-0040 Read sub options are displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='narrow-by-list']/dd[1]/ol/form/li[5]/ol/li[1]/a/label/div"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='narrow-by-list']/dd[1]/ol/form/li[5]/ol/li[2]/a/label/div"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='narrow-by-list']/dd[1]/ol/form/li[5]/ol/li[3]/a/label/div"))).to.eventually.exist;
        yield delay(3000);
    }));
    When('SPP-0040 select one or more attribute filter', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='narrow-by-list']/dd[1]/ol/form/li[5]/ol/li[1]/a/label/div")).click();
        yield delay(15000);
    }));
    When('SPP-0050 click on filter product', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='narrow-by-list']/dd[4]/ol/form/li[1]/a/label/span")).click();
        yield delay(10000);
    }));
    Then('SPP-0050 Product details are displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='amasty-shopby-product-list']/div[1]/ol/li[1]/div/a/img"))).to.eventually.exist;
        yield delay(3000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='narrow-by-list']/dd[2]/ol/form/li[1]/a/label/span")).click();
        yield delay(10000);
    }));
    Then('SPP-0060 Product page is displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath("//a[@href='https://market2.beta.formed.org/study/dvds.html']")).click();
        yield delay(10000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[1]/div/a/img"))).to.eventually.exist;
        yield delay(5000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='sorter']"))).to.eventually.exist;
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='sorter']")).click();
        yield delay(1000);
    }));
    Then('SPP-0070 featured drop down is displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='sorter']/option[1]"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='sorter']/option[2]"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='sorter']/option[3]"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='sorter']/option[4]"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='sorter']/option[5]"))).to.eventually.exist;
        yield delay(2000);
    }));
    Then('SPP-0080 is products displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(10000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='product-addtocart-button']"))).to.eventually.exist;
        yield delay(5000);
    }));
    When('SPP-0080 Click on product', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li/div/a/img")).click();
        yield delay(25000);
    }));
    Then('navigate to lenlet_cart', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        yield protractor_1.browser.get("https://market2.beta.formed.org/c/lenten_trial");
        yield delay(15000);
    }));
    Then('navigate to getbronze', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        yield protractor_1.browser.get("https://market2.beta.formed.org/c/getbronze");
        yield delay(15000);
    }));
    Then('navigate to 7daytrial', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        yield protractor_1.browser.get("https://market2.beta.formed.org/c/7daytrial");
        yield delay(15000);
    }));
    Then('navigate to SoG', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        yield protractor_1.browser.get("https://market2.beta.formed.org/c/SoG");
        yield delay(15000);
    }));
    Then('navigate to BiaY', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        yield protractor_1.browser.get("https://market2.beta.formed.org/c/BiaY");
        yield delay(15000);
    }));
    Then('navigate to getsilver', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        yield protractor_1.browser.get("https://market2.beta.formed.org/c/getsilver");
        yield delay(15000);
    }));
    Then('navigate to getplatinum', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        yield protractor_1.browser.get("https://market2.beta.formed.org/c/getplatinum");
        yield delay(15000);
    }));
    Then('navigate to getgold', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        yield protractor_1.browser.get("https://market2.beta.formed.org/c/getgold");
        yield delay(15000);
    }));
    Then('ICO-0020 Verify the Checkout Page', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='checkout-payment-method-load']/div/div[2]/div[2]/div[2]/div[2]/div[6]/div/button")).click();
        yield delay(15000);
    }));
    When('ICO-0010 instant page is displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(1000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div/div[1]/div/h1"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div/div[1]/div/img"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[6]/input[1]"))).to.eventually.exist;
        yield delay(2000);
    }));
    Then('ICO-0030 order conformation is displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[2]/div[4]/div[1]/div[1]/div[2]/div[1]/img[1]"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[2]/div[4]/div[1]/div[3]/button"))).to.eventually.exist;
        yield delay(2000);
    }));
    Then('ICO-0020 Billing information are displayed in incart', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.navigate().refresh();
        protractor_1.element(protractor_1.by.css("html body.checkout-index-index.page-layout-1column main.formed__container.logged__in div.page-wrapper main#maincontent.page-main div.columns div.column.main div#checkout.checkout-container div.opc-wrapper ol#checkoutSteps.opc li#payment.checkout-payment-method div#checkout-step-payment.step-content form#co-payment-form.form.payments fieldset.fieldset div#checkout-payment-method-load.opc-payment div.items.payment-methods div.payment-group div.payment-method.custom-cybersource._active div.payment-method-content div div.payment-method-billing-address div.checkout-billing-address fieldset.fieldset div.billing-address-form form div#billing-new-address-form.fieldset.address fieldset.field.street.admin__control-fields.required div.control div.field._required div.control")).click();
        yield delay(12000);
        protractor_1.element(protractor_1.by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[3]/ol/li[5]/div/form/fieldset/div[1]/div/div[2]/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/fieldset/div/div[1]/div/input")).sendKeys("Chicago illonois");
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='billing-new-address-form']/div[4]/div")).click();
        protractor_1.element(protractor_1.by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[3]/ol/li[5]/div/form/fieldset/div[1]/div/div[2]/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[4]/div/input")).sendKeys("Chicago");
        yield delay(1000);
        protractor_1.element(protractor_1.by.css("html/body/main/div/main/div[3]/div/div[3]/div[3]/ol/li[5]/div/form/fieldset/div[1]/div/div[2]/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[5]/div/select")).click();
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[3]/ol/li[5]/div/form/fieldset/div[1]/div/div[2]/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[5]/div/select/option[13]")).click();
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[3]/ol/li[5]/div/form/fieldset/div[1]/div/div[2]/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[7]/div/input")).sendKeys("60014");
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='billing-new-address-form']/div[9]/div/button[1]")).click();
        yield delay(5000);
    }));
    Then('getbronze order conformation is displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[2]/div[4]/div[1]/div[1]/div[2]/div[1]/img[1]"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[2]/div[1]"))).to.eventually.exist;
        yield delay(2000);
    }));
    Then('getsilver order conformation is displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[2]/div[4]/div[1]/div[1]/div[2]/div[1]/img[1]"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[2]/div[4]/div[3]/div[3]/button"))).to.eventually.exist;
        yield delay(2000);
    }));
    Then('getgold order conformation is displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[2]/div[4]/div[1]/div[1]/div[2]/div[1]/img[1]"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@class='counter amount']"))).to.eventually.exist;
        yield delay(2000);
    }));
    Then('getplatinum order conformation is displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[2]/div[4]/div[1]/div[1]/div[2]/div[1]/img[1]"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@class='counter amount']"))).to.eventually.exist;
        yield delay(2000);
    }));
    Then('SoG order conformation is displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[2]/div[4]/div[1]/div[3]/button"))).to.eventually.exist;
        yield delay(2000);
    }));
    Then('BiaY order conformation is displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[2]/div[4]/div[1]/div[3]/button"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[2]/div[4]/div[1]/div[1]/div[2]/div[1]/img[1]"))).to.eventually.exist;
        yield delay(2000);
    }));
    Then('7daytrial conformation is displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[2]/div[4]/div[1]/div[3]/button"))).to.eventually.exist;
        yield delay(2000);
    }));
    Then('BiYa Verify the Checkout Page', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='checkout-payment-method-load']/div/div[2]/div[2]/div/div[7]/div/button")).click();
        yield delay(15000);
    }));
    Then('BiaY Billing information are displayed in incart', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.navigate().refresh();
        protractor_1.element(protractor_1.by.css("html body.checkout-index-index.page-layout-1column main.formed__container.logged__in div.page-wrapper main#maincontent.page-main div.columns div.column.main div#checkout.checkout-container div.opc-wrapper ol#checkoutSteps.opc li#payment.checkout-payment-method div#checkout-step-payment.step-content form#co-payment-form.form.payments fieldset.fieldset div#checkout-payment-method-load.opc-payment div.items.payment-methods div.payment-group div.payment-method.custom-cybersource._active div.payment-method-content div div.payment-method-billing-address div.checkout-billing-address fieldset.fieldset div.billing-address-form form div#billing-new-address-form.fieldset.address fieldset.field.street.admin__control-fields.required div.control div.field._required div.control")).click();
        yield delay(12000);
        protractor_1.element(protractor_1.by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[3]/ol/li[5]/div/form/fieldset/div[1]/div/div[2]/div[2]/div/div[1]/div/fieldset/div[2]/form/div/fieldset/div/div[1]/div/input")).sendKeys("Chicago illonois");
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='billing-new-address-form']/div[4]/div")).click();
        protractor_1.element(protractor_1.by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[3]/ol/li[5]/div/form/fieldset/div[1]/div/div[2]/div[2]/div/div[1]/div/fieldset/div[2]/form/div/div[4]/div/input")).sendKeys("Chicago");
        yield delay(1000);
        protractor_1.element(protractor_1.by.css("html/body/main/div/main/div[3]/div/div[3]/div[3]/ol/li[5]/div/form/fieldset/div[1]/div/div[2]/div[2]/div/div[1]/div/fieldset/div[2]/form/div/div[5]/div/select")).click();
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[3]/ol/li[5]/div/form/fieldset/div[1]/div/div[2]/div[2]/div/div[1]/div/fieldset/div[2]/form/div/div[5]/div/select/option[13]")).click();
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[3]/ol/li[5]/div/form/fieldset/div[1]/div/div[2]/div[2]/div/div[1]/div/fieldset/div[2]/form/div/div[7]/div/input")).sendKeys("60014");
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='billing-new-address-form']/div[9]/div/button[1]")).click();
        yield delay(5000);
    }));
    Then('ICO-0040 7 days free trial page is displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div/div[1]/div/div/p[1]"))).to.eventually.exist;
        yield delay(2000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[6]/input[1]"))).to.eventually.exist;
        yield delay(2000);
    }));
    When('LPA-0010 click on login button', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(15000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='simple-dropdown']")).click();
        yield delay(10000);
    }));
    When('LPA-0010 Enter Parish Admin Name and password', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/span/div/login/form/input[1]")).sendKeys("yogirpatel@gmail.com");
        yield delay(3000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/span/div/login/form/input[2]")).sendKeys("zoro2017");
        yield delay(3000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/span/div/login/form/button")).click();
        yield delay(30000);
    }));
    When('I click on On Demand page', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(8000);
        protractor_1.element(protractor_1.by.xpath(".//a[@href='https://beta.formed.org/']")).click();
        yield delay(10000);
    }));
    Then('LPA-0020 Click on study Link and Verify with parish admin', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(10000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='header']/div/div[3]/div/main-nav/ul/li[1]/a")).click();
        yield delay(6000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='header']/div/div[3]/div/main-nav/ul/li[1]/segmented-menu-item/div/segmented-links/div/div[1]/a"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='header']/div/div[3]/div/main-nav/ul/li[1]/segmented-menu-item/div/segmented-links/div/div[2]/a"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='header']/div/div[3]/div/main-nav/ul/li[1]/segmented-menu-item/div/segmented-links/div/div[3]/a"))).to.eventually.exist;
        yield delay(3000);
    }));
    Then('LPA-0020 Click on watch Link and Verify with parish admin', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath("//a[@href='/watch']")).click();
        yield delay(6000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='header']/div/div[3]/div/main-nav/ul/li[2]/segmented-menu-item/div/segmented-links/div/div[1]/a"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='header']/div/div[3]/div/main-nav/ul/li[2]/segmented-menu-item/div/segmented-links/div/div[2]/a"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='header']/div/div[3]/div/main-nav/ul/li[2]/segmented-menu-item/div/segmented-links/div/div[3]/a"))).to.eventually.exist;
        yield delay(3000);
    }));
    Then('LPA-0020 Click on Listen Link and Verify with parish admin', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath("//a[@href='/listen']")).click();
        yield delay(6000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='header']/div/div[3]/div/main-nav/ul/li[3]/segmented-menu-item/div/segmented-links/div/div[1]/a"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='header']/div/div[3]/div/main-nav/ul/li[3]/segmented-menu-item/div/segmented-links/div/div[2]/a"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='header']/div/div[3]/div/main-nav/ul/li[3]/segmented-menu-item/div/segmented-links/div/div[3]/a"))).to.eventually.exist;
        yield delay(3000);
    }));
    Then('LPA-0020 Click on read Link and Verify with parish admin', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath("//a[@href='/read']")).click();
        yield delay(6000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='header']/div/div[3]/div/main-nav/ul/li[4]/segmented-menu-item/div/segmented-links/div/div[1]/a"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='header']/div/div[3]/div/main-nav/ul/li[4]/segmented-menu-item/div/segmented-links/div/div[2]/a"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='header']/div/div[3]/div/main-nav/ul/li[4]/segmented-menu-item/div/segmented-links/div/div[3]/a"))).to.eventually.exist;
        yield delay(3000);
    }));
    Then('LPA-0030 Click on sacramental-preparation and Verify with parish admin', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath("//a[@href='/study?linkId=study-sacramental-preparation']")).click();
        yield delay(10000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='study-sacramental-preparation']/div/div[1]/h1"))).to.eventually.exist;
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='scroll-top']/div/segmented-page/div/div[2]/segment/div[2]/div/stripe/div/div/div[2]/div/div/div/div/div[4]/div/a/img"))).to.eventually.exist;
        yield delay(3000);
    }));
    Then('LPA-0030 Click on Faith Information and Verify with parish admin', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath("//a[@href='/study?linkId=study-faith-formation']")).click();
        yield delay(10000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='study-faith-formation']/div/div[1]/h1"))).to.eventually.exist;
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='scroll-top']/div/segmented-page/div/div[1]/segment/div[2]/div/stripe/div/div/div[2]/div/div/div/div/div[5]/div/a/img"))).to.eventually.exist;
        yield delay(3000);
    }));
    Then('LPA-0030 Click on Bible studies and Verify with parish admin', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='header']/div/div[3]/div/main-nav/ul/li[1]/segmented-menu-item/div/segmented-links/div/div[3]/a")).click();
        yield delay(10000);
    }));
    Then('LPA-0030 Click on Current Topics and Verify with parish admin', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath("//a[@href='/study?linkId=study-current-topics']")).click();
        yield delay(10000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='study-current-topics']/div/div[1]/h1"))).to.eventually.exist;
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='scroll-top']/div/segmented-page/div/div[4]/segment/div[2]/div/stripe/div/div/div[2]/div/div/div/div/div[4]/div/a/img"))).to.eventually.exist;
        yield delay(3000);
    }));
    Then('LPA-0030 Click on Youth Disciple and Verify with parish admin', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath("//a[@href='/study?linkId=study-youth']")).click();
        yield delay(6000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='scroll-top']/div/segmented-page/div/div[5]/segment/div[2]/div/stripe/div/div/div[2]/div/div/div/div/div[1]/div/a/img"))).to.eventually.exist;
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='study-youth']/div/div[1]/h1"))).to.eventually.exist;
        yield delay(3000);
    }));
    Then('LPA-0030 Click on espanol and Verify with parish admin', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath("//a[@href='/study?linkId=study-espanol']")).click();
        yield delay(6000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='scroll-top']/div/segmented-page/div/div[6]/segment/div[2]/div/stripe/div/div/div/div/div[1]"))).to.eventually.exist;
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='scroll-top']/div/segmented-page/div/div[6]/segment/div[2]/div/stripe/div/div/div/div/div[1]"))).to.eventually.exist;
        yield delay(3000);
    }));
    When('STUDY link is hovered', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        protractor_1.browser.actions().mouseMove(protractor_1.element(protractor_1.by.xpath("//a[@href='/study']"))).perform();
        yield delay(5000);
    }));
    When('Watch link is hovered', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(10000);
        protractor_1.browser.actions().mouseMove(protractor_1.element(protractor_1.by.xpath("//a[@href='/watch']"))).perform();
        yield delay(5000);
    }));
    When('listen link is hovered', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(10000);
        protractor_1.browser.actions().mouseMove(protractor_1.element(protractor_1.by.xpath("//a[@href='/listen']"))).perform();
        yield delay(5000);
    }));
    When('Read link is hovered', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(10000);
        protractor_1.browser.actions().mouseMove(protractor_1.element(protractor_1.by.xpath("//a[@href='/read']"))).perform();
        yield delay(5000);
    }));
    Then('LPA-0040 Click on Watch Movies and Verify with parish admin', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(6000);
        protractor_1.element(protractor_1.by.xpath("//a[@href='/watch?linkId=watch-movies']")).click();
        yield delay(10000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='watch-movies']/div/div[1]/h1"))).to.eventually.exist;
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='scroll-top']/div/segmented-page/div/div[1]/segment/div[2]/div/stripe/div/div/div[2]/div/div/div/div/div[4]/div/a/img"))).to.eventually.exist;
        yield delay(3000);
    }));
    Then('LPA-0040 Click on Documentaries and Verify with parish admin', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath("//a[@href='/watch?linkId=watch-documentaries']")).click();
        yield delay(10000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='watch-documentaries']/div/div[1]/h1"))).to.eventually.exist;
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='scroll-top']/div/segmented-page/div/div[2]/segment/div[2]/div/stripe/div/div/div[2]/div/div/div/div/div[4]/div/a/img"))).to.eventually.exist;
        yield delay(3000);
    }));
    Then('click on Faith formation link and verify', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath("html/body/header/section[3]/section/div[1]/div[1]/div/ul/li[1]/div/a")).click();
        yield delay(15000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li/div/a/img"))).to.eventually.exist;
        yield delay(3000);
    }));
    Then('LPA-0040 Click on Apologetics and Verify with parish admin', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath("//a[@href='/watch?linkId=watch-apologetics']")).click();
        yield delay(6000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='watch-apologetics']/div/div[1]/h1"))).to.eventually.exist;
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='scroll-top']/div/segmented-page/div/div[3]/segment/div[2]/div/stripe/div/div/div[2]/div/div/div/div/div[4]/div/a/img"))).to.eventually.exist;
        yield delay(3000);
    }));
    Then('LPA-0040 Click on Watch Youth Disciple and Verify with parish admin', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath("//a[@href='/watch?linkId=watch-youth']")).click();
        yield delay(6000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='watch-youth']/div/div[1]/h1"))).to.eventually.exist;
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='scroll-top']/div/segmented-page/div/div[4]/segment/div[2]/div/stripe/div/div/div[2]/div/div/div/div/div[4]/div/a/img"))).to.eventually.exist;
        yield delay(3000);
    }));
    Then('LPA-0040 Click on watch espanol and Verify with parish admin', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath("//a[@href='/watch?linkId=watch-espanol']")).click();
        yield delay(6000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='watch-espanol']/div/div[1]/h1"))).to.eventually.exist;
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='scroll-top']/div/segmented-page/div/div[5]/segment/div[2]/div/stripe/div/div/div[2]/div/div/div/div/div[4]/div/a/img"))).to.eventually.exist;
        yield delay(3000);
    }));
    Then('LPA-0050 Click on Listen Talks and Verify with parish admin', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='header']/div/div[3]/div/main-nav/ul/li[3]/segmented-menu-item/div/segmented-links/div/div[2]/a")).click();
        yield delay(6000);
    }));
    Then('LPA-0050 Click on Listen audio drama and Verify with parish admin', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath("//a[@href='/listen?linkId=listen-dramas']")).click();
        yield delay(6000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='listen-dramas']/div/div[1]/h1"))).to.eventually.exist;
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='scroll-top']/div/div[2]/div/segmented-page/div/div[1]/segment/div[2]/div/stripe/div/div/div[2]/div/div/div/div/div[1]/div/a/img"))).to.eventually.exist;
        yield delay(3000);
    }));
    Then('click on Bible studies link and verify', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath("html/body/header/section[3]/section/div[1]/div[1]/div/ul/li[2]/div/a")).click();
        yield delay(10000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[1]/div/a/img"))).to.eventually.exist;
        yield delay(3000);
    }));
    Then('LPA-0050 Click on Listen audio books and Verify with parish admin', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath("//a[@href='/listen?linkId=listen-audiobooks']")).click();
        yield delay(6000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='listen-audiobooks']/div/div[1]/h1"))).to.eventually.exist;
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='scroll-top']/div/div[2]/div/segmented-page/div/div[3]/segment/div[2]/div/stripe/div/div/div[2]/div/div/div/div/div[6]/div/a/img"))).to.eventually.exist;
        yield delay(3000);
    }));
    Then('LPA-0050 Click on Listen espanol and Verify with parish admin', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath("//a[@href='/listen?linkId=listen-espanol']")).click();
        yield delay(6000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='listen-espanol']/div/div[1]/h1"))).to.eventually.exist;
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='scroll-top']/div/div[2]/div/segmented-page/div/div[4]/segment/div[2]/div/stripe/div/div/div[2]/div/div/div/div/div[6]/div/a/img"))).to.eventually.exist;
        yield delay(3000);
    }));
    Then('LPA-0060 Click on NonFiction and Verify with parish admin', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath("//a[@href='/read?linkId=read-nonfiction']")).click();
        yield delay(6000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='read-nonfiction']/div/div[1]/h1"))).to.eventually.exist;
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='scroll-top']/div/segmented-page/div/div[1]/segment/div[2]/div/stripe/div/div/div[2]/div/div/div/div/div[8]/div/a/img"))).to.eventually.exist;
        yield delay(3000);
    }));
    Then('LPA-0060 Click on Fiction and Verify with parish admin', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath("//a[@href='/read?linkId=read-fiction']")).click();
        yield delay(6000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='read-fiction']/div/div[1]/h1"))).to.eventually.exist;
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='scroll-top']/div/segmented-page/div/div[2]/segment/div[2]/div/stripe/div/div/div[2]/div/div/div/div/div[8]/div/a/img"))).to.eventually.exist;
        yield delay(3000);
    }));
    Then('LPA-0060 Click on Read Youth and Verify with parish admin', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='header']/div/div[3]/div/main-nav/ul/li[4]/segmented-menu-item/div/segmented-links/div/div[3]/a")).click();
        yield delay(6000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='scroll-top']/div/segmented-page/div/div[3]/segment/div[2]/div/stripe/div/div/div[2]/div/div/div/div/div[1]/div/a/img"))).to.eventually.exist;
        yield delay(6000);
    }));
    Then('LPA-0060 Click on Read espanol and Verify with parish admin', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath("//a[@href='/read?linkId=read-espanol']")).click();
        yield delay(6000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='read-espanol']/div/div[1]/h1"))).to.eventually.exist;
        yield delay(5000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='scroll-top']/div/segmented-page/div/div[4]/segment/div[2]/div/stripe/div/div/div[2]/div/div/div/div/div[1]/div/a/img"))).to.eventually.exist;
        yield delay(3000);
    }));
    Then('i click on account and logout for parish in market page', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='account-dropdown-button']")).click();
        yield delay(4000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='account-dropdown']/div/a[5]")).click();
        yield delay(5000);
    }));
    Then('i click on account and logout for parish', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='simple-dropdown']/span")).click();
        yield delay(4000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='header']/div/div[1]/div/div/ul/profile-menu/div/div/div/div/div[2]/a[3]")).click();
        yield delay(5000);
    }));
    When('LLP-0020 Click on Login button', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(20000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='simple-dropdown']")).click();
        yield delay(5000);
    }));
    Then('Show products link is displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("//a[@href='https://market2.beta.formed.org/shop-products.html']"))).to.eventually.exist;
        yield delay(8000);
    }));
    When('Show products link is hovered', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.actions().mouseMove(protractor_1.element(protractor_1.by.xpath("//a[@href='https://market2.beta.formed.org/shop-products.html']"))).perform();
        yield delay(10000);
    }));
    Then('click on feature film link and verify', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(10000);
        protractor_1.element(protractor_1.by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/watch/feature-films.html']")).click();
        yield delay(20000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[1]/div/a/img"))).to.eventually.exist;
        yield delay(2000);
    }));
    Then('click on Documentreies link and verify', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/watch/documentaries.html']")).click();
        yield delay(20000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='amasty-shopby-product-list']/h1"))).to.eventually.exist;
        yield delay(2000);
    }));
    Then('click on Talks link and verify', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath("//a[@href='https://market2.beta.formed.org/watch/talks.html']")).click();
        yield delay(20000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[3]/div/a/img"))).to.eventually.exist;
        yield delay(2000);
    }));
    Then('click on Tv shows link and verify', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/watch/tv-shows.html']")).click();
        yield delay(20000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[3]/div/a/img"))).to.eventually.exist;
        yield delay(2000);
    }));
    Then('click on Espamol in watch link and verify', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/watch/spanish.html']")).click();
        yield delay(20000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[3]/div/a/img"))).to.eventually.exist;
        yield delay(2000);
    }));
    Then('Click on talks Link and Verify', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/listen/talks.html']")).click();
        yield delay(20000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[1]/div/a/img"))).to.eventually.exist;
        yield delay(2000);
    }));
    Then('Click on audio dramas Link and Verify', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/listen/audio-dramas.html']")).click();
        yield delay(20000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[1]/div/a"))).to.eventually.exist;
        yield delay(2000);
    }));
    Then('Click on audiobooks Link and Verify', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/listen/audiobooks.html']")).click();
        yield delay(20000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='amasty-shopby-product-list']/h1"))).to.eventually.exist;
        yield delay(2000);
    }));
    Then('Click on espanol Listen Link and Verify', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/listen/espa-ol.html']")).click();
        yield delay(20000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[1]/div/a/img"))).to.eventually.exist;
        yield delay(2000);
    }));
    Then('Click on nonfiction link and verify', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/read/nonfiction.html']")).click();
        yield delay(20000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[2]/div/a/img"))).to.eventually.exist;
        yield delay(2000);
    }));
    Then('Click on fiction link and verify', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/read/fiction.html']")).click();
        yield delay(20000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[2]/div/a/img"))).to.eventually.exist;
        yield delay(2000);
    }));
    Then('Click on youth link and verify', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/read/youth.html']")).click();
        yield delay(20000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[1]/div/a/img"))).to.eventually.exist;
        yield delay(2000);
    }));
    Then('Click on espanol link and verify', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/read/espa-ol.html']")).click();
        yield delay(20000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[4]/div/a/img"))).to.eventually.exist;
        yield delay(2000);
    }));
    Then('Click on watch Link and Verify', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='narrow-by-list']/dd[1]/ol/form/li[3]/a/label/div")).click();
        yield delay(20000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[1]/div/a/img"))).to.eventually.exist;
        yield delay(2000);
    }));
    Then('Click on Listen Link and Verify', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='narrow-by-list']/dd[1]/ol/form/li[4]/a/label/div")).click();
        yield delay(10000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[4]/div/a/img"))).to.eventually.exist;
        yield delay(2000);
    }));
    Then('Click on read Link and Verify', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='narrow-by-list']/dd[1]/ol/form/li[5]/a/label/div")).click();
        yield delay(10000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[4]/div/a/img"))).to.eventually.exist;
        yield delay(2000);
    }));
    When('navigate to formed page', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@class='icon-formed']")).click();
        yield delay(10000);
    }));
    Then('Enter Name and password for individual user', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath("//input[@name='email']")).sendKeys("rajeshnakka.cmc@gmail.com");
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath("//input[@name='password']")).sendKeys("123456");
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath("//button[@class='btn btn-large btn-primary login-submit']")).click();
        yield delay(5000);
    }));
    When('forgot password is displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(1000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@class='forgotPassword']"))).to.eventually.exist;
        //element(by.xpath("html/body/header/section[1]/div[6]/ul/li/div/div/div/div/div/div/div/div/div[2]/div/form/div/div[3]/a")).isDisplayed();
    }));
    Then('i Enter Name and password for individual user', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='gigya-login-screen']/form/div/div[1]/div[1]/input")).sendKeys("rajeshnakka.cmc@gmail.com");
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='gigya-login-screen']/form/div/div[1]/div[2]/input")).sendKeys("123456");
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='gigya-login-screen']/form/div/div[2]/div/input[1]")).click();
        yield delay(15000);
    }));
    Then('SPP-0050 Expand attributes', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='product__description--toggle']']")).click();
        yield delay(6000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='product__description']/div[2]"))).to.eventually.exist;
        yield delay(3000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='product__description--toggle']']")).click();
        yield delay(6000);
    }));
    Then('SPP-0050 collapse attributes', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='product__description']"))).to.eventually.exist;
        yield delay(3000);
    }));
    When('TS-0010 click on product in movies link', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='scroll-top']/div/segmented-page/div/div[1]/segment/div[3]/div/stripe/div/div/div/div/div/div/div/div[6]/div/a/img")).click();
        yield delay(12000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='movie-title']/h1"))).to.eventually.exist;
        yield delay(1000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='social-icons']/share/div/div/span[1]/a"))).to.eventually.exist;
        yield delay(1000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='social-icons']/share/div/div/span[2]/a"))).to.eventually.exist;
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='oo-responsive']/div/div[1]/a")).click();
        yield delay(25000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='social-icons']/share/div/div/span[1]/a")).click();
        yield delay(10000);
    }));
    Then('TS-0020 share model dialog page is displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='simple-dropdown']"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("html/body/div[5]/div/div/topic-share/div[1]/form/div[1]/div/div[2]"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("html/body/div[5]/div/div/topic-share/div[1]/form/div[2]/input"))).to.eventually.exist;
        yield delay(3000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/topic-share/div[1]/form/div[2]/input")).sendKeys("formed");
        yield delay(2000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='topicComment']")).sendKeys("share model dialog page is displayed");
        yield delay(15000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/topic-share/div[1]/form/input")).click();
        yield delay(15000);
    }));
    Then('TS-0030 share icons are displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("html/body/div[5]/div/div/topic-share/div[1]/div/ul/li[1]/a"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("html/body/div[5]/div/div/topic-share/div[1]/div/ul/li[2]/a"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("html/body/div[5]/div/div/topic-share/div[1]/div/ul/li[3]/a"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("html/body/div[5]/div/div/topic-share/div[1]/div/ul/li[4]/a"))).to.eventually.exist;
        yield delay(3000);
    }));
    Then('TS-0060 click on facbook', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/topic-share/div[1]/div/ul/li[1]/a")).click();
        yield delay(3000);
    }));
    Then('TS-0070 click on twitter', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/topic-share/div[1]/div/ul/li[2]/a")).click();
        yield delay(10000);
    }));
    Then('TS-0080 click on pinterest', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/topic-share/div[1]/div/ul/li[3]/a")).click();
        yield delay(10000);
    }));
    Then('TS-0090 click on gamil', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/topic-share/div[1]/div/ul/li[4]/a")).click();
        yield delay(10000);
    }));
    Then('TS-0100 close the share icons', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/topic-share/div[1]/div/i")).click();
        yield delay(10000);
    }));
    Then('TS-0040 click on audio image', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='scroll-top']/div/div[2]/div/segmented-page/div/div[2]/segment/div[2]/div/stripe/div/div/div[2]/div/div/div/div/div[6]/div/a/img")).click();
        yield delay(10000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='audio']/div[1]/div/div[1]/img"))).to.eventually.exist;
        yield delay(1000);
    }));
    Then('TS-0110 click on topicshares in on demand page', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='header']/div/div[1]/div/div/ul/profile-menu/div/div/div/div/div[2]/span[2]/a")).click();
        yield delay(10000);
    }));
    Then('TS-0110 Your Evangelization Impact are displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@class='subheader text-center']"))).to.eventually.exist;
        yield delay(1000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@class='text-link ng-binding']"))).to.eventually.exist;
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath("html/body/div[5]/div/div/div[2]/evangelization-panel/div/table/tbody/tr[5]/td[1]")).click();
        yield delay(10000);
    }));
    Then('TS-0050 click on play button', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='oo-responsive']/div/div[1]/a")).click();
        yield delay(40000);
    }));
    When('TS-0120 comments and rating are displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@class='ng-scope']"))).to.eventually.exist;
        yield delay(1000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='movie']/prorater/div/div/div[1]/modal-link/a/span"))).to.eventually.exist;
        yield delay(1000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@class='col-sm-6 commentary hidden-sm']"))).to.eventually.exist;
        yield delay(1000);
    }));
    Then('TS-0130 click on video product ondemand page without user', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(15000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='scroll-top']/div/div/trending-topics/div[2]/div/div/div/div/div[5]/a/div/div/div[2]/div")).click();
        yield delay(5000);
    }));
    When('PPF-0010 i move to physical products', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        protractor_1.browser.actions().mouseMove(protractor_1.element(protractor_1.by.xpath("//a[@href='https://market2.beta.formed.org/physical-products.html']"))).perform();
        yield delay(5000);
    }));
    Then('PPF-0020 click on physical products', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/physical-products/dvds.html']"))).to.eventually.exist;
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/physical-products/dvds.html']")).click();
        yield delay(10000);
    }));
    Then('PPF-0030 click on first product in the physical products', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[1]/div/a/img")).click();
        yield delay(10000);
    }));
    Then('PPF-0040 increase the product quantity 2 and click on Add to Cart button', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='addtocart-qty-plus']")).click();
        yield delay(5000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='product-addtocart-button']")).click();
        yield delay(10000);
    }));
    When('PPF-0050 click on remove option', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@class='action delete']")).click();
        yield delay(5000);
    }));
    Then('PPF-0050 Item Remove prompt is displayed and click on OK button', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@class='action-secondary action-dismiss']"))).to.eventually.exist;
        yield delay(3000);
        protractor_1.element(protractor_1.by.xpath(".//*[@class='action-primary action-accept']")).click();
        yield delay(10000);
    }));
    Then('PPF-0050 Cart empty message is displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='minicart-content-wrapper']/div/strong"))).to.eventually.exist;
        yield delay(3000);
    }));
    Then('PPF-0060 order information is displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='checkout-step-shipping']/button"))).to.eventually.exist;
        yield delay(3000);
        yield hooks_1.expect(protractor_1.browser.findElement(protractor_1.by.xpath(".//*[@id='checkout-review-table']/tbody/tr/td[2]/div/a[2]"))).to.eventually.exist;
        yield delay(3000);
    }));
    When('click on login button and enter username and password', () => __awaiter(this, void 0, void 0, function* () {
        yield delay(10000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='login-dropdown-button']")).click();
        yield delay(3000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='gigya-login-screen']/form/div/div[1]/div[1]/input")).sendKeys("saicharan@gmail.com");
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='gigya-login-screen']/form/div/div[1]/div[2]/input")).sendKeys("Honey@123");
        yield delay(1000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='gigya-login-screen']/form/div/div[2]/div/input[1]")).click();
        yield delay(10000);
    }));
    Then('PPF-0070 Select Shipping method', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.element(protractor_1.by.xpath(".//*[@id='checkout-shipping-method-load']/div[1]/label/span")).click();
        yield delay(10000);
        protractor_1.element(protractor_1.by.xpath(".//*[@id='checkout-step-shipping']/div[7]/div/button")).click();
        yield delay(10000);
    }));
});
//# sourceMappingURL=home.steps (1).js.map