console.log("Guessing Game")
let user = prompt("Guess your number: ")
let computer = Math.floor(Math.random() * 10) + 1
console.log(user)
console.log(computer)
if (user===computer) {
    console.log("You guessed right...")
}else {
    console.log("Please try again")
}