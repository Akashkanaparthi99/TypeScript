/**
 * abstract 
interface
 overloading 
project using typescript ,
modules,
namespaces,
generics ,
decorators

 */

/**
 * // Vehicle -name,brand, price  print()
 * // Bike - name,brand, price,mileage  showMileage(engineCC:string) 
 * // Car - name, brand, price, fuelType -> showAccessories(...accessories:string[])
 */

class Vehicle{
    constructor(
        public name:string,
        public brand:string,
        public price:number
    ){}
    print=()=>{
        console.log(`Name: ${this.name}`);
        console.log(`Brand: ${this.brand}`);
        console.log(`Price: ${this.price}`);
    }
}
class Bike extends Vehicle{
    constructor(
        public name:string,
        public brand:string,
        public price:number,
        public mileage:string
    )
    {
     super(name,brand,price)
    }
    showMileage=(engineCC:string)=>{
        if (engineCC == '150cc') {
            console.log(`Mileage : 45kmpl`);
        }
        else if (engineCC == '300cc') {
            console.log(`Mileage : 30kmpl`);
        }
        else if (engineCC == '600cc') {
            console.log(`Mileage : 20kmpl`);
        }
    }
}


class Car extends Vehicle{
    constructor(
        public name:string,
        public brand:string,
        public price:number,
        public fuel:string
    )
    {
        super(name,brand,price)
    }

    
    showAccessories=(...accessories:string[])=>{
        console.log(` Accessories - `);
        accessories.forEach(element => {
            console.log(element);
        }); 
    }
}
 

const bike1:Bike=new Bike("220f","Pulsar",120000,"45kmpl");
bike1.print();
bike1.showMileage("150cc");

const car1:Car=new Car("Harrier","TATA",2800000,"Diesel");
car1.print();
car1.showAccessories("Alloy wheels","autodrive","Bose Sound system","FM Antena");