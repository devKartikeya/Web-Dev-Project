function updateClock() {
  const now = new Date();

  // Time Logic
  const h = String(now.getHours()).padStart(2, "0");
  const m = String(now.getMinutes()).padStart(2, "0");
  const s = String(now.getSeconds()).padStart(2, "0");

  document.getElementById("hour").textContent = h;
  document.getElementById("minute").textContent = m;
  document.getElementById("second").textContent = s;

  // Date Logic
  const options = { weekday: "long", month: "short", day: "2-digit" };
  document.getElementById("date").textContent = now.toLocaleDateString(
    "en-US",
    options
  );
}

setInterval(updateClock, 1000);
updateClock();