// Query selectors
const grid = document.querySelector(".grid");
const endGameScreen = document.querySelector(".end-game-screen");

// Game variables
const numbOfBombs = 90;

// Making game board
console.log("Hello");
console.log(grid);
console.log(endGameScreen);

function cellClicked() {
  this.classList.add("cell-clicked");
}

for (let i = 0; i < 100; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.addEventListener("click", cellClicked);

  grid.appendChild(cell);
}
