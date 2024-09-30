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
    return "tie";
  }
  if (humanChoice == "rock" && computerChoice == "paper") {
    console.log("you lose");
    return "lose";
  }
  if (humanChoice == "scissors" && computerChoice == "rock") {
    console.log("you lose");
    return "lose";
  }
  if (humanChoice == "paper" && computerChoice == "scissors") {
    console.log("you lose");
    return "lose";
  }
  if (humanChoice == "rock" && computerChoice == "scissors") {
    console.log("you win");
    return "win";
  }
  if (humanChoice == "scissors" && computerChoice == "paper") {
    console.log("you win");
    return "win";
  }
  if (humanChoice == "paper" && computerChoice == "rock") {
    console.log("you win");
    return "win";
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

    if (result == "win") {
      humanScore += 1;
    }
    if (result == "tie") {
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
const displayResults = document.querySelector(".displayResults");
displayResults.innerText("Please select an option to start game");

const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorsButton = document.querySelector("#scissorsButton");

//rockButton.onclick = () => alert("hello world");
rockButton.addEventListener("click", () => {
  alert(playRound("rock", getComputerChoice()));
});

paperButton.addEventListener("click", () => {
  alert(playRound("paper", getComputerChoice()));
});

scissorsButton.addEventListener("click", () => {
  alert(playRound("scissors", getComputerChoice()));
});
