class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        return `USERNAME is${this.username}`
    }
    static createId(){   // ----> static function stop abstraction to access
        console.log("123")
    }
}
const chhotu = new User("chhotu");
// chhotu.createId(); 