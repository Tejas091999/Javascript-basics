console.log("Movies Tickets")
let name = prompt("What is your name: ")
let namelist=[]
console.log("Welcome", name)
let movies = ["BLACK PANTNER","IRON MAN 3","SUPERMAN","BATMAN"]
let name_movie=prompt("Which movie would like to watch: ")
let seats=100
if (movies.includes(name_movie)) {
    console.log("Great choice")
    let user = prompt("How many seats would you like to book: ")
    let booked =(seats - user)
    console.log(user," seats are booked")
    console.log("This many seats are remaining",booked)
    namelist.push(name)
    console.log(namelist)
}else {
    console.log("Please select a movie from list")
}