"use strict";
// import { Calculator } from "./opdemo1";
/// <reference path = "./opdemo1.ts"/>
var Operation1;
// import { Calculator } from "./opdemo1";
/// <reference path = "./opdemo1.ts"/>
(function (Operation1) {
    class Adder {
        constructor() {
            this.calculate = (x, y) => {
                return `Addition - ${x + y}`;
            };
        }
    }
    Operation1.Adder = Adder;
    class Difference {
        constructor() {
            this.calculate = (x, y) => {
                return `Difference - ${x - y}`;
            };
        }
    }
    Operation1.Difference = Difference;
})(Operation1 || (Operation1 = {}));
// refer the namespace
/// <reference path = "./opdemo1.ts"/>
// import { Calculator } from "./opdemo1";
var Operation1;
// refer the namespace
/// <reference path = "./opdemo1.ts"/>
// import { Calculator } from "./opdemo1";
(function (Operation1) {
    class Multiplier {
        constructor() {
            this.calculate = (x, y) => {
                return `Multiplicaton = ${x * y}`;
            };
            this.square = (x) => {
                console.log(`Power of 2 `, Math.pow(x, 2));
            };
        }
    }
    Operation1.Multiplier = Multiplier;
})(Operation1 || (Operation1 = {}));
// import { Calculator } from "./opdemo1";
/// <reference path="./opdemo1.ts" />
/// <reference path="./op2demo.ts" />
/// <reference path="./op3demo.ts" />
const performOperation = function (calc, x, y) {
    calc.calculate(x, y);
};
let adder = new Operation1.Adder();
console.log(adder.calculate(25, 51));
let diff = new Operation1.Difference();
console.log(diff.calculate(25, 51));
let multi = new Operation1.Multiplier();
console.log(multi.calculate(25, 51));
let multi1 = new Operation1.Multiplier();
console.log(multi1.calculate(25, 51));
multi1.square(25);
