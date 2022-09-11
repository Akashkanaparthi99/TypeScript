/**
 * vehicle - name,brand,price
getBrand -> return brand

Accessories -> accName, price,
 getAcc -> print only the acc name

 */
var Vehicle = /** @class */ (function () {
    function Vehicle(model, brand, price) {
        var _this = this;
        this.model = model;
        this.brand = brand;
        this.price = price;
        this.getBrand = function () {
            return _this.brand;
        };
    }
    return Vehicle;
}());
var Accessories = /** @class */ (function () {
    function Accessories(accType, price) {
        var _this = this;
        this.accType = accType;
        this.price = price;
        this.getAcc = function () { return console.log("Accessory Name : ".concat(_this.accType)); };
    }
    return Accessories;
}());
var Car = /** @class */ (function () {
    function Car(model, brand, price, accType, type) {
        var _this = this;
        this.model = model;
        this.brand = brand;
        this.price = price;
        this.accType = accType;
        this.type = type;
        this.getMileage = function () { return console.log("mileage "); };
        this.getBrand = function () { return "Brand : ".concat(_this.brand); };
        this.getAcc = function () { return console.log("Accessories : ".concat(_this.accType)); };
    }
    return Car;
}());
var car = new Car('Civic', 'Honda', 3000000, 'Music', 'Entertainment');
car.getAcc();
car.getMileage();
console.log(car.getBrand());
var vcar = new Car('Civic', 'Honda', 3000000, 'Alloy Wheels', 'Entertainment');
console.log(vcar.getBrand());
var acar = new Car('Civic', 'Honda', 3000000, 'Rear AC', 'Luxury');
acar.getAcc();
