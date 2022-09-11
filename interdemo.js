var Square = /** @class */ (function () {
    function Square(x, y, z) {
        var _this = this;
        this.x = x;
        this.y = y;
        this.z = z;
        this.greet = function (name) { return "Welcome ".concat(name); };
        this.sayHello = function (name) { return "Hello ".concat(name); };
        this.calcArea = function () { return console.log("Area ".concat(_this.x * _this.x)); };
    }
    return Square;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(x, y, z) {
        var _this = this;
        this.x = x;
        this.y = y;
        this.z = z;
        this.greet = function (name) { return "Welcome ".concat(name); };
        this.sayHello = function (name) { return "Hello ".concat(name); };
        this.calcArea = function () { return console.log("Area ".concat(_this.x * _this.x)); };
        this.calcPerimeter = function () { return console.log("Perimeter ".concat(_this.x * _this.y)); };
    }
    return Rectangle;
}());
var rect = new Rectangle(25, 55);
console.log(rect.greet('Ak'));
console.log(rect.sayHello('Ash'));
rect.calcArea();
rect.calcPerimeter();
