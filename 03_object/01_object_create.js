// singleton
// object.create

// object literals
const mysymbol = Symbol("key1")
const JsUser = {
    name: "chhotu",
    "full name": "chhotu paswan",
    age: 18,
    [mysymbol]: "mykey1",
    location: "Nawada",
    email: "chhotukumar0107@gmail.com",
    isLoggedIn: false,
}
// console.log(JsUser)
// console.log(JsUser["full name"])
// console.log(JsUser[mysymbol])
// console.log(JsUser["age"])

// JsUser.email = "chhotukumar30454@gmail.com"
// Object.freeze(JsUser)
// console.log(JsUser.email)
JsUser.email = "chotup.ug21.cs@nitp.ac.in"
console.log(JsUser.email)

JsUser.funcall = function(){
    console.log(`Hello Js User ${this["full name"]}`)
}
console.log(JsUser.funcall)
console.log(JsUser.funcall())

