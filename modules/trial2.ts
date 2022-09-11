import { message,Product,greet } from "./trial";
console.log(message);
greet();
var product:Product = new Product('Pen',10);
product.getInfo();

import * as mymodule from './trial'
console.log(mymodule.message);
mymodule.greet();

var prod = new mymodule.Product('Marker',20);
prod.getInfo();

let greet = () =>{
    console.log(`Have a nice trip`);
}