document.getElementById('weatherForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const city = document.getElementById('cityInput').value;
    const API_KEY = "f493235022f117443717201d55ff1d93";
    const BASE_URL = "http://api.openweathermap.org/data/2.5/weather";

    const requestUrl = `${BASE_URL}?appid=${API_KEY}&q=${city}`;
    
    try {
        const response = await fetch(requestUrl);
        if (response.status === 200) {
            const data = await response.json();
            const weather = data.weather[0].description;
            const temperature = (data.main.temp - 273.15).toFixed(2);

            document.getElementById('cityName').innerText = city;
            document.getElementById('weather').innerText = weather;
            document.getElementById('temperature').innerText = temperature;

            document.getElementById('weatherDetails').classList.remove('hidden');
        } else {
            alert("City not found! Please try again.");
        }
    } catch (error) {
        console.error("An error occurred:", error);
        alert("Unable to fetch weather data.");
    }
});
