async function getForecast() {
  let forecast;

  try {
    const response = await fetch(
      "http://api.weatherapi.com/v1/forecast.json?key=2d2c3fc74eb549aaba1202946230807&q=Paris",
      {
        mode: "cors",
      }
    );

    const forecastData = await response.json();

    if (!response.ok) {
      console.log(`Error ${response.status}: ${response.statusText}`);
    } else {
      forecast = forecastData;
    }
  } catch (error) {
    console.log(error);
  }
  return console.log(forecast);
}

export default getForecast;
