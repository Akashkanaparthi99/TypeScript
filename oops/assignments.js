/**
 * abstract
interface
 overloading
project using typescript ,
modules,
namespaces,
generics ,
decorators

 */
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
/**
 * // Vehicle -name,brand, price  print()
 * // Bike - name,brand, price,mileage  showMileage(engineCC:string)
 * // Car - name, brand, price, fuelType -> showAccessories(...accessories:string[])
 */
var Vehicle = /** @class */ (function () {
    function Vehicle(name, brand, price) {
        var _this = this;
        this.name = name;
        this.brand = brand;
        this.price = price;
        this.print = function () {
            console.log("Name: ".concat(_this.name));
            console.log("Brand: ".concat(_this.brand));
            console.log("Price: ".concat(_this.price));
        };
    }
    return Vehicle;
}());
var Bike = /** @class */ (function (_super) {
    __extends(Bike, _super);
    function Bike(name, brand, price, mileage) {
        var _this = _super.call(this, name, brand, price) || this;
        _this.name = name;
        _this.brand = brand;
        _this.price = price;
        _this.mileage = mileage;
        _this.showMileage = function (engineCC) {
            if (engineCC == '150cc') {
                console.log("Mileage : 45kmpl");
            }
            else if (engineCC == '300cc') {
                console.log("Mileage : 30kmpl");
            }
            else if (engineCC == '600cc') {
                console.log("Mileage : 20kmpl");
            }
        };
        return _this;
    }
    return Bike;
}(Vehicle));
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(name, brand, price, fuel) {
        var _this = _super.call(this, name, brand, price) || this;
        _this.name = name;
        _this.brand = brand;
        _this.price = price;
        _this.fuel = fuel;
        _this.showAccessories = function () {
            var accessories = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                accessories[_i] = arguments[_i];
            }
            console.log(" Accessories - ");
            accessories.forEach(function (element) {
                console.log(element);
            });
        };
        return _this;
    }
    return Car;
}(Vehicle));
var bike = new Bike("220f", "Pulsar", 120000, "45kmpl");
bike.print();
bike.showMileage("150cc");
var car = new Car("Harrier", "TATA", 2800000, "Diesel");
car.print();
car.showAccessories("Alloy wheels", "autodrive", "Bose Sound system");
