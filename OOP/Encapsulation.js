// Encapsulation : 
// Encapsulation is the fundamental concept in object-oriented programming that refers to the
// practice of hiding the internal details of an object and exposing only the necessary
// information to the outside world.

// Encapsulation can be achieved through 2 techniques
// 1. using closures 
// 2. using classes


// 1. Using Closures : 
//      closures are the function that have access to variables in their outer lexical environment,
// even after the outer function has returned, Private variables and methods can be created using closures.


// function BankAccount(accountNumber, accountHolderName, balance){
//     let _accountNumber = accountNumber;
//     let _accountHolderName = accountHolderName;
//     let _balance = balance;

//     function showAccountDetails(){
//         console.log(`Account Number : ${_accountNumber}`);
//         console.log(`Account Holder Name : ${_accountHolderName}`);
//         console.log(`Balance : ${_balance}`);
//     }

//     function deposit(amount){
//         _balance += amount;
//         showAccountDetails();
//     }

//     function withdraw(amount){
//         if(_balance >= amount){
//             _balance -= amount;
//             showAccountDetails();
//         }
//         else{
//             console.log("Insufficient Balance.")
//         }
//     }

//     return{
//         deposit:deposit,
//         withdraw:withdraw
//     }
// }


// let myBankAccount = BankAccount('12345678',"Venkatesh P. Khatake", 4500);

// myBankAccount.deposit(1000);
// console.log(myBankAccount)

// myBankAccount.withdraw(4000);
// console.log(myBankAccount)

// ======================================================================


// 2. Using Classes : 
//          ES6 introduced the class syntax in Javascript, which allows us to define classes
//  and objects in a more structured way. Classes can be used to achieve encapsulation in JS.

class BankAccount{
    constructor(accountNumber, accountHolderName, balance){
        this._accountNumber = accountNumber;
        this._accountHolderName = accountHolderName;
        this._balance = balance;
    }

   showAccountDetails(){
        console.log(`Account Number : ${this._accountNumber}`);
        console.log(`Account Holder Name : ${this._accountHolderName}`);
        console.log(`Balance : ${this._balance}`);
    }

    deposit(amount){
        _balance += amount;
        this.showAccountDetails();
    }

    withdraw(amount){
        if(this._balance >= amount){
            this._balance -= amount;
        this.showAccountDetails();
        }
        else{
            console.log("Insufficient Balance");
        }
    }
}

let venkeyBankAccount = new BankAccount("45612378",'Venkatesh Khatake', 7000);

console.log(venkeyBankAccount)

venkeyBankAccount.withdraw(7100);