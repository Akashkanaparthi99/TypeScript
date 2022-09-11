function greet(message:string):void{
    console.log(`Have a great day ${message}`);
}

var calcSum = function(num1:number, num2:number):number{
    return num1+num2;
}

console.log("Sum is ", calcSum(10,20) );

var calcSum = (num1:number, num2:number):number=>{
    return num1+num2;
}

console.log("Sum is ", calcSum(10,20) );

