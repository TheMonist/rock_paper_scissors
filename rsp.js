let playerSelection = "";
let computerSelection = "";

//Random Number Generator for Computer
const computerPlay = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "ROCK";
    } else if (randomNumber === 1) {
        return "PAPER";
    } else if (randomNumber === 2) {
        return "SCISSORS";
    } 
}
console.log(computerPlay());

//document.querySelector('button').addEventListener('click', playRound);

// Logic for Game
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

//Game Rounds
function play() {
    let playerSelection, computerSelection, result;
    let computerScore = 0;
    let playerScore = 0;
    const selections = ["ROCK", "PAPER", "SCISSORS"];

    // Loop for five games
    for (let i = 0; i < 5; i ++) {
        let playerSelction = prompt("Pick a move");
        const computerSelection = computerPlay();

        //Loop for prompt
        while((!selections.includes(playerSelection))) {
            playerSelection = prompt("Pick a move");
        }

        console.log(`User plays ${playerSelection}, Computer plays ${computerSelection}`);
        result = (playround(playerSelection, computerSelection));

        //Scorekeeping
        if(playerScore > computerScore) {
            console.log("User Wins");
            return "User Wins"
        } else if (computerScore > playerScore) {
            console.log("Computer Wins");
            return "Computer Wins";
        } else {
            console.log("Tie");
            return "No One Wins! Play Again?";
        }
    }
}

play();