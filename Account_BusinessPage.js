var helper = require('../utility/Helper');
var Account_BusinessPage = function () {
    this.accountProfileDSLogo = "//div/img";
    this.onHoverBusinessProfile="//a[contains(text(),'Businesses')]";
    this.clickBussinessOption = function () {
        helper.mouseHoverToElement(this.accountProfileDSLogo, helper.LOCATE_BY.XPATH);
        helper.waitForVisibilityCondition(this.onHoverBusinessProfile, helper.LOCATE_BY.XPATH);
        helper.clickElement(this.onHoverBusinessProfile, helper.LOCATE_BY.XPATH);
    };

    this.editBusinessButton = "//ng-component/div/div[2]/div/div/div/div/table/tbody[1]/tr/td[8]/div/a";
    this.clickOnEditButton="//ng-component/div/div[2]/div/div/div/div/table/tbody[1]/tr/td[8]/div/div";
    this.clickEditButton = function () {
        helper.waitForVisibilityCondition(this.editBusinessButton, helper.LOCATE_BY.XPATH);
        helper.clickElement(this.editBusinessButton, helper.LOCATE_BY.XPATH);
        helper.waitForVisibilityCondition(this.clickOnEditButton, helper.LOCATE_BY.XPATH);
        helper.clickElement(this.clickOnEditButton, helper.LOCATE_BY.XPATH);
    };

    
}
module.exports = new Account_BusinessPage();