function multiplefive(num){
    return num*5;
}
multiplefive.power =2
// console.log(multiplefive(5));
// console.log(multiplefive.power)
// console.log(multiplefive.prototype)
    // string ----> object  -----> null
    // function ----> Object -------> null
    // Array -------> Object -------> null

function CreatUser(usernmae, score){
    this.usernmae = usernmae
    this.score = score
}
CreatUser.prototype.printMe = function(){
    console.log(`${this.usernmae} price: ${this.score}`)
}
const price = new CreatUser("chai", 30);
const teaPrice = new CreatUser("tea", 50)
price.printMe()
teaPrice.printMe()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/