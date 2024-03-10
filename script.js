const rockButton = document.querySelector(".rock-button");
const paperButton = document.querySelector(".paper-button");
const scissorsButton = document.querySelector(".scissors-button");
const playerScoreSpan = document.querySelector("span.player-score");
const computerScoreSpan = document.querySelector("span.computer-score");
const displayChoicesPara = document.querySelector(".display-choices");
const displayWinnerPara = document.querySelector(".display-winner");
const displayFinalWinnerPara = document.querySelector(".final-winner");
const restartButton = document.querySelector(".restart-button");

let playerScore = 0;
let computerScore = 0;

function getRandomElement(arrayLength) {
    return Math.floor(Math.random() * arrayLength);
}

function getComputerChoice() {
    const computerChoices = ["Rock", "Paper", "Scissors"];
    return computerChoices[getRandomElement(computerChoices.length)];
}

function isGameOver() {
    return playerScore === 5 || computerScore === 5;
}

function getRoundOutcome(playerSelection, computerSelection) {
    let roundOutcome;
    if (playerSelection === computerSelection) {
        roundOutcome = "It's a tie!";
    } else if ((playerSelection === "Rock" && computerSelection === "Paper")
     || (playerSelection === "Paper" && computerSelection === "Scissors") 
     || (playerSelection === "Scissors" && computerSelection === "Rock")) {
        roundOutcome = `You lose! ${computerSelection} beats ${playerSelection}`;
     } else {
        roundOutcome = `You win! ${playerSelection} beats ${computerSelection}`;
     }
     return roundOutcome;
}

function playRound(playerSelection, computerSelection) {
    displayChoicesPara.textContent = `You played: ${playerSelection} - Computer played: ${computerSelection}`;
    const roundOutcome = getRoundOutcome(playerSelection, computerSelection);
    displayWinnerPara.textContent = roundOutcome;
    return roundOutcome;
}

function incrementWinnerScore(roundOutcome) {
    if (roundOutcome.slice(4, 7) === "win") {
        playerScore++;
        displayNewScore("Player");
    } else if (roundOutcome.slice(4, 8) === "lose") {
        computerScore++;
        displayNewScore("Computer");
    }
}

function displayNewScore(roundWinner) {
    if (roundWinner === "Player") {
        playerScoreSpan.textContent = playerScore;
    } else if (roundWinner === "Computer") {
        computerScoreSpan.textContent = computerScore;
    }
}

function displayGameWinner() {
    let result;
    if (playerScore > computerScore) {
        result = "Good job! You won the game";
    } else {
        result = "Tough luck! You lost the game";
    }
    displayFinalWinnerPara.textContent = result;
    enable(restartButton);
}

function enable(DOMelement) {
    DOMelement.classList.remove("hidden");
}

function disable(DOMelement) {
    DOMelement.classList.add("hidden");
}

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;
    displayChoicesPara.textContent = "";
    displayWinnerPara.textContent = "";
    displayFinalWinnerPara.textContent = "";
    disable(restartButton);
}

function playGame(playerChoice) {
    if (isGameOver()) {
        enable(restartButton);
    } else {
        const outcome = playRound(playerChoice, getComputerChoice());
        incrementWinnerScore(outcome);
        if (isGameOver()) {
            displayGameWinner();
        }
    }
}

rockButton.addEventListener("click", () => playGame("Rock"));
paperButton.addEventListener("click", () => playGame("Paper"));
scissorsButton.addEventListener("click", () => playGame("Scissors"));
restartButton.addEventListener("click", restartGame);