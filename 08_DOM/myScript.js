document.getElementById('title')
// <h1 id=​"title" class=​"heading">​DOM learning on chai aur code​</h1>​


const Title = document.getElementById('title')

document.getElementById('title').id
// 'title'
document.getElementById('title').className
// 'heading'

document.getElementById('title').getAttribute('id')
// 'title'
document.getElementById('title').setAttribute('class', 'test heading')

// Title.style.backgroundColor="red"
// Title.style.padding = "10px"
// Title.style.borderRadius="15px"

// Title.innerHTML // ---> it give entire html tag
// output -- >// 'DOM learning on chai aur code'
// Title.innerText //--> it show only display text 
// 'DOM learning on chai aur code'
// Title.textContent // ---> it show entire text also hidden text
// 'DOM learning on chai aur code'

// document.querySelector('#title') //---> for id
// <h1 id=​"title" class=​"heading">​DOM learning on chai aur code​</h1>​
// document.querySelector('.heading') // ---> class

