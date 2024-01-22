const grid = document.querySelector(".grid");
const endGameScreen = document.querySelector(".end-game-screen");

// Making game board
console.log("Hello");
console.log(grid);
console.log(endGameScreen);

// Create grid
for (let i = 0; i < 100; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  grid.appendChild(cell);
}
