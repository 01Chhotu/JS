// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id="123abc"
tinderUser.name = "Chhotu"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "chotup.ug21@nitp.ac.in",
    fullname: {
        userfullname:{
            firstname: "chhotu",
            lastname: "paswan"
        }
    }
}

// console.log(regularUser.fullname.userfullname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}
// console.log({obj1, obj2})
// const obj4 = Object.assign({}, obj1, obj2, obj3)
// two or more object combine into one object
// const obj4 = {...obj1, ...obj2, ...obj3} // sprid operatin on object
// console.log(obj4)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(tinderUser.hasOwnProperty('id')) // this applay on key object

const users = [
    {
        id: 0,
        email: "user0@gmail.com"
    },
    {
        id: 2,
        email: "user2@gmail.com"
    },
    {
        id: 3,
        email: "user3@gmail.com"
    }
]
// console.log(users[0].email)
// Destructer operation 
const course = {
    coursename: "js in hindi",
    price: "free",
    courseInstructor: "chhotu"
}

const {courseInstructor: instructor} = course
console.log(instructor)