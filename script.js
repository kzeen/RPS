function getRandomElement(array) {
    return Math.floor(Math.random() * array.length);
}

function getComputerChoice() {
    const computerChoices = ["Rock", "Paper", "Scissors"];
    return computerChoices[getRandomElement(computerChoices)];
}