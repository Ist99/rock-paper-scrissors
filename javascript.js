function getComputerChoice(choices) {
    return choices[(Math.floor(Math.random()*3))];
}

let choices = ['rock', 'paper', 'scrissors'];



function playRound(computerSelection) {
    let playerSelection = prompt('Rock? Paper? Scrissors? Choose your weapon!');

    if (playerSelection.toLowerCase() == 'rock') {
        if (computerSelection == 'rock') {
            alert('Draw');
            return(a,b);
        }
        else if (computerSelection == 'paper') {
            alert('Loser! Paper beats rock! Muhahahahhhahahaha!');
            return(a,++b);
        }     
        else {
            alert('You won! Rock beats scrissors!');
            return(++a,b);
        }
    }

    else if (playerSelection.toLowerCase() == 'paper') {
        if (computerSelection == 'paper') {
            alert('Draw');
            return(a,b);
        }
        else if (computerSelection == 'scrissors') {
            alert('Loser! Scrissors beats paper! Muhahahahhhahahaha!');
            return(a,++b);
        }     
        else {
            alert('You won! Paper beats rock!');
            return(++a,b);
        }
}

    else if (playerSelection.toLowerCase() == 'scrissors') {
        if (computerSelection == 'scrissors') {
            alert('Draw');
            return(a,b);
    }
        else if (computerSelection == 'rock') {
            alert('Loser! Rock beats scrissors! Muhahahahhhahahaha!');
            return(a,++b);
        }     
        else {
            alert('You won! Scrissors beats paper!');
            return(++a,b);
    }
} 

    else {alert('FAIL! MINUS ONE POINT FOR YOU!');
         return(--a,b);            
}
}    



let a = 0;
let b = 0;

function play() {
    for (let i = 0; i < 5; i++) {
    (playRound(getComputerChoice(choices)));
    }
}

alert("5 ROUNDS OF ROCK-PAPER-SCRISSORS! LET'S START!")
play();
if (a>b) {
    alert('You WON! ' + a + ':' + b);
}
    else if (a==b) {
        alert('DRAW! ' + a + ':' + b);
    }
        else {
            alert('You LOST! ' + a + ':' + b);
        }



