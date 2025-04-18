const API_KEY = '1ee367af001ced4aa0713bc64d77589b';
const CITY = 'Dnipro';
const UNITS = 'metric';

async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=${UNITS}&lang=ua`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Не вдалося завантажити погоду');
        const data = await response.json();

        const weatherInfo = `
          <h2>${data.name}, ${data.sys.country}</h2>
          <p><strong>Температура:</strong> ${data.main.temp}°C</p>
          <p><strong>Вологість:</strong> ${data.main.humidity}%</p>
          <p><strong>Погода:</strong> ${data.weather[0].description}</p>
        `;

        document.getElementById('weather').innerHTML = weatherInfo;
    } catch (error) {
        document.getElementById('weather').innerHTML = 'Помилка завантаження: ' + error.message;
    }
}

document.getElementById('refreshBtn').addEventListener('click', getWeather);

getWeather();