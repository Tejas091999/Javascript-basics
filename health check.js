let normal = 20;
let health = Math.floor(Math.random() * 101);
let difficulty = Math.floor(Math.random() * 3) + 1;
let total_health = health + normal;
let new_health = (total_health/difficulty);
console.log(health);
console.log(difficulty);
console.log(new_health);
if (new_health >= 80) {
    console.log("You're perfect!!");
} else if (50 < new_health && new_health < 80) {
    console.log("You can still do it better!!");
} else {
    console.log("You need medication");
}
console.log("Get well soon!!");