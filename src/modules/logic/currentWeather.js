async function getCurrentWeather() {
  let currentWeather;

  try {
    const response = await fetch(
      "http://api.weatherapi.com/v1/current.json?key=2d2c3fc74eb549aaba1202946230807&q=Paris",
      {
        mode: "cors",
      }
    );

    const weatherData = await response.json();

    if (!response.ok) {
      console.log(`Error ${response.status}: ${response.statusText}`);
    } else {
      currentWeather = weatherData;
    }
  } catch (error) {
    console.log(error);
  }
  return console.log(currentWeather);
}

export default getCurrentWeather;
