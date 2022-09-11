var arr=[10,29,64,3,34];
var [a,b,c,d,e,f] = arr;
console.log(a);
console.log(f);
var [a,c,d] = arr;
console.log(c);
var [a,,d]=arr;
console.log(d);

var num:number[]=[10,29,64,3,34];
var [a,b,c,d,e,f] = num;
var [a,c,d] = num;
var [a,,d]= num;
console.log(d);
console.log(a);
console.log(f);
console.log(c);


