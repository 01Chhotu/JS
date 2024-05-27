// one() we can call this way function one 
// function one(){
//     console.log("First way to write function")
// }
// two() we can not call this way to function two
// const two = function(){
//     console.log("Second way to write function")
// }
// const addnumber = (num1, num2)=>{
//     console.log("This is arrow function, Third way to write function")
//     return num1+num2
// }
// console.log(addnumber(3, 4))
// const addNumber = (num1, num2) => num1+num2
// const addNumber = (num1, num2) => ("Hello chhotu")
// const addNumber = (num1, num2) => ({usename: "chhotu"})
// console.log(addNumber(3,4))

// const user = {
//     username: "chhotu",
//     price: 199,
//     chai: function(){
//         console.log(`${this.username}, Hello website devloper`)
//     }
// }
// // user.chai()
// user.username = "vicky"
// user.chai()
// this ---> it is user for only object
// console.log(this) this give empty function

// const chai = function(){
//     let usename = "chhotu";
//     console.log(`Hello, ${this.usename}`) // it give undefined this not used in function
// }

// chai()



// Immediately Invoke Function Expression (IIFE)
// IIFE it is used for global disturbance polluted varible
(function chai(){
    console.log(`DB CONNECTED`);
})();

((name)=>{
    console.log(`DB connect Two ${name}`);
})('chhotu')