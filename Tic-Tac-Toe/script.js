console.log("Tic Tac Toe");
let elements = document.body.querySelectorAll(".cont");
let turn = ["X", "O"];

// --- NEW: Winning Combinations ---
const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // Rows
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // Columns
  [0, 4, 8],
  [2, 4, 6] // Diagonals
];

function logic() {
  let j = 0;
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", () => {
      // Prevent clicking the same box twice
      if (elements[i].innerHTML !== "") return;

      // Your original logic
      elements[i].innerHTML = turn[j];

      // Enhancement: Add color based on turn
      elements[i].style.color = turn[j] === "X" ? "#ff007f" : "#00d4ff";

      // Check for winner after every move
      checkWinner();

      j++;
      if (j == 2) {
        j = 0;
      }
    });
  }
}

// --- NEW: Win Detection Function ---
function checkWinner() {
  for (let pattern of winPatterns) {
    let [a, b, c] = pattern;

    if (
      elements[a].innerHTML !== "" &&
      elements[a].innerHTML === elements[b].innerHTML &&
      elements[a].innerHTML === elements[c].innerHTML
    ) {
      // Enhancement: Visual feedback for the winner
      pattern.forEach(index => {
        elements[index].style.backgroundColor = "rgba(57, 255, 20, 0.2)";
        elements[index].style.border = "2px solid #39ff14";
      });

      setTimeout(() => {
        alert("Player " + elements[a].innerHTML + " is the Champion!");
        resetBoard();
      }, 200);
      return;
    }
  }

  // Check for Draw
  let isDraw = Array.from(elements).every(el => el.innerHTML !== "");
  if (isDraw) {
    setTimeout(() => {
      alert("It's a Draw!");
      resetBoard();
    }, 200);
  }
}

// --- NEW: Reset Function ---
function resetBoard() {
  elements.forEach(el => {
    el.innerHTML = "";
    el.style.backgroundColor = ""; // Reset colors
    el.style.border = "";
  });
}

logic();
