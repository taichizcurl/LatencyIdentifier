var helper = require('../utility/Helper');
var BusinessProfileUpdatePage = function () {
    this.businessProfileupdateButton = "//ng-component/div/div[2]/div[3]/app-element-card-footer/div/app-element-button[2]/button";
    this.clickBussinessProfileUpdateButton = function () {
        helper.waitForVisibilityCondition(this.businessProfileupdateButton, helper.LOCATE_BY.XPATH);
        helper.clickElement(this.businessProfileupdateButton, helper.LOCATE_BY.XPATH);
    };
}
module.exports = new BusinessProfileUpdatePage();