const submit = document.querySelector('#subt')
const uesrInput = document.querySelector('#guessField')
const prevGuess = document.querySelector('.guesses')
const  remaining= document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas');

let randomNumber = parseInt(Math.random()*100+1);
console.log(randomNumber)
let numGuess=1;
let playGame = true;
const p = document.createElement('p')
if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(uesrInput.value);
        validteGuess(guess);
    })
}
const PrevGuessArray = [] 
function validteGuess(guess){
    if(isNaN(guess)){
        alert("Plase enter valid Integer");
    }
    else if(guess<1){
        alert("plase enter number more then 1");
    }
    else if(guess>100){
        alert("plase enter number less then 100");
    }
    else{
        PrevGuessArray.push(guess);
        if(numGuess===10){
            displayGuess(guess);
            displayMessage(`Game Over, random number is ${randomNumber}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess>randomNumber){
        displayMessage(`guess number is Tooo high`)
    }
    else if(guess<randomNumber){
        displayMessage(`guess number is Tooo low`)
    }
    else{
        displayMessage(`guess number is right you won the game`);
        endGame()
    }
}

function displayGuess(guess){
    uesrInput.value = ' ';
    prevGuess.innerHTML +=`${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`
}

function endGame(){
    uesrInput.value=' ';
    uesrInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new game</h2>`;
    startOver.appendChild(p);
    playGame=false;
    newGame();
}
function newGame(){
    const newgame = document.querySelector('#newGame');
    newgame.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random()*100+1)
        console.log(randomNumber)
        prevGuess.innerHTML='';
        lowOrHi.innerHTML='';
        numGuess=1;
        remaining.innerHTML = `${11-numGuess}`;
        uesrInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame=true;
    })
}


