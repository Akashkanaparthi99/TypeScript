/**
 *  vehicle - name,brand,price
    getBrand -> return brand
    Accessories -> accName, price, 
    getAcc -> print only the acc name

 */

class Vehicle{
    constructor(public model:string, public brand:string, public price:number) {}

    getBrand=():string=>{
        return this.brand;
    }
}

class Accessories{
    constructor(public accType:string, public price:number) {}

    getAcc = ()=> console.log(`Accessory Name : ${this.accType}`);
}
/**
 * extends vehicle, accessories
 * all the methods of the calss becomes abstract
 * getbrand, getAcc , getMileage
 */
interface VDetails extends Vehicle,Accessories{
    getMileage:()=>void;
}

class Car implements VDetails{
    constructor(public model:string, public brand:string, public price:number , public accType:string , public type:string) {}
    
    getMileage = ():void =>console.log(`mileage `);
    getBrand = () : string => `Brand : ${this.brand}`;
    getAcc = ():void => console.log(`Accessories : ${this.accType}`);

}

let car:VDetails = new Car('Civic','Honda',3000000,'Music','Entertainment');
car.getAcc();
car.getMileage();
console.log(car.getBrand());

let vcar:Vehicle = new Car('Civic','Honda',3000000,'Alloy Wheels','Entertainment');
console.log(vcar.getBrand());

let acar:Accessories = new Car('Civic','Honda',3000000,'Rear AC','Luxury');
acar.getAcc();
