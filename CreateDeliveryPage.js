var helper = require('../utility/Helper');
const { browser } = require('protractor');
var CreateDeliveryPage = function () {
    this.createDeliveryButton = "//div[@class='header']//button[1]";
    this.clickcreateDeliveryButton = function () {
        helper.waitForVisibilityCondition(this.createDeliveryButton, helper.LOCATE_BY.XPATH);
        helper.clickElement(this.createDeliveryButton, helper.LOCATE_BY.XPATH);
    };

    this.departmentDropdown = "//ng-select[@class='ng-select ng-select-single ng-pristine ng-invalid ng-select-bottom ng-touched ng-select-opened']//div[@class='ng-select-container ng-has-value']";
    
    this.pickupLocationDropDown = "//ng-select[@formcontrolname='storeExternalId']";
    this.pickupLocationLocator = function (pickupLocationName) {
        selectpickupLocation = '//span[contains(text(),"'+pickupLocationName+'")]';
        return selectpickupLocation;
    };
    this.selectpickupLocationDropDown = function (pickupLocationName) {
        helper.waitForVisibilityCondition(this.pickupLocationDropDown, helper.LOCATE_BY.XPATH);
        helper.clickElement(this.pickupLocationDropDown, helper.LOCATE_BY.XPATH);
        helper.waitForVisibilityCondition(this.pickupLocationLocator(pickupLocationName), helper.LOCATE_BY.XPATH);
        helper.clickElement(this.pickupLocationLocator(pickupLocationName), helper.LOCATE_BY.XPATH);
        //helper.wait(10000);
    };

    this.departmentDropdown = "//ng-select[@formcontrolname='department']";
    this.departmentLocator = function (departmentName) {
        selectDepartment = '//ng-select[@formcontrolname="department"]//span[contains(text(),"'+departmentName+'")]';
        return selectDepartment;
    };
    
    this.selectDepartmentDropdown = function (departmentName) {
        helper.waitForVisibilityCondition(this.departmentDropdown, helper.LOCATE_BY.XPATH);
        helper.clickElement(this.departmentDropdown, helper.LOCATE_BY.XPATH);
        helper.waitForVisibilityCondition(this.departmentLocator(departmentName), helper.LOCATE_BY.XPATH);
        helper.clickElement(this.departmentLocator(departmentName), helper.LOCATE_BY.XPATH);
    };

    this.checkboxPickupTime = "//label[@for='checkboxPickDropWindow']";
    this.clickCheckboxPickupTime = function () {
        helper.scrollToElementandClick(this.checkboxPickupTime, helper.LOCATE_BY.XPATH);
    };

    this.checkboxDropOffTime = "//label[@for='checkboxASAP']";
    this.clickCheckboxDropOffTime = function () {
        helper.scrollToElementandClick(this.checkboxDropOffTime, helper.LOCATE_BY.XPATH);
    };

    this.contactNameTextBox='//input[@name="deliveryContact"]';
    this.enterContactName = function (contactName) {
        helper.waitForVisibilityCondition(this.contactNameTextBox, helper.LOCATE_BY.XPATH);
        helper.clickElement(this.contactNameTextBox, helper.LOCATE_BY.XPATH);
        helper.enterInputInTextBox(this.contactNameTextBox, helper.LOCATE_BY.XPATH, contactName);
    };

    this.phoneNumberTextbox = "//input[@id='contactPhone1']";
    this.enterphoneNumber = function (phoneNumber){
        helper.waitForVisibilityCondition(this.phoneNumberTextbox, helper.LOCATE_BY.XPATH);
        helper.clickElement(this.phoneNumberTextbox, helper.LOCATE_BY.XPATH);
        helper.enterInputInTextBox(this.phoneNumberTextbox, helper.LOCATE_BY.XPATH, phoneNumber);
    };

    this.streetTextbox = "//input[@name='deliveryStreet']";
    this.enterStreet = function (street) {
        helper.waitForVisibilityCondition(this.streetTextbox, helper.LOCATE_BY.XPATH);
        helper.clickElement(this.streetTextbox, helper.LOCATE_BY.XPATH);
        helper.enterInputInTextBox(this.streetTextbox, helper.LOCATE_BY.XPATH, street);
        helper.wait(2000);
        helper.ActionKeys();
    };

    /* this.countryDropdown = "//ng-select[@formcontrolname='country']";
    this.countryLocator = function (countryName) {
        selectCountry = '//ng-select[@formcontrolname="country"]//span[contains(text(),"'+countryName+'")]';
        return selectCountry;
    };
    
    this.selectCountryDropdown = function (countryName) {
        helper.waitForVisibilityCondition(this.countryDropdown, helper.LOCATE_BY.XPATH);
        helper.clickElement(this.countryDropdown, helper.LOCATE_BY.XPATH);
        helper.waitForVisibilityCondition(this.countryLocator(countryName), helper.LOCATE_BY.XPATH);
        helper.clickElement(this.countryLocator(countryName), helper.LOCATE_BY.XPATH);
    };

    this.countryDropdown = "//ng-select[@formcontrolname='country']";
    this.countryLocator = function (countryName) {
        selectCountry = '//ng-select[@formcontrolname="country"]//span[contains(text(),"'+countryName+'")]';
        return selectCountry;
    };
    this.selectCountryDropdown = function (countryName) {
        helper.waitForVisibilityCondition(this.countryDropdown, helper.LOCATE_BY.XPATH);
        helper.clickElement(this.countryDropdown, helper.LOCATE_BY.XPATH);
        helper.waitForVisibilityCondition(this.countryLocator(countryName), helper.LOCATE_BY.XPATH);
        helper.clickElement(this.countryLocator(countryName), helper.LOCATE_BY.XPATH);
    };

    this.stateDropdown = "//ng-select[@formcontrolname='state']";
    this.stateLocator = function (stateName) {
        selectState = '//ng-select[@formcontrolname="state"]//span[contains(text(),"'+stateName+'")]';
        return selectState;
    };
    this.selectStateDropdown = function (stateName) {
        helper.waitForVisibilityCondition(this.stateDropdown, helper.LOCATE_BY.XPATH);
        helper.clickElement(this.stateDropdown, helper.LOCATE_BY.XPATH);
        helper.waitForVisibilityCondition(this.stateLocator(stateName), helper.LOCATE_BY.XPATH);
        helper.clickElement(this.stateLocator(stateName), helper.LOCATE_BY.XPATH);
    };

    this.cityTextbox = "//input[@name='deliveryCity']";
    this.enterCity = function (cityName){
        helper.waitForVisibilityCondition(this.cityTextbox, helper.LOCATE_BY.XPATH);
        helper.clickElement(this.cityTextbox, helper.LOCATE_BY.XPATH);
        helper.enterInputInTextBox(this.cityTextbox, helper.LOCATE_BY.XPATH, cityName);
    };

    this.zipCodeTextbox = "//input[@name='zipCode']";
    this.enterZipCode = function (zipCode){
        helper.waitForVisibilityCondition(this.zipCodeTextbox, helper.LOCATE_BY.XPATH);
        helper.clickElement(this.zipCodeTextbox, helper.LOCATE_BY.XPATH);
        helper.enterInputInTextBox(this.zipCodeTextbox, helper.LOCATE_BY.XPATH, zipCode);
    };*/

    this.orderValueTextbox = "//input[@formcontrolname='orderValue']";
    this.enterOrderValue = function (orderValue){
        helper.waitForVisibilityCondition(this.orderValueTextbox, helper.LOCATE_BY.XPATH);
        helper.clickElement(this.orderValueTextbox, helper.LOCATE_BY.XPATH);
        helper.enterInputInTextBox(this.orderValueTextbox, helper.LOCATE_BY.XPATH, orderValue);
    };

    this.tipValueTextbox = "//input[@formcontrolname='tip']";
    this.entertipValue = function (tipValue){
        helper.waitForVisibilityCondition(this.tipValueTextbox, helper.LOCATE_BY.XPATH);
        helper.clickElement(this.tipValueTextbox, helper.LOCATE_BY.XPATH);
        helper.enterInputInTextBox(this.tipValueTextbox, helper.LOCATE_BY.XPATH, tipValue);
    };

    this.packageLengthTextbox = "//input[@formcontrolname='length']";
    this.enterPackageLength = function (packageLength){
        helper.waitForVisibilityCondition(this.packageLengthTextbox, helper.LOCATE_BY.XPATH);
        helper.clickElement(this.packageLengthTextbox, helper.LOCATE_BY.XPATH);
        helper.enterInputInTextBox(this.packageLengthTextbox, helper.LOCATE_BY.XPATH, packageLength);
    };
    this.packageWidthTextbox = "//input[@formcontrolname='width']";
    this.enterPackageWidth = function (packageWidth){
        helper.waitForVisibilityCondition(this.packageWidthTextbox, helper.LOCATE_BY.XPATH);
        helper.clickElement(this.packageWidthTextbox, helper.LOCATE_BY.XPATH);
        helper.enterInputInTextBox(this.packageWidthTextbox, helper.LOCATE_BY.XPATH, packageWidth);
    };

    this.packageHeightTextbox = "//input[@formcontrolname='height']";
    this.enterPackageHeight = function (packageHeight){
        helper.waitForVisibilityCondition(this.packageHeightTextbox, helper.LOCATE_BY.XPATH);
        helper.clickElement(this.packageHeightTextbox, helper.LOCATE_BY.XPATH);
        helper.enterInputInTextBox(this.packageHeightTextbox, helper.LOCATE_BY.XPATH, packageHeight);
    };
    this.packageWeightTextbox = "//input[@formcontrolname='weight']";
    this.enterPackageWeight = function (packageWeight){
        helper.waitForVisibilityCondition(this.packageWeightTextbox, helper.LOCATE_BY.XPATH);
        helper.clickElement(this.packageWeightTextbox, helper.LOCATE_BY.XPATH);
        helper.enterInputInTextBox(this.packageWeightTextbox, helper.LOCATE_BY.XPATH, packageWeight);
    };

    this.checkboxLabel = "//label[@for='labelcheckbox1']";
    this.clickSingleLabel = function () {
        helper.scrollToElementandClick(this.checkboxLabel, helper.LOCATE_BY.XPATH);
    };

    this.placeOrderButton='//app-deliveries-create-order/div/div[2]/form/div[2]/span/div[3]';
    this.clickPlaceOrder = function () {
        helper.waitForVisibilityCondition(this.placeOrderButton, helper.LOCATE_BY.XPATH);
        helper.clickElement(this.placeOrderButton, helper.LOCATE_BY.XPATH);
    };

    

}
module.exports = new CreateDeliveryPage();