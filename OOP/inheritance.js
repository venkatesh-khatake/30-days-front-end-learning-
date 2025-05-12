class BankAccount{
    customerName;
    accountNumber;
    balance  = 0;

    constructor(customerName, balance  = 0){
        this.customerName  = customerName;
        this.balance = balance;
        this.accountNumber = Date.now();
    }

    deposit(amount){
        balance += amount;
    }

    withdraw(amount){
        balance -= amount;
    }
    
}

class CurrentAccount extends BankAccount{
    transactionLimit = 10000;
    constructor(customerName, balance = 0){
         super(customerName, balance);

    }

    takeBusinessLoan(amount){
        console.log("Taking Business Loan : ", amount);
    }
}


class SavingAccount extends BankAccount{
    transactionLimit = 10000;
    constructor(customerName, balance = 0){
         super(customerName, balance);

    }

    takePersonalLoan(amount){
        console.log("Taking personal Loan : ", amount);
    }
}