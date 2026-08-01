namespace Demo{
    export class Student{
        name: string="Aayesha";
        display(){
            console.log("Student Name: "+this.name);
        }
    }
}
let s=new Demo.Student();
s.display();