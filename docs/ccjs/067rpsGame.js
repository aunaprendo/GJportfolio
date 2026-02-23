const options = ["Squirrel", "Nut", "Tree"];

function getRandomComputerResult() {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function hasPlayerWonTheRound(playerChoice, computerChoice) {
  return (
    (playerChoice === "Squirrel" && computerChoice === "Tree") ||
    (playerChoice === "Tree" && computerChoice === "Nut") ||
    (playerChoice === "Nut" && computerChoice === "Squirrel")
  );
}

let playerScore = 0;
let computerScore = 0;

function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();

  if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore++;
    return `Player wins! ${userOption} beats ${computerResult}`;
  } else if (computerResult === userOption) {
    return `It's a tie! Both chose ${userOption}`;
  } else {
    computerScore++;
    return `Computer wins! ${computerResult} beats ${userOption}`;
  }
}

const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

function showResults(userOption) {
  roundResultsMsg.innerText = getRoundResults(userOption);
  computerScoreSpanElement.innerText = computerScore;
  playerScoreSpanElement.innerText = playerScore;

  if (playerScore === 3 || computerScore === 3) {
    winnerMsgElement.innerText = `${
      playerScore === 3 ? "Player" : "Computer"
    } has won the game!`;

    resetGameBtn.style.display = "block";
    optionsContainer.style.display = "none";
  }
};
function resetGame() {
	playerScore = 0;
	computerScore = 0;
  computerScoreSpanElement.innerText = computerScore;
  playerScoreSpanElement.innerText = playerScore;
	resetGameBtn.style.display = "none";
	optionsContainer.style.display = "";
	winnerMsgElement.innerText = "";
	roundResultsMsg.innerText = "";
}

resetGameBtn.addEventListener("click", resetGame);

const SquirrelBtn = document.getElementById("squirrel-btn");
const NutBtn = document.getElementById("Nut-btn");
const TreeBtn = document.getElementById("Tree-btn");

SquirrelBtn.addEventListener("click", function () {
  showResults("Squirrel");
});

NutBtn.addEventListener("click", function () {
  showResults("Nut");
});

TreeBtn.addEventListener("click", function () {
  showResults("Tree");
});