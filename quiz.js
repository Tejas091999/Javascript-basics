console.log("Welcome to quiz!!")
let user = prompt("What is your name: ")
let myname = []
myname.push(user)
console.log(myname)
let question1 = prompt("What is the name of your country: ")
if (question1 = "India") {
    let question2 = prompt("What is the capital of India: ")
    if (question2 = "Delhi") {
        console.log("You're correct..")
        console.log("Thank you")
    }else { 
        console.log("You're really close.Please try again.")
    }
}else {
    console.log("Please have a better knowledge about your country")
}
