function getComputerChoice() {
  let randomVal = Math.random();
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
  let choice = prompt();
  console.log("You: " + choice.toLowerCase());
  return choice.toLowerCase();
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

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let rounds = 0;

  while (rounds < 5) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    console.log("Computer: " + computerChoice);

    let result = playRound(humanChoice, computerChoice);
    console.log(result);

    if (result == 1) {
      humanScore += 1;
    }
    if (result == -1) {
      computerScore += 1;
    }
    rounds += 1;

    console.log("You: " + humanScore);
    console.log("Computer " + computerScore);
  }

  if (humanScore > computerScore) {
    console.log("You've won, gz!");
  }
  if (computerScore > humanScore) {
    console.log("u suck");
  }
  if (computerScore == humanScore) {
    console.log("tied! try again");
  }
}

//playGame();
//
const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorsButton = document.querySelector("#scissorsButton");

//rockButton.onclick = () => alert("hello world");
rockButton.addEventListener("click", () => {
  alert("helloWrold");
});
