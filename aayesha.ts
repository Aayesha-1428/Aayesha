














let na:string="Aayesha";
let age:number=19;
let isStudent:boolean=true;

console.log(na);
console.log(age);
console.log(isStudent)

function add(a: number,b :number):number{
    return a+b;
}
console.log(add(10,20));

let marks: number[]=[85,90,95];
console.log(marks);

let student: {
    name:string;
    age:number;
}={
    name:"Aayesha",age : 20
};
console.log(student);

class person{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
    display(): void{
        console.log(this.name);
        console.log(this.age);
    }
}
let p=new person("Aayesha",20);
p.display();
let value: string|number;
value="Hello";
console.log(value);
value=100;
console.log(value);



