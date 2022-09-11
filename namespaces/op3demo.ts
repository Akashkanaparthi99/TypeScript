// refer the namespace
/// <reference path = "./opdemo1.ts"/>
// import { Calculator } from "./opdemo1";

namespace Operation1{
export class Multiplier implements Operations.Calculator{


    calculate = (x:number,y:number):string => {
        return `Multiplicaton = ${x*y}`
    }

    square = (x:number )=>{
        console.log(`Power of 2 `,Math.pow(x,2));
    }
    
}
}