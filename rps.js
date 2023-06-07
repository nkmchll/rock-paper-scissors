
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

function playRound (playerSelection, computerSelection){
    if (computerSelection === playerSelection){
        return "It's a tie!";
    }
    else if (computerSelection === "rock" && playerSelection === "paper"){
        userScore++;
        return "You win! Paper beats Rock";
    }
    else if (computerSelection === "paper" && playerSelection === "scissors"){
        userScore++;

        return "You win! Scissors beats Paper";
    }
    else if (computerSelection === "scissors" && playerSelection === "rock"){
        userScore++;
        return "You win! Rock beats Scissors";
    }
    else{
        computerScore++;
        return `You lose, ${computerSelection} beats ${playerSelection}!`;
    }
}

function game(){
    for (let i = 0; i < 5; i++){
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("Your Score: " + userScore);
        console.log("Computer's Score: " + computerScore);
    }

    if (computerScore>userScore){
        console.log("You lost the game!");
    }
    else{
        console.log("You won the game!");
    }
}
    
console.log(game());
