constructor(name, balance, account_number = 1999) {
this.name = name;
this.balance = balance;
this.account_number = account_number;
}
deposit(amount) {
this.balance = amount + this.balance;
return this.balance;
}
withdraw(amount) {
if (amount > this.balance) {
console.log("There is no enough balance");
} else {
this.balance = this.balance - amount;
return this.balance;
}
}
balance_in_bank() {
return this.balance;
}
}
const person1 = new Bank("Tejas", 30000);
console.log(person1.deposit(56700));
console.log(person1.balance_in_bank());
console.log(person1.withdraw(20000));