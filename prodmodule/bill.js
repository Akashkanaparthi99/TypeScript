"use strict";
//call showBill using gadgets object, appliances obj literal and a direct object also
exports.__esModule = true;
var product_1 = require("./product");
console.log(product_1.appliances);
var gadgets = new product_1.Gadgets("Washing machine", 25000);
gadgets.cartDetails(1);
var product = new product_1.Gadgets('Earphones', 599);
(0, product_1.showBill)(product, 5);
