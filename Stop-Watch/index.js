let min = document.getElementById("min");
let sec = document.getElementById("sec");
let milsec = document.getElementById("milsec");
let start = document.getElementById("start");
let pause = document.getElementById("pause");
let reset = document.getElementById("restart");

start.addEventListener("click", () => {
  let i = milsec.innerHTML;
  let j = sec.innerHTML;
  let k = min.innerHTML;
  let interval = setInterval(() => {
    if (milsec.innerHTML == 100) {
      j++;
      sec.innerHTML = j;
      i = 0;
      if (sec.innerHTML == 60) {
        k++;
        min.innerHTML = k;
        i = 0;
        j = 0;
      }
    }
    milsec.innerHTML = i;
    i++;
  }, 10);
  pause.addEventListener("click", () => {
    clearInterval(interval);
  });
  reset.addEventListener("click", () => {
    min.innerHTML = 0;
    sec.innerHTML = 0;
    milsec.innerHTML = 0;
    clearInterval(interval);
  });
});