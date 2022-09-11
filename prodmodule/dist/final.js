/**
 * create an interfae ProductDetails with itemName and price
also abstract method cartDetails(quantity:number)

create a class Gadgets that implemets ProductDetails
override cartDetails ->
 print "Cart Details" itemname, totalcost = price*quantity

create another object literal as Appliances
This has similar properties like productDetails
Here also print all three

create a function showBill(p:ProductDetails,quantity){
  //call cartdetails of ProductDetails
 }
//call showBill using gadgets object, appliances obj literal and a direct object also

 */
System.register("product", [], function (exports_1, context_1) {
    "use strict";
    var Gadgets, appliances, showBill;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Gadgets = class Gadgets {
                constructor(itemName, price) {
                    this.itemName = itemName;
                    this.price = price;
                    this.cartDetails = (quantity) => {
                        console.log(`Item : ${this.itemName}`);
                        console.log(`Total cost : ${this.price * quantity}`);
                    };
                }
            };
            exports_1("Gadgets", Gadgets);
            exports_1("appliances", appliances = {
                itemName: 'Fan',
                price: 5822,
                cartDetails: function (quantity) {
                    console.log(`Cart Details`);
                    console.log(`Item name : ${this.itemName}`);
                    console.log(`Price : ${this.price * quantity}`);
                }
            });
            exports_1("showBill", showBill = (p, quantity) => {
                p.cartDetails(quantity);
            });
        }
    };
});
//call showBill using gadgets object, appliances obj literal and a direct object also
System.register("bill", ["product"], function (exports_2, context_2) {
    "use strict";
    var product_1, gadgets, product;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (product_1_1) {
                product_1 = product_1_1;
            }
        ],
        execute: function () {
            console.log(product_1.appliances);
            gadgets = new product_1.Gadgets("Washing machine", 25000);
            gadgets.cartDetails(1);
            product = new product_1.Gadgets('Earphones', 599);
            product_1.showBill(product, 5);
        }
    };
});
