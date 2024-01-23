// Query selectors
const grid = document.querySelector(".grid");
const endGameScreen = document.querySelector(".end-game-screen");
const playAgainBtn = document.querySelector(".play-again");
const scoreDisplay = document.querySelector(".score");
const endGameText = document.querySelector(".end-game-text");

// Game variables
let currentNumbOfBombs = 0;
const totalNumbOfBombs = 5;
const bombsArray = [];
let currentScore = 0;
const winningScore = 5;

// Random generator of bomb locations
while (currentNumbOfBombs < totalNumbOfBombs) {
  const randomNumber = Math.floor(Math.random() * 100);
  if (!bombsArray.includes(randomNumber)) {
    bombsArray.push(randomNumber);
    currentNumbOfBombs++;
  }
}

// console.log(bombsArray);
// console.log(bombsArray.length);

// Making game board
// console.log("Hello");
// console.log(grid);
// console.log(endGameScreen);

function gameOver(isVictory) {
  if (isVictory) {
    endGameScreen.classList.add("win");
    endGameText.innerText = "You Won!";
  }
  showAllBombs();
  endGameScreen.classList.remove("hidden");
}

function showAllBombs() {
  for (let i = 0; i < 100; i++)
    if (bombsArray.includes(i)) {
      let cell = document.querySelector(`.num-${i}`);
      cell.classList.add("cell-bomb");
      cell.classList.add("cell-clicked-bomb");
    }
}

function updateScore() {
  currentScore++;
  scoreDisplay.innerText = currentScore.toString().padStart(5, "0");
  if (currentScore === winningScore) {
    gameOver(true);
  }
}

for (let i = 0; i < 100; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.classList.add(`num-${i}`);
  cell.addEventListener("click", function () {
    // cell clicked has bomb
    if (bombsArray.includes(i)) {
      cell.classList.add("cell-bomb");
      cell.classList.add("cell-clicked-bomb");
      gameOver(false);
    }
    // Cell clicked doesnt have bomb
    else {
      cell.classList.add("cell-clicked");
      updateScore();
    }
  });

  grid.appendChild(cell);
}

playAgainBtn.addEventListener("click", function () {
  location.reload();
});
