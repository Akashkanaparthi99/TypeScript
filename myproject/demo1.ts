function findTotal (...numbers: number[]): number {

    let total = 0;
    numbers.forEach((num) => total += num);
    return total;
    
}

//console.log(findTotal(90,80))


const findNames = (...names:string[]) =>{

    let result:any= [];


    names.forEach((name) => {
        if(name.includes("e")){
            result.push(name)
        }
    })

    return result;
}


let res = findNames("Akash" , "baba","Sandeep")
console.log(res)
//res.forEach(ename=>console.log(ename))
