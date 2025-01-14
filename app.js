"use strict";

// Select elements
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

// Game state variables
let isTurnO = true; // O goes first
let moveCount = 0; // To track the total moves

// Winning patterns
const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// Reset game function
const resetGame = () => {
  isTurnO = true;
  moveCount = 0;
  msgContainer.classList.add("hide");
  enableBoxes();
};

// Disable all boxes
const disableBoxes = () => {
  boxes.forEach((box) => (box.disabled = true));
};

// Enable all boxes and clear their content
const enableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
  });
};

// Display the winner message
const showWinner = (winner) => {
  msg.innerText = `Congratulations! The winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

// Display draw message
const showDraw = () => {
  msg.innerText = `It's a draw! Play again.`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

// Check for a winner
const checkWinner = () => {
  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    const val1 = boxes[a].innerText;
    const val2 = boxes[b].innerText;
    const val3 = boxes[c].innerText;

    if (val1 && val1 === val2 && val2 === val3) {
      showWinner(val1);
      return true;
    }
  }
  return false;
};

// Check for a draw
const checkDraw = () => {
  if (moveCount === 9) {
    showDraw();
  }
};

// Main game logic
const handleBoxClick = (box) => {
  box.innerText = isTurnO ? "O" : "X";
  box.disabled = true;
  moveCount++;

  if (!checkWinner()) {
    checkDraw();
  }

  isTurnO = !isTurnO; // Switch turn
};

// Add event listeners to all boxes
boxes.forEach((box) => {
  box.addEventListener("click", () => handleBoxClick(box));
});

// Add event listeners to buttons
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
