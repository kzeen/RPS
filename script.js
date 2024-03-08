function getRandomElement(array) {
    return Math.floor(Math.random() * array.length);
}

function getComputerChoice() {
    const computerChoices = ["Rock", "Paper", "Scissors"];
    return computerChoices[getRandomElement(computerChoices)];
}

function getPlayerChoice() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            playGame(button.textContent);
        });
    });
}

function playRound(playerSelection, computerSelection) {
    let roundOutcome;
    const div = document.querySelector(".display-outcome");
    const p = document.createElement("p");

    console.log(`You played: ${playerSelection} - Computer played: ${computerSelection}`);
    div.textContent = `You played: ${playerSelection} - Computer played: ${computerSelection}`;

    if (playerSelection === computerSelection) {
        roundOutcome = "It's a tie!";
        p.textContent = "It's a tie!";
    } else if ((playerSelection === "Rock" && computerSelection === "Paper")
     || (playerSelection === "Paper" && computerSelection === "Scissors") 
     || (playerSelection === "Scissors" && computerSelection === "Rock")) {
        roundOutcome = `You lose! ${computerSelection} beats ${playerSelection}`;
        p.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
     } else {
        roundOutcome = `You win! ${playerSelection} beats ${computerSelection}`;
        p.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
     }
     div.appendChild(p);
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

function playGame(currentPlayerChoice) {
    const playerChoice = currentPlayerChoice;
    const computerChoice = getComputerChoice();
    const outcome = playRound(playerChoice, computerChoice);
    let playerScore = 0;
    let computerScore = 0;

    console.log(outcome);

    if (outcome.slice(4, 7) === "win") {
        playerScore++;
    } else if (outcome.slice(4, 8) === "lose") {
        computerScore++;
    }

    displayWinner(playerScore, computerScore);
}

getPlayerChoice();