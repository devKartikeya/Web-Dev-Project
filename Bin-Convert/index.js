console.log("Binary Converting...");

let btn = document.getElementById("btn");
let input = document.getElementById("input");
let display = document.getElementById("display");

btn.addEventListener("click",()=>{
    console.log("Hyyyy")
    let decValue = input.value;
    let parseValue = parseInt(decValue);
    const binValue = parseValue.toString(2);
    console.log(binValue)
    display.innerHTML = binValue;
    display.style.backgroundColor = "blue";
})