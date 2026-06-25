const input = document.getElementById('input') as HTMLInputElement;
const button = document.getElementById('button') as HTMLButtonElement;
const main = document.getElementById('main') as HTMLElement;

const array = ["Temperature", "Humidity", "Cloud Cover", "Pressure", "Condition"];

// Render placeholder cards
array.forEach(label => {
  const html = `<div class="card">
      <h2>${label}</h2>
      <p>Value: --</p>
    </div>`;
  main.insertAdjacentHTML("beforeend", html);
});

button.addEventListener('click', () => {
  const location = input.value;
  fetch(`https://api.weatherapi.com/v1/current.json?key=8901d86538774341ae0163103260906&q=${location}&aqi=no`)
    .then(response => {
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    })
    .then(data => {
      console.log('Data received:', data);

      // Clear old cards
      main.innerHTML = "";

      // Build new cards with actual data
      const cards = [
        { label: "Temperature", value: `${data.current.temp_c}°C` },
        { label: "Humidity", value: `${data.current.humidity}%` },
        { label: "Cloud Cover", value: `${data.current.cloud}%` },
        { label: "Pressure", value: `${data.current.pressure_mb} mb` },
        { label: "Condition", value: data.current.condition.text }
      ];

      cards.forEach(c => {
        const html = `<div class="card">
            <h2>${c.label}</h2>
            <p>${c.value}</p>
          </div>`;
        main.insertAdjacentHTML("beforeend", html);
      });
    })
    .catch(error => console.error('Fetch error:', error));
});
