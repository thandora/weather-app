async function fetchWeatherData(location) {
  const PUBLIC_API = "684089bf2aaf4ed1bc0232421241601";
  let end_point = new URL(`http://api.weatherapi.com/v1/forecast.json?days=2`);
  end_point.searchParams.set("key", PUBLIC_API);
  end_point.searchParams.set("q", location);

  const response = await fetch(end_point, { mode: "cors" });
  const jsonData = await response.json();
  return jsonData;
}
