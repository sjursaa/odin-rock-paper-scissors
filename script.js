function getComputerChoice() {
  var randomVal = Math.random();
  if (randomVal < 0.33) {
    return "paper";
  }
  if (randomVal < 0.66) {
    return "scissors";
  }
  if (randomVal < 1) {
    return "rock";
  }
}

function getHumanChoice() {
  var choice = prompt();
  console.log("You: " + choice);
  return choice;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("tie");
    return 0;
  }
  if (humanChoice == "rock" && computerChoice == "paper") {
    console.log("you lose");
    return -1;
  }
  if (humanChoice == "scissors" && computerChoice == "rock") {
    console.log("you lose");
    return -1;
  }
  if (humanChoice == "paper" && computerChoice == "scissors") {
    console.log("you lose");
    return -1;
  }
  if (humanChoice == "rock" && computerChoice == "scissors") {
    console.log("you win");
    return 1;
  }
  if (humanChoice == "scissors" && computerChoice == "paper") {
    console.log("you win");
    return 1;
  }
  if (humanChoice == "paper" && computerChoice == "rock") {
    console.log("you win");
    return 1;
  }
}

var humanScore = 0;
var computerScore = 0;

var humanChoice = getHumanChoice();
var computerChoice = getComputerChoice();
console.log("Computer: " + computerChoice);

var result = playRound(humanChoice, computerChoice);
console.log(result);
if (result == 1) {
  humanScore += 1;
}
if (result == -1) {
  computerScore += 1;
}

console.log("You: " + humanScore);
console.log("Computer " + computerScore);
