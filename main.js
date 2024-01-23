// Query selectors
const grid = document.querySelector(".grid");
const endGameScreen = document.querySelector(".end-game-screen");
const playAgainBtn = document.querySelector(".play-again");
const scoreDisplay = document.querySelector(".score");
const endGameText = document.querySelector(".end-game-text");

// Game variables
let currentNumbOfBombs = 0;
const totalNumbOfBombs = 5;
const bombsArray = [1];
const bombsObj = {};
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

function emptyCellClicked(event) {
  const id = Number(event.target.id.slice(4));
  console.log("id", id);
  cell = document.querySelector(`#num-${id}`);
  // console.log(cell);
  // console.log(bombsObj.id);
  let bombsNearBy = 0;
  console.log(bombsObj);

  // Switch for where on grid
  // switch (id) {
  //   case 0:
  //     console.log("switch works: corner clicked");
  //     if (bombsObj[id + 1] === "bomb") {
  //       bombsNearBy++;
  //     }
  //     if (bombsObj[id + 10] === "bomb") {
  //       bombsNearBy++;
  //     }
  //     console.log("bombsNearBy", bombsNearBy);
  //     console.log("id+1", id + 1);
  //     console.log(bombsObj[id + 1]);
  //     console.log(bombsObj["1"]);
  //     console.log(bombsObj.id);
  //     break;
  // }

  cell.classList.add("cell-clicked");
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
    console.log(i, bombsObj.i);
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
