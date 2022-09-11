// import { Calculator } from "./opdemo1";
/// <reference path="./opdemo1.ts" />
/// <reference path="./op2demo.ts" />
/// <reference path="./op3demo.ts" />

const performOperation = function(calc:Operations.Calculator,x:number,y:number){
    calc.calculate(x,y);
}

// let adder:Operations.Calculator = new Operation1.Adder();
// console.log(adder.calculate(25,51)); 

// let diff:Operations.Calculator = new Operation1.Difference();
// console.log(diff.calculate(25,51)); 

// let multi:Operations.Calculator = new Operation1.Multiplier();
// console.log(multi.calculate(25,51)); 


/**
 * we can write in two ways 
 */


let adder:Operations.Calculator = new Operation1.Adder();
console.log(adder.calculate(25,51)); 

adder = new Operation1.Difference();
console.log(adder.calculate(25,51)); 

adder = new Operation1.Multiplier();
console.log(adder.calculate(25,51));

let multi1:Operation1.Multiplier = new Operation1.Multiplier();
console.log(multi1.calculate(25,51)); 
multi1.square(25);