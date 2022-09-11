interface Shape{
    x:number;
    y?:number;
    z?:number;
    
    greet(name:string):string;

    sayHello:(name:string)=>string;

    calcArea:()=>void;
}

class Square implements Shape{
    constructor(
    public x: number,
    public y?: number,
    public z?: number
    ){}
    greet = (name: string): string =>`Welcome ${name}`;
    
    sayHello = (name: string) => `Hello ${name}`;
    calcArea = ()=>console.log(`Area ${this.x*this.x}`);
    
}

class Rectangle implements Shape{
    constructor(
        public x: number,
        public y?: number,
        public z?: number
    ){}
    greet = (name: string): string =>`Welcome ${name}`;
        
    sayHello = (name: string) => `Hello ${name}`;
    
    calcArea = ()=>console.log(`Area ${this.x*this.x}`);
    
    calcPerimeter = ()=>console.log(`Perimeter ${this.x*this.y}`);
}  

const rect:Rectangle = new Rectangle(25,55);
console.log(rect.greet('Ak'));
console.log(rect.sayHello('Ash'));
rect.calcArea();
rect.calcPerimeter();


let shape:Shape = new Square(10);
shape.calcArea();
console.log(shape.greet('Ak'));
console.log(shape.sayHello('akash'));

const 