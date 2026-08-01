class Box<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    display(): void {
        console.log("Value:", this.value);
    }
}

let stringBox = new Box<string>("Hello");
stringBox.display();

let numberBox = new Box<number>(100);
numberBox.display();

let booleanBox = new Box<boolean>(true);
booleanBox.display();