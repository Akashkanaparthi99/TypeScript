function findTotal(...num) {
    // var total:Number;
    let total = 0;
    num.forEach(number => {
        total = +number;
    });
    return total;
}
console.log("total is ", findTotal(12, 14, 52, 5));
function findNames(...names) {
    let containingE = [];
    names.forEach((name) => {
        if (name.toUpperCase().includes('E')) {
            containingE.push(name);
        }
    });
    return containingE;
}
var names = findNames('riya', 'george', 'helen', 'rakesh');
names.forEach((names) => console.log(`${names}`));
