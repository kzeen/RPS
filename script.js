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

function displayWinner(playerScore, computerScore) {
    let result = `Your score: ${playerScore} - Computer score: ${computerScore}\n`;
    if (playerScore === computerScore) {
        result += "It's a tie!";
    } else if (playerScore > computerScore) {
        result += "You win!";
    } else {
        result += "You lose!";
    }

    console.log(result);
}

function playGame() {
    let playerChoice, computerChoice, outcome;
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {        
        playerChoice = getPlayerChoice();
        computerChoice = getComputerChoice();
        outcome = playRound(playerChoice, computerChoice);

        console.log(outcome);

        if (outcome.slice(4, 7) === "win") {
            playerScore++;
        } else if (outcome.slice(4, 8) === "lose") {
            computerScore++;
        }
    }

    displayWinner(playerScore, computerScore);
}

playGame();