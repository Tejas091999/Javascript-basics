let user = prompt("Do you want to take this survey: ");
while (true) {
  if (user === "yes") {
    let name = prompt("What is your name: ");
    let age = parseInt(prompt("What is your age: "));
    let gender = prompt("What is your gender: ");
    let city = prompt("What is your location: ");
    let name_list = [];
    name_list.push(name,age,gender,city);
    console.log(name_list);
    console.log("Thank you for taking this survey");
    break;
  } else if (user === "no") {
    break;
  }
}