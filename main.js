// Query selectors
const grid = document.querySelector(".grid");
const endGameScreen = document.querySelector(".end-game-screen");
const playAgainBtn = document.querySelector(".play-again");
const scoreDisplay = document.querySelector(".score");
const endGameText = document.querySelector(".end-game-text");
const easyBtn = document.querySelector(".btn-easy");
const mediumBtn = document.querySelector(".btn-medium");
const hardBtn = document.querySelector(".btn-hard");

// Game variables
const totalNumberOfCells = 100;
let currentNumbOfBombs = 0;
let totalNumbOfBombs = 10;
let bombsArray = [];
let bombsObj = {};
let currentScore = 0;
let winningScore = totalNumberOfCells - totalNumbOfBombs;
let cellsClicked = [];
let currentDifficulty = "easy";

function resetInitialVariables(difficulty) {
  currentNumbOfBombs = 0;
  bombsArray = [];
  bombsObj = {};
  currentScore = 0;
  winningScore = totalNumberOfCells - totalNumbOfBombs;
  cellsClicked = [];

  switch (difficulty) {
    case "easy":
      totalNumbOfBombs = 10;
      break;
    case "medium":
      totalNumbOfBombs = 20;
      break;
    case "hard":
      totalNumbOfBombs = 30;
      break;
  }
}

function generateBombs() {
  // Random generator of bomb locations
  while (currentNumbOfBombs < totalNumbOfBombs) {
    const randomNumber = Math.floor(Math.random() * 100);
    if (!bombsArray.includes(randomNumber)) {
      bombsArray.push(randomNumber);
      currentNumbOfBombs++;
    }
  }
}

// Generates Grid and adds event listener to each cell
function generateGrid() {
  for (let i = 0; i < 100; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    // add id to each cell
    cell.id = `num-${i}`;

    // Add bombs to bombsobj.
    if (bombsArray.includes(i)) {
      let key = i;
      bombsObj[key] = "bomb";
      // console.log(i, bombsObj.i);
    }

    cell.addEventListener("click", handleClick);

    grid.appendChild(cell);
  }
}

// Reset grid
function resetGrid() {
  grid.innerHTML = "";
  endGameScreen.classList.remove("win");
  endGameScreen.classList.add("hidden");
  endGameText.innerText = "Game Over!";
}

// Function to handle cell clicked
function handleClick(event) {
  // Extracts just number from id of div
  const id = Number(event.target.id.slice(4));
  console.log("id", id);
  cell = document.querySelector(`#num-${id}`);

  // if shiftKey is pressed
  if (event.shiftKey) {
    // console.log("shift key pressed");
    if (cell.innerText === "X") {
      cell.classList.remove("bomb-suspect");
      cell.innerText = "";
    } else {
      cell.classList.add("bomb-suspect");
      cell.innerText = "X";
    }
  } else if (cell.innerText === "X") {
    console.log("Protected cell");
  } else {
    // cell clicked has bomb
    if (bombsArray.includes(id)) {
      cell.classList.add("cell-bomb");
      cell.classList.add("cell-clicked-bomb");
      gameOver(false);
    }
    // Cell clicked doesnt have bomb
    else {
      handleEmptyCellClicked(id);
    }
  }
}

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
      let cell = document.querySelector(`#num-${i}`);
      cell.classList.add("cell-bomb");
      cell.classList.add("cell-clicked-bomb");
    }
}

function handleEmptyCellClicked(id) {
  cell.removeEventListener("click", handleClick);

  cell = document.querySelector(`#num-${id}`);
  const position = cellPosition(id);
  const cellsToCheck = calculateCellsToCheck(id, position);

  calculateBombsNearBy(id, cell, cellsToCheck);
}

function cellPosition(id) {
  let position = "";

  if (id === 0) {
    position = "corner-top-left";
  } else if (id === 9) {
    position = "corner-top-right";
  } else if (id === 90) {
    position = "corner-bottom-left";
  } else if (id === 99) {
    position = "corner-bottom-right";
  } else if (id >= 1 && id <= 8) {
    position = "edge-top";
  } else if (id % 10 === 0) {
    position = "edge-left";
  } else if ((id + 1) % 10 === 0) {
    position = "edge-right";
  } else if (id >= 91 && id <= 98) {
    position = "edge-bottom";
  } else {
    position = "middle";
  }

  // check position is correct
  return position;
}

function calculateCellsToCheck(id, position) {
  let cellsToCheck = [];

  switch (position) {
    case "corner-top-left":
      cellsToCheck = [id + 1, id + 10, id + 11];
      break;
    case "corner-top-right":
      cellsToCheck = [id - 1, id + 9, id + 10];
      break;
    case "corner-bottom-left":
      cellsToCheck = [id - 10, id - 9, id + 1];
      break;
    case "corner-bottom-right":
      cellsToCheck = [id - 11, id - 10, id - 1];
      break;
    case "edge-top":
      cellsToCheck = [id - 1, id + 1, id + 9, id + 10, id + 11];
      break;
    case "edge-left":
      cellsToCheck = [id - 10, id - 9, id + 1, id + 10, id + 11];
      break;
    case "edge-right":
      cellsToCheck = [id - 11, id - 10, id - 1, id + 9, id + 10];
      break;
    case "edge-bottom":
      cellsToCheck = [id - 11, id - 10, id - 9, id - 1, id + 1];
      break;
    default:
      cellsToCheck = [
        id - 11,
        id - 10,
        id - 9,
        id - 1,
        id + 1,
        id + 9,
        id + 10,
        id + 11,
      ];
  }
  return cellsToCheck;
}

function calculateBombsNearBy(id, cell, cellsToCheck) {
  let bombsNearBy = 0;
  for (let i = 0; i < cellsToCheck.length; i++) {
    if (bombsObj[cellsToCheck[i]] === "bomb") {
      bombsNearBy++;
    }
  }

  displayClickedCell(id, cell, bombsNearBy);
}

function displayClickedCell(id, cell, bombsNearBy) {
  cell.classList.add("cell-clicked");
  cellsClicked.push(id);

  if (bombsNearBy > 0) {
    cell.innerText = bombsNearBy;
    cell.classList.add("bomb-nearby");
  }

  updateScore();

  if (bombsNearBy === 0) {
    const position = cellPosition(id);
    const cellsToCheck = calculateCellsToCheck(id, position);

    for (let i = 0; i < cellsToCheck.length; i++) {
      if (!cellsClicked.includes(cellsToCheck[i])) {
        cellsClicked.push(cellsToCheck[i]);
        handleEmptyCellClicked(cellsToCheck[i]);
      }
    }
  }
}

function updateScore() {
  currentScore++;
  scoreDisplay.innerText = currentScore.toString().padStart(5, "0");
  if (currentScore === winningScore) {
    gameOver(true);
  }
}

playAgainBtn.addEventListener("click", function () {
  restartGame(currentDifficulty);
});

easyBtn.addEventListener("click", function () {
  changeDifficulty("easy");
  restartGame(currentDifficulty);
});

mediumBtn.addEventListener("click", function () {
  changeDifficulty("medium");
  restartGame(currentDifficulty);
});

hardBtn.addEventListener("click", function () {
  changeDifficulty("hard");
  restartGame(currentDifficulty);
});

function changeDifficulty(difficulty) {
  currentDifficulty = difficulty;

  switch (difficulty) {
    case "easy":
      easyBtn.classList.add("btn-easy-selected");
      mediumBtn.classList.remove("btn-medium-selected");
      hardBtn.classList.remove("btn-hard-selected");
      break;
    case "medium":
      easyBtn.classList.remove("btn-easy-selected");
      mediumBtn.classList.add("btn-medium-selected");
      hardBtn.classList.remove("btn-hard-selected");
      break;
    case "hard":
      easyBtn.classList.remove("btn-easy-selected");
      mediumBtn.classList.remove("btn-medium-selected");
      hardBtn.classList.add("btn-hard-selected");
      break;
  }
}

// Showing where the bombs are to make testing easier
// console.log(bombsArray);

// Restart game
function restartGame(difficulty) {
  resetGrid();
  resetInitialVariables(difficulty);
  gameStart();
  scoreDisplay.innerText = currentScore.toString().padStart(5, "0");
  console.log(currentDifficulty);
}

// Game start
function gameStart() {
  // Game variables
  generateBombs();
  generateGrid();
}

gameStart();
