function predictBirthdayDay(year) {
  var date = new Date(year, 2, 1);
  var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var dayOfWeek = daysOfWeek[date.getDay()];

  return dayOfWeek;
}

var birthYear = prompt("Which year do you want to find")
var birthdayDay = predictBirthdayDay(birthYear);
console.log("The day of the week for the birthday in " + birthYear + " is: " + birthdayDay);
