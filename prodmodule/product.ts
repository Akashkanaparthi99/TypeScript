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



export interface ProductDetails{
    itemName:string;
    price:number;

    cartDetails:(quantity:number)=>void;
}

export class Gadgets implements ProductDetails{
    constructor( public itemName: string,
        public price: number) {
        
    }
   
    cartDetails = (quantity: number):void => {
        console.log(`Item : ${this.itemName}`);
        console.log(`Total cost : ${this.price*quantity}`);
    };
    
}

export var appliances = {
    itemName : 'Fan',
    price : 5822,

    cartDetails : function(quantity:number){
        console.log(`Cart Details`);
        console.log(`Item name : ${this.itemName}`);
        console.log(`Price : ${this.price*quantity}`);
    }
}


export let showBill = (p:ProductDetails,quantity:number)=>{
    p.cartDetails(quantity);
}

