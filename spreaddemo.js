var arr1;
arr1 = [20, 30, 40, 50];
var arr2;
arr2 = [...arr1, 60, 70, 80, 90];
console.log(`array of numbers ${arr2}`);
var employee = { name: 'Roy', salary: 9000 };
var address = { city: 'Ban', state: 'Kar' };
var hobbies = ['sports', 'music'];
var person = Object.assign(Object.assign(Object.assign({}, employee), address), { hobbies });
console.log(person);
var uname; // use any data type
var printData = (data) => {
    if (Array.isArray(data)) {
        data.forEach((a) => {
            if (typeof a == 'number' && a % 2 == 0) {
                console.log(`Even elements ${a}`);
            }
            else if (typeof a == 'string') {
                if (a.includes('apple')) {
                    console.log(`fruit ${a}`);
                }
            }
        });
    }
    else if (typeof (data) == 'string') {
        console.log(`Hello ${data}`);
    }
    else if (typeof (data) == 'number') {
        console.log(`square is ${data * data}`);
    }
    else if (typeof (data) == 'object') {
        for (const key in data) {
            console.log(`${key} ${data[key]}`);
        }
    }
};
printData('priya'); // hello priya
printData(10); // square is 100
printData(['apple', 'orange', 'pineapple']); // print fruitshaving apple word
printData([1, 2, 3, 4, 5, 6]); // print only even
printData({ name: 'Jack', city: 'Banglore' }); //print the obj
