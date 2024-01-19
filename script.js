import { displayMainWeather, displayForecast } from "./forecast.js";

async function fetchWeatherData(location) {
  const PUBLIC_API = "684089bf2aaf4ed1bc0232421241601";
  let end_point = new URL(`https://api.weatherapi.com/v1/forecast.json`);
  end_point.searchParams.set("key", PUBLIC_API);
  end_point.searchParams.set("q", location);
  end_point.searchParams.set("days", 3);

  const response = await fetch(end_point, { mode: "cors" });
  const jsonData = await response.json();
  return jsonData;
}

function loadDom(data) {
  displayMainWeather(data);
  const forecasts = document.querySelector(".forecasts");

  while (forecasts.firstChild) {
    forecasts.removeChild(forecasts.firstChild);
  }
  
  for (let forecastData of data.forecast.forecastday) {
    displayForecast(forecastData);
  }
}

fetchWeatherData("derry").then(loadDom);

const searchBar = document.querySelector(".search");

searchBar.addEventListener("keyup", (e) => {
  if (e.code === "Enter") {
    const searchQuery = searchBar.value;
    fetchWeatherData(searchQuery).then(loadDom);
  }
});
