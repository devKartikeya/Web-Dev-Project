console.log("Percentage Calculating");
const result = document.getElementById("result");
const card = document.querySelector('.input-container');
const btn = document.getElementById("btn");
const addBtn = document.getElementById('addBtn');

addBtn.addEventListener('click', () => {
  const newInput = document.querySelector('.input');
  newInput.value = "";
  card.appendChild(newInput.cloneNode(true));
})

btn.addEventListener("click", () => {
  const inputs = document.querySelectorAll('.input');
  let sum = 0;
  let count = 0;
  inputs.forEach(input => {
    const value = parseFloat(input.value);
    if (!isNaN(value)) {
      sum += value;
      count++;
    }
  });
  const percentage = (sum / (count * 100)) * 100;
  result.textContent = `${percentage.toFixed(2)}%`;
});