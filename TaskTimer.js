console.log("Welcome to task manager");

let task_1 = prompt("What is your first task: ");
let task_2 = prompt("What is your second task: ");
let task_3 = prompt("What is your third task: ");
let task_4 = prompt("What is your fourth task: ");
let task_5 = prompt("What is your fifth task: ");

let myTasks = [task_1, task_2, task_3, task_4, task_5];

while (myTasks.length > 0) {
  for (let i = 0; i < myTasks.length; i++) {
    let task = myTasks[i];
    let user = prompt(`Is "${task}" done?`);
    if (user === "yes") {
      console.log("Very Good");
      myTasks.splice(i, 1);
      break;
    }
  }
}
########################################################################################################################################
console.log("Welcome to task manager")
let task_1=prompt("What is your first task: ")
let task_2=prompt("What is your second task: ")
let task_3=prompt("What is your third task: ")
let task_4=prompt("What is your fourth task: ")
let task_5=prompt("What is your fifth task: ")
let mytask=[]
mytask.push(task_1)
mytask.push(task_2)
mytask.push(task_3)
mytask.push(task_4)
mytask.push(task_5)
console.log(mytask)
for ( i = 0 ; i < mytask.lenght ; i ++){
    console.log(mytask[i])
    if(mytask.includes[0]){
        let user =  prompt("Is that job done: ")
        if (user==="yes"){
            console.log("Very Good")
            mytask.pop(mytask[0])
        }
    }else if(mytask.includes[1]){
        let user =  prompt("Is that job done: ")
        if (user==="yes"){
            console.log("Very Good")
            mytask.pop(mytask[1])
        }
    }else if(mytask.includes[2]){
        let user =  prompt("Is that job done: ")
        if (user==="yes"){
            console.log("Very Good")
            mytask.pop(mytask[2])
        }
    }else if (mytask.includes[3]){
        let user =  prompt("Is that job done: ")
        if (user==="yes"){
            console.log("Very Good")
            mytask.pop(mytask[3])
        }
    }else if(mytask.includes[4]){
        let user =  prompt("Is that job done: ")
        if (user==="yes"){
            console.log("Very Good")
            mytask.pop(mytask[4])
        }
    }break;
}