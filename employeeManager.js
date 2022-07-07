"use strict";
exports.__esModule = true;
exports.EmployeeManager = void 0;
var EmployeeManager = /** @class */ (function () {
    function EmployeeManager() {
        var _this = this;
        this.manager = [];
        this.getManger = function () { return _this.manager; };
        this.setEmployee = function (employee) { return _this.manager.push(employee); };
        this.deleteSomeone = function (firstname, lastname) {
            for (var i = 0; i < _this.manager.length; i++) {
                if (_this.manager[i].firstname === firstname && _this.manager[i].lastname === lastname) {
                    _this.manager.splice(i, 1);
                }
            }
            return _this.manager;
        };
        this.editSomeOne = function (firstname, lastname, dateofbirth, address, position) {
            for (var i = 0; i < _this.manager.length; i++) {
                if (_this.manager[i].firstname === firstname && _this.manager[i].lastname === lastname) {
                    _this.manager[i].setDateOfBirth(dateofbirth);
                    _this.manager[i].setAddress(address);
                    _this.manager[i].setPosition(position);
                }
            }
        };
    }
    return EmployeeManager;
}());
exports.EmployeeManager = EmployeeManager;
