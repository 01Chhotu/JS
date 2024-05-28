// falsy values it means false value
// ---> false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy values
// "0","false"," ", [], {}, function(){}

const emptyobj = {}

if(Object.keys(emptyobj).length===0){
    console.log("Object is empty")
}

// Nullish coalescing Operator (??): null, undefined
let vall;

vall = 5 ?? 10 // output is 5
vall = null ?? 10 //output is 10
vall = undefined ?? 15 // output is 15

vall = null ??10??20 //output is 10

// Terniary Operator 
// condition ? true: false
const iceTeaPrice = 100
iceTeaPrice>=80 ? console.log("more then 80") : console.log("less then 80")