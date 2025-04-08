class BankAccount {

    #balance;

    constructor(initialBalance = 0) {
        this.#balance = initialBalance;
    }


    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        } else {
            console.log('Сума повинна бути більшою за 0');
        }
    }


    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
        } else {
            console.log('Недостатньо коштів або некоректна сума');
        }
    }


    getBalance() {
        return this.#balance;
    }
}


const account1 = new BankAccount(1000);

console.log(account1.getBalance());

account1.deposit(500);

console.log(account1.getBalance());

account1.withdraw(200);

console.log(account1.getBalance());
