/**
 * 
interface Calculator - > sum(x,y), product(x,y)
class BasicCalc-->implements Calc

interfacs Scientific extends Calc -> square(x), Cube(x)
class SciCalc extedns Basic impl Scientific
 */

interface Calculator{

    sum(x:number,y:number):string;

    product(x:number,y:number):number;

}
class BasicCalc implements Calculator{
    
    sum(x: number, y: number): string {
        return `Sum is : ${x+y}`;
    }
    product(x: number, y: number): number {
        return x*y;
    }
    
}

interface Scientific extends Calculator{

    square(x:number):string;

    cube(x:number):string;
}

class SciCalc extends BasicCalc implements Scientific{

    square(x: number): string {
        return `Square of ${x*x}`;
    }
    cube(x: number): string {
        return `Cube = ${x*x*x}`;
    }
    
}


let cal:Calculator = new BasicCalc();
console.log(cal.sum(25,58));
console.log(cal.product(3,2));

let scal:Scientific = new SciCalc();
console.log(scal.cube(5));
console.log(scal.square(8));
console.log(scal.sum(25,96));
console.log(scal.product(85,36));
