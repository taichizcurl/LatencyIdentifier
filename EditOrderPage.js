var helper = require('../utility/Helper');
var EditOrderPage = function () {
    this.editOrderLocator = "//app-deliveries-list/div/div[2]/div[2]/div/div/div[3]/table/tbody/tr[1]/td[8]/div/a";
    this.editOptionsLocator = '//app-deliveries-list/div/div[2]/div[2]/div/div/div[3]/table/tbody/tr[1]/td[8]/div/div/a[2]';
    this.selectEditOrderDropdown = function () {
        helper.waitForVisibilityCondition(this.editOrderLocator, helper.LOCATE_BY.XPATH);
        helper.clickElement(this.editOrderLocator, helper.LOCATE_BY.XPATH);
        helper.waitForVisibilityCondition(this.editOptionsLocator, helper.LOCATE_BY.XPATH);
        helper.clickElement(this.editOptionsLocator, helper.LOCATE_BY.XPATH);
    };
    
    this.editOrderPageBackButton = "//app-deliveries-create-order/div/div[2]/form/div[2]/span/div[1]/button";
    this.clickEditOrderPageBackButton = function () {
        helper.waitForVisibilityCondition(this.editOrderPageBackButton, helper.LOCATE_BY.XPATH);
        helper.clickElement(this.editOrderPageBackButton, helper.LOCATE_BY.XPATH);
    };

    this.fetchLogsButton = "//app-deliveries-create-order/div/div[2]/form/div[2]/span/div[4]/button";
    this.clickFetchLogsButton = function () {
        helper.waitForVisibilityCondition(this.fetchLogsButton, helper.LOCATE_BY.XPATH);
        helper.clickElement(this.fetchLogsButton, helper.LOCATE_BY.XPATH);
    };
}
module.exports = new EditOrderPage();