var helper = require('../utility/Helper');
var GetEstimatePage = function () {
    this.getEstimatePageLocator = "//app-deliveries-create-order/div/div[2]/form/div[2]/span/div[2]/button";
    this.clickGetEstimateButton = function () {
        helper.waitForVisibilityCondition(this.getEstimatePageLocator, helper.LOCATE_BY.XPATH);
        helper.clickElement(this.getEstimatePageLocator, helper.LOCATE_BY.XPATH);
    };

    this.getEstimatePageBackButton = "//app-deliveries-create-order/div/div[2]/form/div[2]/span/div[1]/button";
    this.clickGetEstimateBackButton = function () {
        helper.waitForVisibilityCondition(this.getEstimatePageBackButton, helper.LOCATE_BY.XPATH);
        helper.clickElement(this.getEstimatePageBackButton, helper.LOCATE_BY.XPATH);
    };
}

module.exports = new GetEstimatePage();