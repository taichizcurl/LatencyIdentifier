var helper = require('../utility/Helper');
var LoginPage = function () {
    this.emailTextBox = "//input[@placeholder='Email']";
    this.passwordTextBox = "//input[@placeholder='Password']";
    this.loginButton = "button[type=submit]";
    this.enterEmailId = function (emailAddress) {
        helper.waitForVisibilityCondition(this.emailTextBox, helper.LOCATE_BY.XPATH);
        helper.clickElement(this.emailTextBox, helper.LOCATE_BY.XPATH);
        helper.enterInputInTextBox(this.emailTextBox, helper.LOCATE_BY.XPATH, emailAddress);
        //helper.wait(1000);
    };
    this.enterPassword = function (password) {
        helper.waitForVisibilityCondition(this.passwordTextBox, helper.LOCATE_BY.XPATH);
        helper.clickElement(this.passwordTextBox, helper.LOCATE_BY.XPATH);
        helper.enterInputInTextBox(this.passwordTextBox, helper.LOCATE_BY.XPATH, password);
        //helper.wait(1000);
    };
    this.clickLoginButton = function () {
        helper.waitForVisibilityCondition(this.loginButton, helper.LOCATE_BY.CSS);
        helper.clickElement(this.loginButton, helper.LOCATE_BY.CSS);
        //helper.wait(5000);
    };
}
module.exports = new LoginPage();