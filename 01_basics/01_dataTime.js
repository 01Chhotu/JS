let currData = new Date()

// console.log(currData)
// console.log(currData.toString())
// console.log(currData.toLocaleDateString())
// console.log(typeof currData) //object

let myCreateData = new Date("01-14-2023")
// console.log(myCreateData.toString())
// console.log(myCreateData.toLocaleDateString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(Date.now()/1000)
console.log(myCreateData.getTime())
