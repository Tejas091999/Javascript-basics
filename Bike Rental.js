console.log("Welcome to Bike rental")
class Bike {
    constructor (engine,color) {
        this.engine = parseInt(prompt("How much engine power do you want: "))
        this.color = prompt("Which color do you prefer: ")
    }
    engine_type(engine) {
        if (this.engine > 150 ) {
            console.log("There's a lot of power ")
        }else {
            console.log("You can handle it.")
        }
    }
    color_type(color) {
        if (this.color==="white") {
            console.log("Please wash it regularly")
        }else if ( this.color==="black") {
            console.log("Please avoid scrashes")
        }else if (this.color==="red") {
            console.log("It is the prettiest color.")
        }else {
            console.log(this.color, "The color is not available")
        }
    }
}
class Rider extends Bike {
    constructor (age,license,engine) {
        super(engine)
        this.age = parseInt(prompt("What is your age: "))
        this.license = prompt("Do you have license: ")
    }
    driver_check(age,license) {
        if ( this.age > 18 && this.license==="yes") {
            console.log("You're eligible..")
        }else if ( this.age >18 && this.license==="no") {
            console.log("Sorry you don't have license")
        }else if ( this.age < 18 && this.license==="yes") {
            console.log("Sorry but you're underage.")
        }else {
            console.log("Sorry but you're underage and you don't have license..")
        }
    }
}
const person1 = new Rider(4000,"White","yess")
console.log(person1.engine_type())
console.log(person1.color_type())
console.log(person1.driver_check())