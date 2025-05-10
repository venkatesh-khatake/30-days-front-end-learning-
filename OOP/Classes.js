class BankAccount{
    customerName;
    accountNumber
    ;
    balance = 0;

    constructor(customerName, balance = 0){
        this.customerName = customerName;
        this.balance = balance;
        this.accountNumber = Date.now();
    }

    deposit(amount){
        this.balance += amount;
    }

    withdraw(amount){
        this.balance -= amount;
    }

}


// const venkateshAcc = new BankAccount("Venkatesh K.",1000);
// venkateshAcc.deposit(410);
// console.log(venkateshAcc);

// venkateshAcc.withdraw(500);
// console.log(venkateshAcc);

console.log(a)
var a = 45