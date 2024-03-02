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
    let roundOutcome;

    console.log(`You played: ${playerSelection} - Computer played: ${computerSelection}`);

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