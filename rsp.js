function computerPlay(){
    let num = Math.floor(Math.random() * 3);
    return num === 0 ? "Rock"
        : num === 1 ? "Paper"
        : "scissors";
}

// let computerSelection = computerPlay();

document.querySelector('button').addEventListener('click', playRound);

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
    let playerSelection, computerSelection, result;
    let playerWins = 0;
    let computerWins = 0;
    const selections = ["ROCK", "PAPER", "SCISSORS"]
    //for (i = 0; i < 5; i++);//
    playerSelection = prompt()
    computerSelection = computerPlay();
    
    while (!(selections.includes(playerSelection.toUpperCase()))) {
        playerSelection =prompt();
    }

    console.log(`User plays ${playerSelection}, Computer plays ${computerSelection}`);
    result = (gameRound(playerSelection, computerSelection));

    if (result) {
        playerWins += 1;
    } else if (result === false) {
        computerWins += 1;
    }
}   console.log(`Current Score - Player: $(playerWins), Computer: $(computerWins)`);

if (playerWins > computerWins) {
    return "User Wins!"
} else if (computerWins > playerWins) {
    return "Computer Wins! You Lose"
} else {
    return "No one wins! Play again?"
}

