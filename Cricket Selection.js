console.log("Cricket Selection")
class Cricket{
  constructor(name,age,s_rate){
    this.name = name 
    this.age = age
    this.s_rate = s_rate
} display(name,age,s_rate){
    let username = prompt("What is your name : ")
    this.name= username
    console.log("Welcome",this.name)
    let userage = prompt("What is your age: ")
    this.age = userage
    if ( userage > 18 ) { 
        console.log("You can play the season")
        let num_matches = prompt("How many matches have you played: ")
        let num_runs = prompt("How many runs have you scored: ")
        this.s_rate = num_runs/num_matches  
        console.log("Your strike rate is " , this.s_rate)
        if ( this.s_rate > 50) {
            console.log("You're selected")
            console.log(this.name, "Welcome to the team ")
        }else {
            console.log("Please work hard.")
        }
    }else {
        console.log("You have to play U-19")
    }   
}
}
const person1= new Cricket("tejas",12,12)
console.log(person1.display("tejas",12,65))
