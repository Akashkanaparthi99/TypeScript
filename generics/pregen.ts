const addItems = (item:string[]):any[]=>{
    return new Array().concat(item);
}

let fruits = addItems(['apple','orange']);
fruits.push('grapes');
fruits.push(245);

fruits.forEach((fruit)=>console.log(`Fruit : ${fruit}`));


function printItems<T>(item:T[]):T[]{
    return new Array<T>().concat(item);
}

let courses = ['java','spring'];
let coursesArr = printItems(courses);
coursesArr.push('angular');

coursesArr.forEach(e=>console.log(e));





