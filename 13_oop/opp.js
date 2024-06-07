const user= {
    username: "chhotu",
    login: 8,
    signedIn: true,
    getUserDetails : function(){
        console.log(`Uername: ${this.username}`)
    }
}
// this used for current context give 
// console.log(user.username);
// console.log(user.getUserDetails());

function User(username, loginCount, isLoggedIn){
    this.myuseName=username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
}
// new mean hear we can create new context no affect on other function
const userOne = new User("chhotu", 3, true);
const userTwo = new User("vicky", 12, false);
console.log(userOne.constructor);
console.log(userTwo);

// Constructor it gives reference of itself 