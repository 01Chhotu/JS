
function hexCode(){
    const hex = '0123456789ABCDEF';
    let color='#';
    for(let i=0; i<6; i++){
        let ind=Math.floor(Math.random()*10);
        color +=hex[ind]
    }
    return color;
};
let stopChange;
const StartcolorChange = function(){
    // console.log(hexCode());
    stopChange = setInterval(changeBgColor,1000)

    function changeBgColor(){
        document.body.style.backgroundColor = hexCode();
    }
}
const StopcolorChange = function(){
    clearInterval(stopChange)
    stopChange =null
}
document.querySelector("#start").addEventListener('click', StartcolorChange)
document.querySelector("#stop").addEventListener('click', StopcolorChange)
