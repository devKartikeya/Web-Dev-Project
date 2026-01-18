console.log("Percentage Calculating");
const result = document.getElementById("result");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const in1 = parseInt(document.getElementById("first").value);
  const in2 = parseInt(document.getElementById("second").value);
  const in3 = parseInt(document.getElementById("third").value);
  const in4 = parseInt(document.getElementById("fourth").value);
  const in5 = parseInt(document.getElementById("fifth").value);
  let res = ((in1 + in2 + in3 + in4 + in5) * 100) / 500;
  result.innerHTML = res;
});
