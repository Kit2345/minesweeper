// Query selectors
const grid = document.querySelector(".grid");
const endGameScreen = document.querySelector(".end-game-screen");
const playAgainBtn = document.querySelector(".play-again");
const scoreDisplay = document.querySelector(".score");
const endGameText = document.querySelector(".end-game-text");

// Game variables
const totalNumberOfCells = 100;
let currentNumbOfBombs = 0;
const totalNumbOfBombs = 0;
const bombsArray = [7, 9, 17, 18, 19];
const bombsObj = {};
let currentScore = 0;
const winningScore = totalNumberOfCells - totalNumbOfBombs;

// Random generator of bomb locations
while (currentNumbOfBombs < totalNumbOfBombs) {
  const randomNumber = Math.floor(Math.random() * 100);
  if (!bombsArray.includes(randomNumber)) {
    bombsArray.push(randomNumber);
    currentNumbOfBombs++;
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

function updateScore() {
  currentScore++;
  scoreDisplay.innerText = currentScore.toString().padStart(5, "0");
  if (currentScore === winningScore) {
    gameOver(true);
  }
}

function checkBombsNearBy(clicked_id, position) {
  let bombsNearBy = 0;
  let cellsToCheck = [];

  switch (position) {
    case "corner-top-left":
      cellsToCheck = [clicked_id + 1, clicked_id + 10, clicked_id + 11];
      break;
    case "corner-top-right":
      cellsToCheck = [clicked_id - 1, clicked_id + 9, clicked_id + 10];
      break;
    case "corner-bottom-left":
      cellsToCheck = [clicked_id - 10, clicked_id - 9, clicked_id + 1];
      break;
    case "corner-bottom-right":
      cellsToCheck = [clicked_id - 11, clicked_id - 10, clicked_id - 1];
      break;
    case "edge-top":
      cellsToCheck = [
        clicked_id - 1,
        clicked_id + 1,
        clicked_id + 9,
        clicked_id + 10,
        clicked_id + 11,
      ];
      break;
    case "edge-left":
      cellsToCheck = [
        clicked_id - 10,
        clicked_id - 9,
        clicked_id + 1,
        clicked_id + 10,
        clicked_id + 11,
      ];
      break;
    case "edge-right":
      cellsToCheck = [
        clicked_id - 11,
        clicked_id - 10,
        clicked_id - 1,
        clicked_id + 9,
        clicked_id + 10,
      ];
      break;
    case "edge-bottom":
      cellsToCheck = [
        clicked_id - 11,
        clicked_id - 10,
        clicked_id - 9,
        clicked_id - 1,
        clicked_id + 1,
      ];
      break;
    default:
      cellsToCheck = [
        clicked_id - 11,
        clicked_id - 10,
        clicked_id - 9,
        clicked_id - 1,
        clicked_id + 1,
        clicked_id + 9,
        clicked_id + 10,
        clicked_id + 11,
      ];
  }

  for (let i = 0; i < cellsToCheck.length; i++) {
    if (bombsObj[cellsToCheck[i]] === "bomb") {
      bombsNearBy++;
    }
  }
  return bombsNearBy;
}

function emptyCellClicked(event) {
  const id = Number(event.target.id.slice(4));
  console.log("clicked_id", id);
  cell = document.querySelector(`#num-${id}`);
  // console.log(cell);
  // console.log(bombsObj.id);
  let bombsNearBy = 0;
  // console.log(bombsObj);
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
  console.log(position);

  bombsNearBy = checkBombsNearBy(id, position);

  cell.classList.add("cell-clicked");
  if (bombsNearBy > 0) {
    cell.innerText = bombsNearBy;
    cell.classList.add("bomb-nearby");
  }
}

for (let i = 0; i < 100; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  // cell.classList.add(`num-${i}`);
  cell.id = `num-${i}`;

  // Add bombs to bombsobj.
  if (bombsArray.includes(i)) {
    let key = i;
    bombsObj[key] = "bomb";
    // console.log(i, bombsObj.i);
  }

  cell.addEventListener("click", function () {
    // cell clicked has bomb
    if (bombsArray.includes(i)) {
      cell.classList.add("cell-bomb");
      cell.classList.add("cell-clicked-bomb");
      gameOver(false);
    }
    // Cell clicked doesnt have bomb
    else {
      emptyCellClicked(event);
      updateScore();
    }
  });

  grid.appendChild(cell);
}

playAgainBtn.addEventListener("click", function () {
  location.reload();
});

// Showing where the bombs are to make testing easier
console.log(bombsArray);
