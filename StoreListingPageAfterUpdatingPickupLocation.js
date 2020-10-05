var helper = require('../utility/Helper');
var StoreListingPageAfterUpdatingPickupLocation = function () {
    this.updateButton = "//*[@id='page-wrapper']/ng-component/div/div[2]/form/div[9]/div/ds-button[2]/button";
    this.clickupdateButton = function () {
        helper.waitForVisibilityCondition(this.updateButton, helper.LOCATE_BY.XPATH);
        helper.clickElement(this.updateButton, helper.LOCATE_BY.XPATH);
    };
}
module.exports = new StoreListingPageAfterUpdatingPickupLocation();