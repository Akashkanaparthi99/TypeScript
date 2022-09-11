export var message = 'Hello there';
export let greet = ():void=>{
    console.log(` Have a Great Day`);
}
greet();

export class Product {
    constructor(public name:string, public price:number) {}

    getInfo = ()=>{
        console.log(`Name : ${this.name}`);
        console.log(`price : ${this.price}`);
    }
}

