const myArray = [1,2,3,4,5,6]

// const mytotal = myArray.reduce(function (acc, currval){
//     return acc+currval
// }, 0)
// const mytotal = myArray.reduce((acc, currval) =>{
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc+currval
// }, 0)
const mytotal = myArray.reduce((acc, currval)=> acc+currval, 0)
console.log(mytotal)

const shoppingCard =[
    {
        itemName: "js course",
        price: 199
    },
    {
        itemName: "py course",
        price: 299
    },
    {
        itemName: "Mobile dev course",
        price: 599
    }
]

const pricePay = shoppingCard.reduce((acc, items)=>{
    return acc + items.price;
}, 0)

console.log(pricePay)