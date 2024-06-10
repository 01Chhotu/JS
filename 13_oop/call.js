function setUsername(userName){
    this.userName = userName
}

function createUser(username, email, password){
    // setUsername(username) // call function used for current execution context other function ko pass kar deta ha
    setUsername.call(this, username)
    this.email = email
    this.password = password
}

const user = new createUser("chhotu", "chhotu@gamil.com", 1234);
console.log(user)