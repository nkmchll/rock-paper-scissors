
function getComputerChoice(){
    let compChoice = Math.floor(Math.random()*3);
    if (compChoice == 0){
        return "rock";
    }
    else if (compChoice == 1){
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getPlayerChoice(){
    let playerChoice = prompt("Choose 1: Rock, Paper, or Scissors?")
    return playerChoice;
}

let userScore = 0;
let computerScore = 0;

const output = document.getElementById('output');

function playRound (playerSelection, computerSelection){
    
    if (computerSelection === playerSelection){
        output.textContent = "It's a tie!";
    }
    else if (computerSelection === "rock" && playerSelection === "paper"){
        userScore++;
        output.textContent = "You win! Paper beats Rock";
    }
    else if (computerSelection === "paper" && playerSelection === "scissors"){
        userScore++;
        output.textContent = "You win! Scissors beats Paper";
    }
    else if (computerSelection === "scissors" && playerSelection === "rock"){
        userScore++;
        output.textContent = "You win! Rock beats Scissors";
    }
    else{
        computerScore++;
        output.textContent = `You lose, ${computerSelection} beats ${playerSelection}!`;
    }
}

const rockButton = document.getElementById('rockButton');
const paperButton = document.getElementById('paperButton');
const scissorButton = document.getElementById('scissorButton');

rockButton.addEventListener('click',() => buttonClicked('rock'));
paperButton.addEventListener('click',() => buttonClicked('paper'));
scissorButton.addEventListener('click',() => buttonClicked('scissors'));

function buttonClicked(playerSelection) {
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    scoreTracker();
    if (userScore === 5 || computerScore === 5) {
        gameWinner();
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorButton.disabled = true;
    }
  }

function scoreTracker(){
    const myScore = document.getElementById('userScore');
    myScore.textContent = `Your Score: ${userScore}`;
    const compScore = document.getElementById('computerScore');
    compScore.textContent = `Computer's Score: ${computerScore}`;
}

const overallWinner = document.getElementById('gameWinner');

function gameWinner(){
    
    if (computerScore===5){
        overallWinner.textContent = "Game Over! YOU LOST! Press button to play again."; 
    }
    else if (userScore === 5){
       overallWinner.textContent = "Game Over! YOU WON! Press button to play again.";
    }
}

const playAgainButton = document.getElementById('playAgainButton');
playAgainButton.addEventListener('click',playAgain);

function playAgain() {
    userScore = 0;
    computerScore = 0;
    scoreTracker();
    overallWinner.textContent = "";
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorButton.disabled = false;

  }
