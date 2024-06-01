const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')
// console.log(buttons)
function textChange(textColor){
    const text = document.querySelector('h1');
    const h = document.createElement('h1');
    h.textContent = `Background color is ${textColor}`;
    text.replaceWith(h);
};
buttons.forEach(function (button){
    // console.log(button)
    button.addEventListener('click', function(e){
        body.style.backgroundColor = e.target.id;
        textChange(e.target.id);
    })
})