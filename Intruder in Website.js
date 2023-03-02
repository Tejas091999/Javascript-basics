console.log("WELCOME TO LOGIN CHECKUP!!");
let mylist = ["Ram","Rahul","Shaam","Tejas"];
let name = prompt("What is your name: ");
while (true) {
if (mylist.includes(name)) {
console.log("Welcome to the Website!!");
let user = prompt("Do you want to remove?");
if (user === "yes") {
console.log("You're name is removed!");
mylist.splice(mylist.indexOf(name), 1);
break;
} else if (user === "no") {
console.log("NOT removed!!");
break;
}
} else {
let user = prompt("Do you want to add your name? ");
if (user === "yes") {
mylist.push(name);
console.log("You're Added!!");
console.log("Welcome to Website.");
break;
} else if (user === "no") {
console.log("Comeback later.");
break;
}
}
}
console.log("Thank you for visiting website!");
console.log(mylist);