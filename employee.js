"use strict";
exports.__esModule = true;
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(firstname, lastname, dateofbirth, address, position) {
        var _this = this;
        this.getFirstName = function () { return _this.firstname; };
        this.getLastName = function () { return _this.lastname; };
        this.setDateOfBirth = function (dateofbirth) { return _this.dateofbirth = dateofbirth; };
        this.setAddress = function (address) { return _this.address = address; };
        this.setPosition = function (position) { return _this.position = position; };
        this.firstname = firstname;
        this.lastname = lastname;
        this.dateofbirth = dateofbirth;
        this.address = address;
        this.position = position;
    }
    return Employee;
}());
exports.Employee = Employee;
