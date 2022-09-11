var username:string;
username = 'priya';
console.log(`${username}`); // template ref vairable backtick

var message = 'Have a great day';
console.log(`${message}, ${username}`)


var value : string | number;
value = "Ash";

value = 10;
if (typeof(value)==='string')
    console.log(`Hello ${value}`);
else
    console.log(`the square of num is ${value*value}`);