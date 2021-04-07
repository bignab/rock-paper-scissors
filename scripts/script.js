function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3);
    let computerMove = "Rock";
    switch(randomNumber) {
        case 0:
            computerMove = "rock";
            break;
        case 1:
            computerMove = "paper";
            break;
        case 2:
            computerMove = "scissors";
            break;        
    }
    return computerMove;
}

function playSingleRound(computerSelection, playerSelection) {
    let roundWinner = 1; // -1 means the player loses, 0 means the player draws, and 1 means the player wins
    switch(computerSelection) {
        case "rock":
            switch(playerSelection) {
                case "rock":
                    roundWinner = 0;
                    break;
                case "paper":
                    roundWinner = 1;
                    break;
                case "scissors":
                    roundWinner = -1;
                    break;
            }
            break;
        case "paper":
            switch(playerSelection) {
                case "rock":
                    roundWinner = -1;
                    break;
                case "paper":
                    roundWinner = 0;
                    break;
                case "scissors":
                    roundWinner = 1;
                    break;
                }
                break;
        case "scissors":
            switch(playerSelection) {
                case "rock":
                    roundWinner = 1;
                    break;
                case "paper":
                    roundWinner = -1;
                    break;
                case "scissors":
                    roundWinner = 0;
                    break;
        }
        break;
    }
    return roundWinner;
}

function game() {
    let playerTally = 0;
    let computerTally = 0;    
    for (i = 0; i < 5; i++) {
        let computerSelection = computerPlay();
        let playerSelection = promptPlayerSelection();
        let roundResult = playSingleRound(computerSelection, playerSelection);
        switch(roundResult) {
            case -1:
                console.log("You lost! Computer played " + computerSelection + " and you played " + playerSelection);
                break;
            case 0:
                console.log("You drew! Computer played " + computerSelection + " and you played " + playerSelection);
                break;
            case 1:
                console.log("You won! Computer played " + computerSelection + " and you played " + playerSelection);
                break;
        }
        playerTally += isMaximumOf(0, roundResult); // Player tally will increase if player wins (roundResult is 1) and will be 0 otherwise
        computerTally += isMaximumOf(0, roundResult*-1); // Computer tally will increase if player wins (roundResult is -1) and will be 0 otherwise
    }
    
    console.log("Total tally is " + playerTally);
    console.log("Total computer tally is " + computerTally);
}

function promptPlayerSelection() {
    let playerInput = prompt("Please enter rock, paper, or scissors", "rock");
    playerInput = playerInput.toLowerCase();
    return playerInput;
}

function isMaximumOf(firstNumber, secondNumber) {
    if (firstNumber >= secondNumber) {
        return firstNumber;
    }
    else {
        return secondNumber;
    }
}

function isMinimumOf(firstNumber, secondNumber) {
    if (firstNumber >= secondNumber) {
        return seconNumber;
    }
    else {
        return firstNumber;
    }
}