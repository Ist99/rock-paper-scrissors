function getComputerChoice(computerChoices) {
    return computerChoices[(Math.floor(Math.random()*3))];
}

let computerChoices = ['rock', 'paper', 'scrissors'];
let playerChoices = ['scrissors', 'rock', 'paper'];

let a = 0;
let b = 0;


function playRound (computerSelection, playerSelection) {
    let x = computerChoices.indexOf(computerSelection);
    let y = playerChoices.indexOf(playerSelection);
    if (computerSelection == playerSelection) {
        div2.textContent = 'Draw';
    } else if (x !== y) {
        div2.textContent = 'You won this round! ' + playerChoices[y].toUpperCase() + ' beats ' + computerChoices[x].toUpperCase() + '!';
        ++a;
        div1.textContent = a + ' : ' + b;
    } else {
        div2.textContent = 'Loser! ' + computerChoices[x].toUpperCase() + ' beats ' + playerChoices[y].toUpperCase() + '!';
        ++b;
        div1.textContent = a + ' : ' + b;
    }
}


const container = document.querySelector('#container');

for (let i = 1; i<=3; i++) {
    container.appendChild(document.createElement('button')); 
}

const btn1 = document.querySelector('#container button:nth-of-type(1)');
const btn2 = document.querySelector('#container button:nth-of-type(2)');
const btn3 = document.querySelector('#container button:nth-of-type(3)');


div1 = document.createElement('div');
document.body.appendChild(div1);
div1.textContent = a + ' : ' + b;

div2 = document.createElement('div');
document.body.appendChild(div2);
div2.textContent = "START!";

function finalOfGame(playerWin) {
    if (playerWin) {
        div2.textContent = "YOU WON! " + a + ' : ' + b + "! PLAY AGAIN?";
        a = 0; 
        b = 0;
        div1.textContent = a + ' : ' + b;
    } else {
        div2.textContent = "YOU LOST! " + a + ' : ' + b + "! PLAY AGAIN?";
        a = 0;
        b = 0;
        div1.textContent = a + ' : ' + b;
        };
}

btn1.addEventListener("click", function() {
    playRound(getComputerChoice(computerChoices), 'rock');
    if (a == 5) {
        finalOfGame(true);
    }
    else if (b == 5) {
        finalOfGame(false);
    }
});

btn2.addEventListener("click", function() {
    playRound(getComputerChoice(computerChoices), 'paper');
    if (a == 5) {
        finalOfGame(true);
    }
    else if (b == 5) {
        finalOfGame(false);
    }
});

btn3.addEventListener("click", function() {
    playRound(getComputerChoice(computerChoices), 'scrissors');
    if (a == 5) {
        finalOfGame(true);
    }
    else if (b == 5) {
        finalOfGame(false);
    }
});