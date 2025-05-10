function BankAccount(customerName, balance = 0){
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;

    // this.deposit = function(amount){
    //     this.balance += amount;
    // }

    // this.withdrawal = (amount) =>{
    //     this.balance -= amount;
    // }
}

const venkeyAccount = new BankAccount("Venkatesh K");

BankAccount.prototype.deposit = function(amount){
    this.balance += amount
}

BankAccount.prototype.withdraw = function(amount){
    this.balance -= amount;
}

venkeyAccount.deposit(7000)
venkeyAccount.withdraw(450)
// console.log(venkeyAccount)

// console.log(BankAccount.prototype)

console.log(Object.getPrototypeOf(venkeyAccount) === BankAccount.prototype)