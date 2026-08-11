class Student {
    name: string;
    static collegeName: string = "ABC Engineering College";

    constructor(name: string) {
        this.name = name;
    }

    display(): void {
        console.log("Student Name:", this.name);
    }

    static displayCollege(): void {
        console.log("College Name:", Student.collegeName);
    }
}

let student1 = new Student("Aayesha");
let student2 = new Student("Suhana");

student1.display();
student2.display();

Student.displayCollege();