var helper = require('../utility/Helper');
var LabelPage = function () {
    this.labelModule = "//*[@id='sidebarCollapse']/ul[1]/li[12]/a";
    this.clickLabelModule = function () {
        helper.waitForVisibilityCondition(this.labelModule, helper.LOCATE_BY.XPATH);
        helper.clickElement(this.labelModule, helper.LOCATE_BY.XPATH);
        //helper.wait(5000);
    };
    this.updateLabelButton = "//app-labels-generate/div/div[2]/div/app-element-card-footer/div/app-element-button/button";
    this.clickUpdateLabelButton = function () {
        helper.waitForVisibilityCondition(this.updateLabelButton, helper.LOCATE_BY.XPATH);
        helper.clickElement(this.updateLabelButton, helper.LOCATE_BY.XPATH);
        //helper.wait(5000);
    };
}
module.exports = new LabelPage();