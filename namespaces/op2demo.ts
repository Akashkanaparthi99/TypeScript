// import { Calculator } from "./opdemo1";

/// <reference path = "./opdemo1.ts"/>
namespace Operation1{
export class Adder implements Operations.Calculator{

    calculate = (x:number,y:number):string=> {
        return `Addition - ${x+y}`
    }
    
}
export class Difference implements Operations.Calculator{

    calculate = (x:number,y:number):string=> {
        return `Difference - ${x-y}`
    }
    
}
}