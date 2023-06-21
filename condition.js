
// let prompt = require("prompt-sync")()
// let salesMan = prompt("is the employee is salarid?")
// let sales = prompt("how much he sold?")
// let commission
let prompt = require("prompt-sync")()
let Cost = prompt("what is the Cost?")

let DownPayment

if (Cost >0 && Cost<50000){
    DownPayment = Cost*0.05 
    console.log ("your down payment is " + DownPayment)} 
else if (Cost >=50000 && Cost<100000){DownPayment = 1000 +0.10*(Cost-50000)
console.log("your down payment is " + DownPayment)}

else if (Cost >=100000&&Cost<200000){DownPayment =  2000 + 0.15*(Cost-100000)
    console.log("your down payment is " + DownPayment)}
else if (Cost>=200000){DownPayment = 5000 +0.10*(Cost-200000)
console.log("your down payment is " + DownPayment)}
