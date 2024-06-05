const promiseOne = new Promise(function(resolve, reject){
    // Do asyn task
    // DataBase call, cryptography, network

    setTimeout(function(){
        console.log("Asyn task 1 is complete")
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("promise is consumed")
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Asyn task 2 is complete");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Asyn 2 is resolve")
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({usename: 'chhotu', course: 'JavaScript'})
    },1000)
}).then(function(user){
    console.log(user)
})

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true;
//         if(error){
//             resolve({usename: 'Java', price: 299})
//         }
//         else{
//             reject('E: something is wrong')
//         }
//     }, 1000)
// }).then(function(course){
//     console.log(course)
// }).catch(function(){
//     console.log("Some thing went wrong")
// })

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({usename: 'java', price: 199});
    }, 1000)
}).then(function(course){
    return course.usename;
}).then(function(username){
    console.log(username)
}).catch(function(){
    console.log("Some thing went wrong");
}).finally(function(){
    console.log("The promise is either resolve or reject")
})

// async function promiseSix(){
//     try {
//         const response = await promiseFive;
//         console.log(response)
//     } catch (error) {
//         console.log(error)
//     }
// }
// promiseSix();

// async function getAllUser(){
//     try {
//         const responce = await fetch('https://api.github.com/users/hiteshchoudhary')
//         // console.log(responce)
//         const data = await responce.json()
//     } catch (error) {
//         console.log('E: ', error)
//     }
// }

// getAllUser()

fetch('https://api.github.com/users/hiteshchoudhary')
.then(function(responce){
    return responce.json()
})
.then(function(data){
    console.log(data)
})
.catch(function(error){
    console.log(error)
})
