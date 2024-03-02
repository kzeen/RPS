function getRandomElement(array) {
    return Math.floor(Math.random() * array.length);
}

function getComputerChoice() {
    const computerChoices = ["Rock", "Paper", "Scissors"];
    return computerChoices[getRandomElement(computerChoices)];
}

function getPlayerChoice() {
    let playerChoice = prompt("Enter your play:");
    // Format user input to only capitalize first letter
    playerChoice = playerChoice[0].toUpperCase() + playerChoice.slice(1).toLowerCase();
    return playerChoice;
}

function playRound(playerSelection, computerSelection) {
    let winner;

    if (playerSelection === computerSelection) {
        winner = "Tie";
    } else if ((playerSelection === "Rock" && computerSelection === "Paper")
     || (playerSelection === "Paper" && computerSelection === "Scissors") 
     || (playerSelection === "Scissors" && computerSelection === "Rock")) {
        winner = "Computer";
     } else {
        winner = "Player";
     }

     return winner;
}