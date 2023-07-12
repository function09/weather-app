import { displayForecast } from "../view/dom";

const collectForecastData = (data) => {
  const forecastData = {
    highest: data.forecast.forecastday[0].day.maxtemp_c,
    lowest: data.forecast.forecastday[0].day.mintemp_c,
  };
  return forecastData;
};

async function fetchForecastData() {
  const forecastAPI =
    "http://api.weatherapi.com/v1/forecast.json?key=1d38f27405c74273950235259231107&q=paris";

  try {
    const response = await fetch(forecastAPI, { mode: "cors" });
    const data = await response.json();
    const dataObject = collectForecastData(data);
    displayForecast(dataObject);
    collectForecastData(data);
  } catch (error) {
    console.log(error);
  }
}

export default fetchForecastData;
