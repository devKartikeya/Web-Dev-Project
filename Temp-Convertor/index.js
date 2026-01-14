console.log("Script is running...");
let display = document.getElementById('display');
let far = document.getElementById('far');
let kel = document.getElementById('kel');
let show = document.getElementById('show');

display.addEventListener("click", () => {
    show.innerHTML = "";
})

//Event Listener on Farhenheit button
far.addEventListener("click", () => {
    const val = display.value;
    if (val == "") {
        show.innerHTML = "Please enter a Number !";
        return;
    }
    const numVal = parseInt(val);
    const result = Math.floor((numVal * 1.8) + 32);
    show.innerHTML = result + "F";
    display.value = "";
})

//Event Listener on Kelvin button
kel.addEventListener("click", () => {
    const val = display.value;
    if (val == "") {
        show.innerHTML = "Please enter a Number !";
        return;
    }
    let numVal = parseInt(val);
    const result = Math.floor(numVal + 273.15);
    show.innerHTML = result + "K";
    display.value = "";
})
