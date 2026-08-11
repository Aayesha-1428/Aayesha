function findGCD(a: number, b: number): number {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
let num1: number = 24;
let num2: number = 36;
let gcd = findGCD(num1, num2);
let lcm = (num1 * num2) / gcd;
console.log("GCD =", gcd);
console.log("LCM =", lcm);