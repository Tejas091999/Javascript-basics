class CardHolder {
    constructor(cardNum, pin, firstname, lastname, balance) {
        this.cardNum = cardNum;
        this.pin = pin;
        this.firstname = firstname;
        this.lastname = lastname;
        this.balance = balance;
    }

    //Getter method  
    getCardNum() {
        return this.cardNum;
    }
    getPin() {
        return this.pin;
    }
    getFirstname() {
        return this.firstname;
    }
    getLastname() {
        return this.lastname;
    }
    getBalance() {
        return this.balance;
    }

    //Setter methods 
    setCardNum(newVal) {
        this.cardNum = newVal;
    }
    setPin(newVal) {
        this.pin = newVal;
    }
    setFirstname(newVal) {
        this.firstname = newVal;
    }
    setLastname(newVal) {
        this.lastname = newVal;
    }
    setBalance(newVal) {
        this.balance = newVal;
    }
    printOut() {
        console.log("Card: ", this.cardNum);
        console.log("Pin: ", this.pin);
        console.log("FirstName: ", this.firstname);
        console.log("LastName: ", this.lastname);
        console.log("Balance: ", this.balance);
    }
    printMenu() {
        console.log("Please choose from one of the following:");
        console.log("1. Deposit");
        console.log("2. Withdraw");
        console.log("3. Show Balance");
        console.log("4. Exit");
    }
    deposit(cardHolder) {
        try {
            let deposit = parseFloat(prompt("How much money do you like to deposit: "));
            cardHolder.setBalance(cardHolder.getBalance() + deposit);
            console.log("Thank you for your money", String(cardHolder.getBalance()));
        } catch (error) {
            console.log("Invalid Input");
        }
    }
    withdraw(cardHolder) {
        try {
            let withdraw = parseFloat(prompt("How much do you want to withdraw: "));
            if (cardHolder.getBalance() < withdraw) {
                console.log("Not sufficient amount.");
            } else {
                cardHolder.setBalance(cardHolder.getBalance() - withdraw);
                console.log("You can go ahead and withdraw");
            }
        } catch (error) {
            console.log("Invalid Input");
        }
    }
    checkBalance(cardHolder) {
        console.log("your current balance", cardHolder.getBalance());
    }
}
const person1 = new CardHolder()
console.log(person1.display())
