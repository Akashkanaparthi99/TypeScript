//call showBill using gadgets object, appliances obj literal and a direct object also

import { Gadgets,appliances,ProductDetails,showBill } from "./product";
console.log(appliances);
let gadgets:Gadgets = new Gadgets("Washing machine",25000);
gadgets.cartDetails(1);

let product:ProductDetails = new Gadgets('Earphones',599);
showBill(product,5);