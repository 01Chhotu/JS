function saymyName(){
    console.log("c")
    console.log("h")
    console.log("h")
    console.log("o")
    console.log("t")
    console.log("u")
}
// saymyName()
function addNumber(num1, num2){
    // console.log(num1+num2)
    return num1+num2
}
let result = addNumber(3, 6)
// console.log(result)
function loginUserMessage(username){
    if(username===undefined){
        return "plase enter your name"
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage())

function calculateCartPrice(...num){
    return num
}
// function calculateCartPrice(val1, val2, ...num){
//     return num
// }
// console.log(calculateCartPrice(200,300,400,500))

const user = {
    username: "chhotu",
    price: 199
}

function handleobject(anyUser){
    return `my name is ${anyUser.username} and my course price is ${anyUser.price}`
}

// console.log(handleobject({
//     username: "vicky",
//     price: 299
// }))

function handleArray(getArray){
    return getArray[1]
}

const myArray = [200, 300, 400, 500]
console.log(handleArray(myArray))