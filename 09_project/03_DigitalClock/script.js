const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')

const div = document.createElement('div');
setInterval(function (){
    const data = new Date();
    div.textContent = data.toLocaleTimeString();
    // console.log(data.toLocaleTimeString())
    clock.appendChild(div)
    // clock.innerHTML = data.toLocaleTimeString();
}, 1000)