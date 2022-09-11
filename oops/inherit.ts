class Employee {
    constructor(
        public name:string,
        public city:string
    ) {}

    printDetails = ()=>{
        console.log(`Name : ${this.name}`);
        console.log(`City : ${this.city}`);
    }

}

class Manager extends Employee{
    constructor( public name:string,
        public city:string,
        public salary:number
        ) {
            super(name,city)
        }

        calcBonus= (amount:number)=>{
            console.log(`${this.salary+amount}`);
        }

        show(msg:string){
            console.log(`Hello `,msg);
        }

}

const emp:Employee = new Employee('Ash','Banglore');
emp.printDetails();

const manager:Manager = new Manager('den','karnataka',150000);
manager.printDetails();
manager.show('Ash');
manager.calcBonus(5000);

const employ:Employee = new Manager('den','karnataka',150000);
employ.printDetails();

console.log(emp instanceof Employee);

/**
 * // Vehicle -name,brand, price  print()
 * // Bike - name,brand, price,mileage  showMileage(engineCC:string) 
 * // Car - name, brand, price, fuelType -> showAccessories(...accessories:string[])
 */