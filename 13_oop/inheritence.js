class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        return `USERNAME is${this.username}`
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        return `A new course was add ${this.username}`
    }
}
const chai = new Teacher("chai", "chai@gmail.com", "123")
// console.log(chai.addCourse())
// console.log(chai.logMe())

const masalaChai = new User("masalaChai")
// console.log(masalaChai.addCourse()) --->error not inherated
// console.log(masalaChai.logMe())

