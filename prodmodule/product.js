"use strict";
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
exports.__esModule = true;
exports.showBill = exports.appliances = exports.Gadgets = void 0;
var Gadgets = /** @class */ (function () {
    function Gadgets(itemName, price) {
        var _this = this;
        this.itemName = itemName;
        this.price = price;
        this.cartDetails = function (quantity) {
            console.log("Item : ".concat(_this.itemName));
            console.log("Total cost : ".concat(_this.price * quantity));
        };
    }
    return Gadgets;
}());
exports.Gadgets = Gadgets;
exports.appliances = {
    itemName: 'Fan',
    price: 5822,
    cartDetails: function (quantity) {
        console.log("Cart Details");
        console.log("Item name : ".concat(this.itemName));
        console.log("Price : ".concat(this.price * quantity));
    }
};
var showBill = function (p, quantity) {
    p.cartDetails(quantity);
};
exports.showBill = showBill;
