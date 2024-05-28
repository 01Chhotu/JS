// for of
const arr= [1,2,3,4,5,6]
for(const nums of arr){
    // console.log(nums)
}
const string = "Hello world"

for(const s of string){
    // console.log(`char: ${s}`)
}

// MAP
const mp = new Map()

mp.set("IN", "India")
mp.set("USA", "United state of America")
mp.set("Fr", "France")

for(const [key, val] of mp){
    // console.log(`${key} :- ${val}`)
}

// Importented
// Object is not iterative by (for of) loop iterative

// for in loop iterative
const myObject = {
    js: "javaScript",
    cpp: "C++",
    rb: "ruby",
    swift: "Swift programmning"
}

for(const it in myObject){
    // console.log(`${it} shortcut is for ${myObject[it]}`)
}
const programming = ["js", 'cpp', 'rb', 'java', 'swift']

for(const it in programming){
    console.log(programming[it])
}
// Importented 
// map is not iterative in (for in) loop iterative