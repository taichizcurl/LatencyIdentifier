var helper = require('../utility/Helper');
var DeliveriesPage = function () {
    this.deliveriesModule = "//i[@class='fe fe-shopping-bag']";
    this.clickDeliveriesModule = function () {
        helper.waitForVisibilityCondition(this.deliveriesModule, helper.LOCATE_BY.XPATH);
        helper.clickElement(this.deliveriesModule, helper.LOCATE_BY.XPATH);
        //helper.wait(5000);
    };
    this.orderID = "//app-deliveries-list/div/div[2]/div[2]/div/div/div[3]/table/tbody/tr[1]/td[3]/a";
    this.clickOnOrderId = function () {
        helper.waitForVisibilityCondition(this.orderID, helper.LOCATE_BY.XPATH);
        helper.clickElement(this.orderID, helper.LOCATE_BY.XPATH);
        //helper.wait(5000);
    };


}
module.exports = new DeliveriesPage();