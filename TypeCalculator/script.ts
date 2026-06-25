const buttons = document.querySelectorAll<HTMLButtonElement>('.button');
const display = document.getElementById('display') as HTMLDivElement;
const solve = document.getElementById('solve') as HTMLButtonElement;
const clear = document.getElementById('clear') as HTMLButtonElement;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        display.textContent += button.textContent ?? "";
    });
});

solve.addEventListener('click', () => {
    try {
        display.textContent = String(Function(`return ${display.textContent ?? ""}`)()) == "undefined" ? "Error" : String(Function(`return ${display.textContent ?? ""}`)());
    } catch {
        display.textContent = "Error";
    }
});

clear.addEventListener('click', () => {
    display.textContent = "";
});