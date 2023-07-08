async function getWeatherData() {
  try {
    const response = await fetch(
      "http://api.weatherapi.com/v1/current.json?key=2d2c3fc74eb549aaba1202946230807&q=paris",
      {
        mode: "cors",
      }
    );
    const weatherData = await response.json();

    if (!response.ok) {
      const responseStatus = response.status;
      const responseStatusText = response.statusText;

      console.log(`Error ${responseStatus}: ${responseStatusText}`);
    } else {
      console.log(weatherData);
    }
  } catch (error) {
    console.log(error);
  }
}

export default getWeatherData;
