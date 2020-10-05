var helper = require('../utility/Helper');
var HomePage = function () {
    this.tenantDropdown = '//div[contains(@class,"account-dropdown")]';
    this.tenantLocator = function (tenantName) {
        selectTenant = '//div[contains(@class,"account-dropdown")]//span[text()="' + tenantName + '"]';
        return selectTenant;
    };
    this.businessDropdown = "//ng-select[@name='DSP']";
    this.businessLocator = function (businessName) {
        selectBusiness = '//ng-select[@name="DSP"]//span[contains(text(),"'+ businessName +'")]';
        return selectBusiness;
    };
    this.selectTenantDropdown = function (tenantName) {
        helper.waitForVisibilityCondition(this.tenantDropdown, helper.LOCATE_BY.XPATH);
        helper.clickElement(this.tenantDropdown, helper.LOCATE_BY.XPATH);
        helper.waitForVisibilityCondition(this.tenantLocator(tenantName), helper.LOCATE_BY.XPATH);
        helper.clickElement(this.tenantLocator(tenantName), helper.LOCATE_BY.XPATH);
        //helper.wait(10000);
    };
    this.selectBusinessDropdown = function (businessName) {
        helper.waitForVisibilityCondition(this.businessDropdown, helper.LOCATE_BY.XPATH);
        helper.clickElement(this.businessDropdown, helper.LOCATE_BY.XPATH);
        helper.waitForVisibilityCondition(this.businessLocator(businessName), helper.LOCATE_BY.XPATH);
        helper.clickElement(this.businessLocator(businessName), helper.LOCATE_BY.XPATH);
        //helper.wait(10000);
    };

    this.accountProfileDSLogo = "//div/img";
    this.onHoverBusinessProfile="//a[contains(text(),'Businesses')]";
    this.clickBussinessOption = function () {
        helper.mouseHoverToElement(this.accountProfileDSLogo, helper.LOCATE_BY.XPATH);
        helper.waitForVisibilityCondition(this.onHoverBusinessProfile, helper.LOCATE_BY.XPATH);
        helper.clickElement(this.onHoverBusinessProfile, helper.LOCATE_BY.XPATH);
    };

    
}
module.exports = new HomePage();