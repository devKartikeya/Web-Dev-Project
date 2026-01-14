// 1. Initialize Game Variables
let randomNumber = null;
let attemptsLeft = 7;
const maxAttempts = 7;

// 2. Select Elements from your HTML
const genBtn = document.getElementById("gen");
const goBtn = document.getElementById("go");
const label = document.getElementById("label");
const userInput = document.getElementById("user");
const livesDisplay = document.getElementById("lives");

/**
 * GENERATE / RESTART BUTTON LOGIC
 * Triggered by id="gen"
 */
genBtn.addEventListener("click", () => {
    // Generate secret number 0-100
    randomNumber = Math.floor(Math.random() * 101);
    console.log("Secret Number is: " + randomNumber); // For debugging

    // Reset game state
    attemptsLeft = maxAttempts;
    livesDisplay.textContent = attemptsLeft;

    // UI Updates
    label.innerHTML = "I'm thinking of a number...";
    label.classList.remove("winner");
    label.style.color = ""; // Reset to default blue/gray

    // Input & Button Updates
    userInput.disabled = false;
    userInput.value = "";
    userInput.focus();
    
    genBtn.textContent = "Restart";
    goBtn.style.display = "block"; // Show the Submit button
});

/**
 * SUBMIT GUESS LOGIC
 * Triggered by id="go"
 */
goBtn.addEventListener("click", () => {
    const userValue = parseInt(userInput.value);

    // 1. Validate Input
    if (userInput.value === "" || isNaN(userValue)) {
        label.innerHTML = "Please enter a number!";
        return;
    }

    // 2. Decrement Attempts
    attemptsLeft--;
    livesDisplay.textContent = attemptsLeft;

    // 3. Check Guess
    if (userValue === randomNumber) {
        // WINNING STATE
        label.innerHTML = "Mission Accomplished! <br> It was " + randomNumber;
        label.classList.add("winner");
        endGame();
    } else if (attemptsLeft <= 0) {
        // LOSING STATE
        label.innerHTML = "Game Finished! <br> The number was " + randomNumber;
        label.style.color = "#ff4b2b"; // Red for game over
        endGame();
    } else {
        // HINT STATE (This makes the "Too Big/Small" messages show)
        if (userValue > randomNumber) {
            label.innerHTML = "Too Big, reduce...";
        } else {
            label.innerHTML = "Too small, enlarge...";
        }
        
        // Prepare for next guess
        userInput.value = "";
        userInput.focus();
    }
});

/**
 * FUNCTION TO LOCK THE GAME
 */
function endGame() {
    userInput.disabled = true;
    goBtn.style.display = "none"; // Hide submit button again
    genBtn.textContent = "Play Again";
}

// Shortcut: Press "Enter" to submit
userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && !userInput.disabled) {
        goBtn.click();
    }
});
