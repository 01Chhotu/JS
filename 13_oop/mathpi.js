const descripter = Object.getOwnPropertyDescriptor(Math, 'PI')
console.log(descripter)

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,
    orderChai: function(){
        console.log("chai nhi bni")
    }
}
console.log(chai)
// Object.defineProperty(chai, 'name', {
//     writable: false,
//     enumerable: false
// })
// const descripterChai = Object.getOwnPropertyDescriptor(chai, 'name');
// console.log(descripterChai)

for (const [key, value] of Object.entries(chai)) {
    if(typeof(value)!== 'function')
        console.log(`${key}: ${value}`)
}

