

function initalizeButtonEventListeners() {
    const buttonRock = document.querySelector('#rockButton');
    const buttonPaper = document.querySelector('#paperButton');
    const buttonScissors = document.querySelector('#scissorsButton');

    buttonRock.addEventListener('click', () => {
        game("rock");
    });

    buttonPaper.addEventListener('click', () => {
        game("paper");
    });

    buttonScissors.addEventListener('click', () => {
        game("scissors");
    });
}

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

function playSingleRound(playerSelection, computerSelection) {
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
    addRPSTileToScoreboard(playerSelection, computerSelection, roundWinner);
    return roundWinner;
}

function game(playerSelection) {
    const playerScoreBox = document.querySelector('#playerScoreBox');
    const computerScoreBox = document.querySelector('#computerScoreBox');

    if ((+playerScoreBox.textContent + +computerScoreBox.textContent) > 4) { // If the sum of the player and computer's scores is 5 or above, reset the scoreboard
        resetScoreBoard();
    }

    let playerTally = playerScoreBox.textContent;
    let computerTally = computerScoreBox.textContent;

    roundResult = playSingleRound(playerSelection, computerPlay());

    playerTally = +playerTally + +isMaximumOf(0, roundResult); // Player tally will increase if player wins (roundResult is 1) and will be 0 otherwise
    computerTally = +computerTally + +isMaximumOf(0, roundResult*-1); // Computer tally will increase if player wins (roundResult is -1) and will be 0 otherwise

    playerScoreBox.textContent = playerTally;
    computerScoreBox.textContent = computerTally;
    
    checkWinCondition();
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

function addRPSTileToScoreboard(playerSelection, computerSelection, roundWinner) {
    const scoreBoardContainer = document.querySelector('#gameResultsBox');

    while (scoreBoardContainer.firstChild) {
        scoreBoardContainer.removeChild(scoreBoardContainer.lastChild);
    }

    const scoreBoardTileOne = document.createElement('div');
    const scoreBoardTileScore = document.createElement('div');
    const scoreBoardTileTwo = document.createElement('div');

    scoreBoardTileOne.classList.add('rpsButtonNoHover');
    scoreBoardTileOne.classList.add('rpsButtonGreenBorder');
    switch(playerSelection) {
        case "rock":
            scoreBoardTileOne.textContent = "R";
            break;
        case "paper":
            scoreBoardTileOne.textContent = "P";
            break;
        case "scissors":
            scoreBoardTileOne.textContent = "S";
            break;
    }

    scoreBoardTileScore.classList.add('rpsButtonNoHover');
    scoreBoardTileScore.classList.add('rpsButtonSmallerText');
    switch(roundWinner) {
        case 1:
            scoreBoardTileScore.textContent = "Win";
            break;
        case 0: 
            scoreBoardTileScore.textContent = "Draw";
            break;
        case -1: 
            scoreBoardTileScore.textContent = "Lose";
            break;
    }

    scoreBoardTileTwo.classList.add('rpsButtonNoHover');
    scoreBoardTileTwo.classList.add('rpsButtonRedBorder');
    switch(computerSelection) {
        case "rock":
            scoreBoardTileTwo.textContent = "R";
            break;
        case "paper":
            scoreBoardTileTwo.textContent = "P";
            break;
        case "scissors":
            scoreBoardTileTwo.textContent = "S";
            break;
    }

    scoreBoardContainer.appendChild(scoreBoardTileOne);
    scoreBoardContainer.appendChild(scoreBoardTileScore);
    scoreBoardContainer.appendChild(scoreBoardTileTwo);

}

function resetScoreBoard() {
    const playerScoreBox = document.querySelector('#playerScoreBox');
    const computerScoreBox = document.querySelector('#computerScoreBox');

    playerScoreBox.textContent = 0;
    playerScoreBox.classList.remove("scoreBoxVictory");
    computerScoreBox.textContent = 0;
    computerScoreBox.classList.remove("scoreBoxVictory");
}

function checkWinCondition() {
    const playerScoreBox = document.querySelector('#playerScoreBox');
    const computerScoreBox = document.querySelector('#computerScoreBox');
    
    if ((+playerScoreBox.textContent + +computerScoreBox.textContent) > 4) {
        if (+playerScoreBox.textContent > +computerScoreBox.textContent) {
            playerScoreBox.classList.add("scoreBoxVictory");
        }
        else {
            computerScoreBox.classList.add("scoreBoxVictory");
        }
    }
}