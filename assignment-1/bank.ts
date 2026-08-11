class BankAccount {
    private balance: number
    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }
    deposit(amount: number): void {
        this.balance += amount;
        console.log("Deposited:", amount);
    }
    withdraw(amount: number): void {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log("Withdrawn:", amount);
        } else {
            console.log("Insufficient Balance");
        }
    }

    displayBalance(): void {
        console.log("Current Balance:", this.balance);
    }
}
let account = new BankAccount(1000);
account.deposit(500);
account.withdraw(300);
account.displayBalance();