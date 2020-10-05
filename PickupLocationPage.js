var helper = require('../utility/Helper');
var PickupLocationPage = function () {
    this.businessModule = "//*[@id='sidebarCollapse']/ul[1]/li[1]/a";
    this.pickupLocation = "//div[@id='mod0']//li[3]";
    this.clickBusinessModule = function () {
        helper.waitForVisibilityCondition(this.businessModule, helper.LOCATE_BY.XPATH);
        helper.clickElement(this.businessModule, helper.LOCATE_BY.XPATH);
    };
    this.clickPickupLocation = function () {
        helper.waitForVisibilityCondition(this.pickupLocation, helper.LOCATE_BY.XPATH);
        helper.clickElement(this.pickupLocation, helper.LOCATE_BY.XPATH);
    };
}
module.exports = new PickupLocationPage();