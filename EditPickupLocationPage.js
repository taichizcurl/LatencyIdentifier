var helper = require('../utility/Helper');
var EditPickupLocationPage = function () {
    this.editPickUpLocationButton = "//tbody[1]//tr[1]//td[9]//ds-button[1]//button[1]";
    this.clickPickUpLocationEditButton = function () {
        helper.waitForVisibilityCondition(this.editPickUpLocationButton, helper.LOCATE_BY.XPATH);
        helper.clickElement(this.editPickUpLocationButton, helper.LOCATE_BY.XPATH);
    };
}
module.exports = new EditPickupLocationPage();