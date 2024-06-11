// class User{
//     constructor(email, password){
//         this.email = email
//         this.password = password
//     }

//     get email(){
//         return `${this._email.toUpperCase()}`
//     }
//     set email(value){
//         this._email = value;
//     }
//     get password(){
//         return `${this._password.toUpperCase()}`
//     }
//     set password(value){
//         this._password = value;
//     }
// }

// const chai = new User("chai@gmail.com", "abcd")
// console.log(chai.email)
// console.log(chai.password)

// ------>   Properties_getter_setter

// function User(email, password){
//     this._email = email
//     this._password = password
//     Object.defineProperty(this, 'email', {
//         get: function(){
//             return  this._email.toUpperCase()
//         },
//         set: function(value){
//             this.email = value
//         }
//     })
//     Object.defineProperty(this, 'password', {
//         get: function(){
//             return  this._password.toUpperCase()
//         },
//         set: function(value){
//             this.password = value
//         }
//     })
// }
// const chai = new User("chai@gmail.com", "abcd")
// console.log(chai.email)
// console.log(chai.password)

// ---------> Object getter and setter

const User = {
    _email: 'h@hc.com',
    _password: 'abc',

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email=value
    }
}
const tea = Object.create(User)
console.log(tea.email)