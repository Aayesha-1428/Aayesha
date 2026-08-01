let binary: string = "11001";
let decimal: number = 0;
let length = binary.length;
for (let i = 0; i < length; i++) {
    if (binary[i] === "1") {
        decimal += Math.pow(2, length - 1 - i);
    }
}
console.log("Decimal =", decimal);