"use strict";
var message = 'Hello there';
let greet = () => {
    console.log(` Have a Great Day`);
};
greet();
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.getInfo = () => {
            console.log(`Name : ${this.name}`);
            console.log(`price : ${this.price}`);
        };
    }
}
