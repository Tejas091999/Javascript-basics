console.log("Welcome to the quiz")
let name =prompt("What is your name:")
let subjects=["Maths","Science","Chemistry"]
let marks_m = prompt("What are your Maths marks: ")
let marks_s = prompt("What are your Science marks: ")
let marks_c =  prompt("What are your Chemistry marks: ")
for (i=0;i<subjects.length;i++){
  console.log(subjects[i]);
  if (subjects[i]==="Maths") {
    console.log("Great choice")
    if (marks_m > 50) {
      console.log("You're good at this")
      console.log(marks_m)
    }else {
      console.log("You've to work hard")
    }
  }else if (subjects[i]==="Science") {
    console.log("Great choice")
    let marks_s = marks_s
    if (marks_s > 50) {
      console.log("You're good at this")
      console.log(marks_sc)
    }else {
      console.log("You've to work hard")
    }
  }else if (subjects[i]==="Chemistry") {
    console.log("Great choice")
    if (marks_c > 50) {
        console.log("You're good at this ")
    }else {
        console.log("You've to work hard")
    }
  }break
}
let average = (marks_m + marks_s + marks_c)/3 
if (average > 45) {
    console.log("Congralutions , You're passed")
}else {
    console.log("You're Failed. Please do the needful")
}