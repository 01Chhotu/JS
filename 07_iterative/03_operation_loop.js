const myNums = [1, 2, 3, 4, 5, 6, 7, 8]

// const newNums= myNums.filter((items)=> {
//     return items>=5
// })
const newNums= myNums.filter((items)=> items>=5)
// console.log(newNums)

// const newArray = []
// myNums.forEach((items)=>{
//     if(items>=5){
//         newArray.push(items)
//     }
// })
// console.log(newArray)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//  const userBooks = books.filter((items)=> items.genre=="History")
 const userBooks = books.filter((items)=> {
    return items.genre=="History" && items.publish>=1995
})

// console.log(userBooks)

// Map iterative

const myNumber = [1,2,3,4,5,6,7,8,9]

// const newArray = myNumber.map((items)=> items+10)
const newArray = myNumber.map((items)=> {
    return items+10
})
// console.log(newArray)

// Chaining function

const newNumber = myNumber
                .map((items)=> items*10)
                .map((items) => items+1)
                .filter((items) => items>40)


console.log(newNumber)