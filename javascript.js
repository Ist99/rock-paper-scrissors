function getComputerChoice(choices) {
    return choices[(Math.floor(Math.random()*3))];
}

let choices = ['rock', 'paper', 'scrissors'];

let a = 0;
let b = 0;



function playRound(computerSelection, playerSelection) {

    if (playerSelection.toLowerCase() == 'rock') {
        if (computerSelection == 'rock') {
            div2.textContent = 'Draw';
        }
        else if (computerSelection == 'paper') {
            div2.textContent = 'Loser! Paper beats rock! Muhahahahhhahahaha!';
            ++b;
        }     
        else {
            div2.textContent = 'You won! Rock beats scrissors!';
            ++a;
        }
    }

    else if (playerSelection.toLowerCase() == 'paper') {
        if (computerSelection == 'paper') {
            div2.textContent = 'Draw';
        }
        else if (computerSelection == 'scrissors') {
            div2.textContent = 'Loser! Scrissors beats paper! Muhahahahhhahahaha!';
            ++b;
        }     
        else {
            div2.textContent = 'You won! Paper beats rock!';
            ++a;
        }
}

    else if (playerSelection.toLowerCase() == 'scrissors') {
        if (computerSelection == 'scrissors') {
            div2.textContent = 'Draw';
    }
        else if (computerSelection == 'rock') {
            div2.textContent = 'Loser! Rock beats scrissors! Muhahahahhhahahaha!';
            ++b;
        }     
        else {
            div2.textContent = 'You won! Scrissors beats paper!';
            ++a;
        }
}

div1.textContent = a + ' : ' + b;

setTimeout (function () {
    if (a == 5) {
        div2.textContent = "YOU WON! " + a + ' : ' + b + "! PLAY AGAIN?";
        a = 0; 
        b = 0;
        div1.textContent = a + ' : ' + b;
    } else if (b == 5) {
        div2.textContent = "YOU LOST! " + a + ' : ' + b + "! PLAY AGAIN?";
        a = 0;
        b = 0;
        div1.textContent = a + ' : ' + b;
        };
    }, 1000) 
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

btn1.addEventListener("click", function() {
    playRound(getComputerChoice(choices), 'rock');
});

btn2.addEventListener("click", function() {
    playRound(getComputerChoice(choices), 'paper');
});

btn3.addEventListener("click", function() {
    playRound(getComputerChoice(choices), 'scrissors');
});