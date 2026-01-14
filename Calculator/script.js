console.log('Script is starting...');

// Select the display input field
const display = document.getElementById('display');

// Select all buttons with the class 'btn'
const buttons = document.querySelectorAll('.btn');

// Loop through each button to add a click event listener
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === '=') {
      // Calculate the result
      calculate();
    } else {
      // Append the button value to the display
      display.value += value;
    }
  });
});
// Select the clear button
const clearBtn = document.getElementById('clear');

// Add click event to empty the display
clearBtn.addEventListener('click', () => {
  display.value = "";
});
// Function to evaluate the expression
function calculate() {
  try {
    // eval() takes the string in the display and computes it
    // Example: "7*8" becomes 56
    display.value = eval(display.value);
  } catch (error) {
    // If the expression is invalid (e.g., "7++8"), show Error
    display.value = "Error";
    
    // Clear the error after 1.5 seconds
    setTimeout(() => {
      display.value = "";
    }, 1500);
  }
}