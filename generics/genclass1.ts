class GenEmployee<T>{
    // constructor(public empName:T){}
    public empName:T;
    setName(empName:T){
        this.empName=empName;
    }

    print =() =>{
        console.log(`${this.empName}`);
    }

}

let emp:GenEmployee<string> = new GenEmployee<string>();
emp.setName('Akash');
emp.print();

let empnum:GenEmployee<number> = new GenEmployee<number>();
empnum.setName(100);
empnum.print();

let empSArr:GenEmployee<string[]> = new GenEmployee<string[]>();
empSArr.setName(['Akash','Madhu','Baba']);
empSArr.print();

let empNArr:GenEmployee<number[]> = new GenEmployee<number[]>();
empNArr.setName([1,25,2.24,2,82,554]);
empNArr.print();

let empObj:GenEmployee<Object> = new GenEmployee<Object>();
empObj.setName({name:'Akash',empId:186});
empObj.print();