function displayForecast(forecastData) {
  const container = document.createElement("div");
  container.classList.add("forecast");

  const date = document.createElement("h2");
  date.classList.add("date");
  date.textContent = `${forecastData.date}`;

  const condition = document.createElement("p");
  condition.classList.add("condition");
  condition.textContent = `${forecastData.day.condition.text}`;

  const avgTemp = document.createElement("p");
  avgTemp.classList.add("average-temperature");
  avgTemp.textContent = `${forecastData.day.avgtemp_c}°C`;

  const rainChance = document.createElement("p");
  rainChance.classList.add("rain-chance");
  rainChance.textContent = `${forecastData.day.daily_chance_of_rain}%`;

  container.append(date, condition, avgTemp, rainChance);

  const forecasts = document.querySelector(".forecasts");
  forecasts.appendChild(container);
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
export { displayMainWeather, displayForecast };
