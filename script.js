async function fetchWeatherData(location) {
  const PUBLIC_API = "684089bf2aaf4ed1bc0232421241601";
  let end_point = new URL(`http://api.weatherapi.com/v1/forecast.json?days=2`);
  end_point.searchParams.set("key", PUBLIC_API);
  end_point.searchParams.set("q", location);

  const response = await fetch(end_point, { mode: "cors" });
  const jsonData = await response.json();
  return jsonData;
}

function displayMainWeather(weatherData) {
  const nowCity = document.querySelector(".weather-now .city");
  const nowCountry = document.querySelector(".weather-now .country");
  const nowCondition = document.querySelector(".weather-now .condition");
  const nowTemp = document.querySelector(".weather-now .temperature");
  const nowTempFeel = document.querySelector(".weather-now .temperature-feel");
  const nowHumidity = document.querySelector(".weather-now .humidity");
  const nowRainChance = document.querySelector(".weather-now .rain-chance");

  nowCity.textContent = `${weatherData.location.name}`;
  nowCountry.textContent = `${weatherData.location.country}`;
  nowCondition.textContent = `${weatherData.current.condition.text}`;
  nowTemp.textContent = `${weatherData.current.temp_c}°C`;
  nowTempFeel.textContent = `${weatherData.current.feelslike_c}°C`;
  nowHumidity.textContent = `${weatherData.current.humidity}%`;
  nowRainChance.textContent = `Chance of rain today: ${weatherData.forecast.forecastday[0].day.daily_chance_of_rain}%`;
}

function displayForecast(weatherData) {}

fetchWeatherData("derry").then((data) => {
  console.log(data);
  displayMainWeather(data);
});
