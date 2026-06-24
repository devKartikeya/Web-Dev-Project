const input = document.getElementById('input');
const button = document.getElementById('button');
const main = document.getElementById('main');
button.addEventListener('click', () => {
    const location = input.value;
    fetch(`https://api.weatherapi.com/v1/current.json?key=8901d86538774341ae0163103260906&q=${location}&aqi=no`)
        .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
        .then(data => {
        console.log('Data received:', data);
        const html = `<div class="card">
                <h2>${location}</h2>
                <p>Temperature: ${data.current.temp_c}°C</p>
                <p>Condition: ${data.current.condition.text}</p>
            </div>`;
        main.insertAdjacentHTML("beforeend", html);
    })
        .catch(error => {
        console.error('Fetch error:', error);
    });
});
export {};
//# sourceMappingURL=script.js.map