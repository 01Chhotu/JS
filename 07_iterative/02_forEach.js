const coding = ["js", "java", "python", "cpp", "ruby"]

// coding.forEach(function(items){
//     console.log(items)
// })

coding.forEach((items)=>{
    // console.log(items)
})

function printMe(items){
    // console.log(items)
}
coding.forEach(printMe)

coding.forEach((items, index, arr)=>{
    // console.log(items, index, arr)
})

const myCoding = [
    {
        languageName: "javaScript",
        languageFillName: "js"
    },
    {
        languageName: "cpp",
        languageFillName: "c++"
    },
    {
        languageName: "python",
        languageFillName: "py"
    }
]

myCoding.forEach((items)=>{
    console.log(items.languageName)
})