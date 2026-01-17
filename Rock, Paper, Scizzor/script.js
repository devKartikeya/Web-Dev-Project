const scoreEl = document.getElementById("score");
const userScoreEl = document.getElementById("userScore");
const compScoreEl = document.getElementById("compScore");
const userIcon = document.getElementById("user_icon");
const compIcon = document.getElementById("comp_icon");

const choices = {
  rock: "fa-hand-back-fist",
  paper: "fa-hand",
  scissors: "fa-hand-scissors"
};

const choiceKeys = Object.keys(choices);

document.querySelectorAll(".choice-btn:not(.static)").forEach(button => {
  button.addEventListener("click", () => {
    const userChoice = button.getAttribute("data-choice");
    playGame(userChoice);
  });
});

function playGame(userChoice) {
  const compChoice = choiceKeys[Math.floor(Math.random() * 3)];

  // Update Icons
  userIcon.className = `fa-solid ${choices[userChoice]}`;
  compIcon.className = `fa-solid ${choices[compChoice]}`;

  // Logic
  if (userChoice === compChoice) {
    updateUI("DRAW!", "white");
  } else if (
    (userChoice === "rock" && compChoice === "scissors") ||
    (userChoice === "paper" && compChoice === "rock") ||
    (userChoice === "scissors" && compChoice === "paper")
  ) {
    updateUI("YOU WIN!", "#39ff14");
    incrementScore(userScoreEl);
  } else {
    updateUI("YOU LOSE!", "#ff007f");
    incrementScore(compScoreEl);
  }
}

function updateUI(text, color) {
  scoreEl.innerText = text;
  scoreEl.style.color = color;
  scoreEl.style.textShadow = `0 0 10px ${color}`;
}

function incrementScore(element) {
  let score = parseInt(element.innerText) + 1;
  element.innerText = score;

  if (score === 10) {
    alert(
      element.id === "userScore"
        ? "VICTORY! You reached 10!"
        : "DEFEAT! Computer reached 10!"
    );
    userScoreEl.innerText = 0;
    compScoreEl.innerText = 0;
  }
}