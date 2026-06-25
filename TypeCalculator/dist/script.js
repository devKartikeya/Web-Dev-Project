const buttons = document.querySelectorAll('.button');
const display = document.getElementById('display');
const solve = document.getElementById('solve');
const clear = document.getElementById('clear');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        display.textContent += button.textContent ?? "";
    });
});
solve.addEventListener('click', () => {
    try {
        display.textContent = String(Function(`return ${display.textContent ?? ""}`)()) == "undefined" ? "Error" : String(Function(`return ${display.textContent ?? ""}`)());
    }
    catch {
        display.textContent = "Error";
    }
});
clear.addEventListener('click', () => {
    display.textContent = "";
});
export {};
//# sourceMappingURL=script.js.map