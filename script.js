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