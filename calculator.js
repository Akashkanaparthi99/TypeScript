/**
 *
interface Calculator - > sum(x,y), product(x,y)
class BasicCalc-->implements Calc

interfacs Scientific extends Calc -> square(x), Cube(x)
class SciCalc extedns Basic impl Scientific
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
var BasicCalc = /** @class */ (function () {
    function BasicCalc() {
    }
    BasicCalc.prototype.sum = function (x, y) {
        return "Sum is : ".concat(x + y);
    };
    BasicCalc.prototype.product = function (x, y) {
        return x * y;
    };
    return BasicCalc;
}());
var SciCalc = /** @class */ (function (_super) {
    __extends(SciCalc, _super);
    function SciCalc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SciCalc.prototype.square = function (x) {
        return "Square of ".concat(x * x);
    };
    SciCalc.prototype.cube = function (x) {
        return "Cube = ".concat(x * x * x);
    };
    return SciCalc;
}(BasicCalc));
var cal = new BasicCalc();
console.log(cal.sum(25, 58));
console.log(cal.product(3, 2));
var scal = new SciCalc();
console.log(scal.cube(5));
console.log(scal.square(8));
console.log(scal.sum(25, 96));
console.log(scal.product(85, 36));
