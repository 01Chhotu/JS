let myName = "chhotu     "
// console.log(`actual length of string is ${myName.length}`)
// console.log(`true length of string is ${myName.trim().length}`)

// create prototype on string print true length of any string

String.prototype.truelength = function(){
    // console.log(`true length ${this.trim().length}`)
}
myName.truelength()
"chai    ".truelength()

const myHero = ["thor", "spiderman"]

let heroPower ={
    thor: "hummar",
    spiderman: "sling",
    getSpiderPower: function(){
        console.log(`spider power is ${this.spiderman}`)
    }
}
Object.prototype.chhotu = function(){
    console.log("chhotu is present every object")
}
Object.prototype.hichhotu = function(){
    console.log("chhotu say hello")
}
heroPower.chhotu();
myHero.chhotu();

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)