var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(name, city) {
        var _this = this;
        this.name = name;
        this.city = city;
        this.printDetails = function () {
            console.log("Name : ".concat(_this.name));
            console.log("City : ".concat(_this.city));
        };
    }
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, city, salary) {
        var _this = _super.call(this, name, city) || this;
        _this.name = name;
        _this.city = city;
        _this.salary = salary;
        _this.calcBonus = function (amount) {
            console.log("".concat(_this.salary + amount));
        };
        return _this;
    }
    Manager.prototype.show = function (msg) {
        console.log("Hello ", msg);
    };
    return Manager;
}(Employee));
var emp = new Employee('Ash', 'Banglore');
emp.printDetails();
var manager = new Manager('den', 'karnataka', 150000);
manager.printDetails();
manager.show('Ash');
manager.calcBonus(5000);
