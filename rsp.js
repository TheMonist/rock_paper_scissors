function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("It's a tie!");
        return null
    } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "PAPER") {
        console.log("You lose! Paper beats Rock");
        return false
    } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "SCISSORS") {
        console.log("You win! Rock beats Scissors");
        return true
    } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "ROCK") {
        console.log("You win! Paper beats Rock");
        return true
    } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "SCISSORS") {
        console.log("You lose! Scissors beats Paper");
        return false
    } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "ROCK") {
        console.log("You lose! Rock beats Scissors");
        return false
    } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "PAPER") {
        console.log("You win! Scissors beats Paper");
        return true
    } else {
        console.log("Invalid Inputs");
        return null
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound((playerSelection, computerSelection)));

function game() {
    for (i = 0; i < 5; i++);
    playerSelection = prompt()
    computerSelection = computerPlay();
    
}