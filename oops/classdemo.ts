class Student {
    constructor(
        public studName:string,
        public studentId:number,
        public city:string,
        public department?:string
    ) {}

    printDetails = ()=>{
        console.log(`Name : ${this.studName}`);
        console.log(`Id : ${this.studentId}`);
        console.log(`City : ${this.city}`);
        console.log(`Department : ${this.department}`);
    }

    showCourses = (...courses:string[])=>{
        courses.forEach((course)=>console.log(course))
    }
}

var student = new Student('ash',10,'Hyderabad','Mech')
student.printDetails();
student.showCourses('html','css','java');