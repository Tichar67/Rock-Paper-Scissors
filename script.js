
function playGame() {

const string1 = "rock"
const string2 = "paper"
const string3 = "scissors"

function getComputerChoice(){
    const game = Math.floor(Math.random() * 3)

    if (game == 0) {
    return "rock"
  }
  else if (game == 1){
    return "paper"
  }
  else if (game == 2) {
    return "scissors"
    }
    return game;
}


function getHumanChoice(){
    let human = prompt("Rock, Paper or Scissors?")

    if (human == "Rock") {
    return "rock"
  }
  else if (human == "Paper"){
    return "paper"
  }
  else if (human == "Scissors") {
    return "scissors"
    }
    return human
}


let humanScore = 0;
let computerScore = 0;


  function playRound(humanChoice, computerChoice){
    /*humanChoice = humanChoice.toUpperCase() 
    This code breaks the function*/


    if (humanChoice == computerChoice) {
        console.log(`It's a tie! Your score is ${humanScore}. Computer score is ${computerScore}.`);

    }
    else if ((humanChoice == "rock") && (computerChoice == "scissors") || 
    (computerChoice == "paper") && (humanChoice == "rock") ||
    (computerChoice == "scissors") && (humanChoice == "rock")) {
      ++humanScore;
      console.log(`Player wins! Your score is ${humanScore}. Computer score is ${computerScore}.`);
    }
    else if ((humanChoice == "paper") && (computerChoice == "scissors") ||
    (humanChoice == "scissors") && (computerChoice == "rock") ||
    (computerChoice == "rock") && (humanChoice == "paper")) {
      ++computerScore;
      console.log(`Player lost! Your score is ${humanScore}. Computer score is ${computerScore}.`);
    }
}

for (let i = 0; i < 5; i++) {

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
    
    }

    if (humanScore > computerScore){
      console.log(`Your final score is ${humanScore}. Computer's final score is ${computerScore}. You won!`);
    }
    else if (humanScore < computerScore){
      console.log(`Your final score is ${humanScore}. Computer's final score is ${computerScore}. You lost!`);
    }
    else if (humanScore = computerScore){
      console.log(`Your final score is ${humanScore}. Computer's final score is ${computerScore}. It's a tie!`);
    }
}
playGame(); 
