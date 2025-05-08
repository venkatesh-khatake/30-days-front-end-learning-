function BankAccount(customerName, balance = 0){
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;

    this.deposit = function(amount){
        this.balance += amount;
    }

    this.withdrawal = (amount) =>{
        this.balance -= amount;
    }
}

// const venkeyAccount = new BankAccount("Venkatesh k", 1200);
// const tejAccount = new BankAccount("Tej k", 4000);

// venkeyAccount.deposit(4100);
// console.log(venkeyAccount);
// venkeyAccount.withdrawal(800);
// console.log(venkeyAccount)
// console.log(tejAccount);

// ========================================

const accounts = [];


const accountForm = document.querySelector('#accountForm');
const customerName = document.querySelector('#customerName');
const balance = document.querySelector('#balance');

accountForm.addEventListener('submit',(e) =>{
    e.preventDefault();

    const account = new BankAccount(customerName.value, +balance.value)

    accounts.push(account);
    console.log(accounts)
})

// =======================

const depositForm = document.querySelector('#depositForm');
const accountNumber = document.querySelector('#accountNumber');
const amount = document.querySelector('#amount');


depositForm.addEventListener('submit',(e) =>{
    e.preventDefault();

    const account = accounts.find(
        (account) => account.accountNumber === +accountNumber.value);

        account.deposit(+amount.value);
        console.log(accounts);
})