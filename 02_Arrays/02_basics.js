const myArr = [0,1,2,3,4,5]
// console.log(myArr)
// myArr.push(3); add element last position
// myArr.pop(); removed element last position
// console.log("A: ", myArr)

// unshift shift
// myArr.unshift(9) add element start position
// myArr.shift()  removed element start position

// join operation convert arr into string 
// const arrN1 = myArr.join()

// slice splice

// const myn1 = myArr.slice(1, 3)
// it gives part of array and no any modification in array
// console.log(myn1)
// console.log("B ", myArr)

// const myn2 = myArr.splice(1, 3)
// it gives part of array include last postion and it modifi the original array
// console.log(myn2)
// console.log("C ", myArr)

const marvel_heros = ["Ironman", "thor", "spiderman"]
const dc_heros = ["batman", "superman", "flash"]

// marvel_heros.push(dc_heros) // it consider one element as dc_heros and push them
// console.log(marvel_heros)

// const allheros = marvel_heros.concat(dc_heros)
// it return new array with all element
// console.log(allheros) 

// const all_new_heros = [...marvel_heros, ...dc_heros]
// it know as sprid operation best way to concadinate array
// console.log(all_new_heros)

// const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

// const real_another_array = another_array.flat(Infinity)
// It convert into 1D array return new array 
// console.log(real_another_array)

// console.log(Array.isArray("chhotu"))
// console.log(Array.from("chhotu"))// it convert into array
// console.log(Array.from({name: "chhotu"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1, score2, score3))
// It convert into array

