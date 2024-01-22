// Query selectors
const grid = document.querySelector(".grid");
const endGameScreen = document.querySelector(".end-game-screen");

// Game variables
let currentNumbOfBombs = 1;
const numbOfBombs = 90;
const bombsArray = [0];

// Random generator of bomb locations
while (currentNumbOfBombs < numbOfBombs) {
  const randomNumber = Math.floor(Math.random() * 100);
  if (!bombsArray.includes(randomNumber)) {
    bombsArray.push(randomNumber);
    currentNumbOfBombs++;
  }
}

console.log(bombsArray);
console.log(bombsArray.length);

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
