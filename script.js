
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
    return game
}

    console.log(getComputerChoice())

function getHumanChoice(){
    let human = prompt("Rock, Paper or Scissors?")



    if (game == 0) {
    return "rock"
  }
  else if (game == 1){
    return "paper"
  }
  else if (game == 2) {
    return "scissors"
    }
    return game
}

    console.log(getHumanChoice())