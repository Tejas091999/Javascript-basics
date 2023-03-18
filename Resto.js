console.log("Welcome to Resto")
let user = prompt("Do you want to eat here: ")
if ( user === "yes") {
    let menu = ["Thai","Italian","Indian","Contential"]
    let customer = prompt("Which categories do you want to explore: ")
    let balance = parseInt(prompt("How much amount do you have to spend: "))
    Thai_price = 1200
    Italian_price = 1500
    Indian_price = 2000
    Contential_price =1000
    if (menu.includes(customer)) {
        console.log("You've Great choice...")
        if (customer === "Thai") {
            console.log("Yes you can have it ")
            total = balance - Thai_price
            console.log("You still have ",total, "amount left to spend")
        }else if (customer==="Italian") {
            console.log("Great choice")
            total = balance - Italian_price
            console.log("You still have ",total, "amount left to spend")
        }else if (customer==="Indian"){
            console.log("Finally you found your roots")
            total = balance - Indian_price
            console.log("You still have ",total, "amount left to spend")
        }else if (customer==="Contential"){
            console.log("Can be better")
            total = balance - Contential_price
            console.log("You still have ",total, "amount left to spend")
        }
    }
}