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
}

getHumanChoice();
var one = getComputerChoice();
console.log("Computer: " + one);
