"use strict";
exports.__esModule = true;
exports.Product = exports.greet = exports.message = void 0;
exports.message = 'Hello there';
var greet = function () {
    console.log(" Have a Great Day");
};
exports.greet = greet;
(0, exports.greet)();
var Product = /** @class */ (function () {
    function Product(name, price) {
        var _this = this;
        this.name = name;
        this.price = price;
        this.getInfo = function () {
            console.log("Name : ".concat(_this.name));
            console.log("price : ".concat(_this.price));
        };
    }
    return Product;
}());
exports.Product = Product;
