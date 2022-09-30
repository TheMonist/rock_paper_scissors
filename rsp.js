let playerScore = 0;
let computerScore = 0;
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const resetButton = document.querySelector('#reset');
const p = document.createElement('p');
const outcomeDiv = document.querySelector('.result');
const playerScoreSpan = document.querySelector('#player-score');
const computerScoreSpan = document.querySelector('#computer-score');

const computerPlay = () => {
  const options = ['rock', 'paper', 'scissors'];
  const randomNumber = (Math.floor(Math.random() * options.length));
  return options[randomNumber];
}

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return 'Tie';
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore +=1;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore +=1;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore +=1;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore +=1;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore +=1;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore +=1;
  } 
}

const checkWin = (playerScore, computerScore) => {
  if (playerScore === 5 ) {
    const h2 = document.createElement('h2');
    h2.innerText = 'You Won!';
    outcomeDiv.append(h2);
  }
  
  if (computerScore === 5) {
    const h2 = document.createElement('h2');
    h2.innerText = 'You Lost!';
    outcomeDiv.append(h2);
  }
}

rockButton.addEventListener('click', () => {
  const computerSelection = computerPlay();
  const playerSelction = 'rock';
  playRound(playerSelction, computerSelection);
  updateScores(playerScore, computerScore);
  checkWin(playerScore, computerScore);
});

paperButton.addEventListener('click', () => {
  const computerSelection = computerPlay();
  const playerSelection = 'paper';
  playRound(playerSelection, computerSelection);
  updateScores(playerScore, computerScore);
  checkWin(playerScore, computerScore);
  
});

scissorsButton.addEventListener('click', () => {
  const computerSelection = computerPlay();
  const playerSelection = 'scissors';
  playRound(playerSelection, computerSelection);
  updateScores(playerScore, computerScore);
  checkWin(playerScore, computerScore);
});

resetButton.addEventListener('click', () => {
  location.reload();
});

const updateScores = (playerScore, computerScore) => {
  playerScoreSpan.innerText = `Player Score: ${playerScore}`;
  computerScoreSpan.innerText = `Computer Score: ${computerScore}`;
};