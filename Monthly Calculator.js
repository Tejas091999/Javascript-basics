console.log("Monthly calaculator.")
let cal=(p,a,y) => {
    let principal = prompt("Enter the loan taken: ")
    let apr = prompt("Enter the annual interest: ")
    let years = prompt("Enter the number of years: ")
    let monthly_interest_rates = apr/1200
    let months = years/12
    let monthly_payments = principal*monthly_interest_rates/(1-(1+monthly_interest_rates)**(-months))
    console.log(monthly_payments)
}
let result=cal(3000,4.5,3)
console.log(result)