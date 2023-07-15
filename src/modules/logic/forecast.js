import { displayForecast } from "../view/dom";

const collectForecastData = (data) => {
  const forecastData = {
    highestC: data.forecast.forecastday[0].day.maxtemp_c,
    lowestC: data.forecast.forecastday[0].day.mintemp_c,
    highestF: data.forecast.forecastday[0].day.maxtemp_f,
    lowestF: data.forecast.forecastday[0].day.mintemp_f,
    threeDayForecast: data.forecast.forecastday,
    getThreeDayMaxAndMinTemp() {
      const maxTempArrayC = [];
      const minTempArrayC = [];
      const maxTempArrayF = [];
      const minTempArrayF = [];
      const conditionIconsArray = [];
      const conditionTextArray = [];
      const dateArray = [];
      this.threeDayForecast.forEach((forecast) => {
        maxTempArrayC.push(forecast.day.maxtemp_c);
        minTempArrayC.push(forecast.day.mintemp_c);
        maxTempArrayF.push(forecast.day.maxtemp_f);
        minTempArrayF.push(forecast.day.mintemp_f);
        conditionIconsArray.push(forecast.day.condition.icon);
        conditionTextArray.push(forecast.day.condition.text);
        dateArray.push(forecast.date);
      });
      return {
        maxTempArrayC,
        minTempArrayC,
        maxTempArrayF,
        minTempArrayF,
        conditionIconsArray,
        conditionTextArray,
        dateArray,
      };
    },
  };
  return forecastData;
};

async function fetchForecastData(location) {
  const forecastAPI = `http://api.weatherapi.com/v1/forecast.json?key=1d38f27405c74273950235259231107&q=${location}&days=3`;

  try {
    const response = await fetch(forecastAPI, { mode: "cors" });
    const data = await response.json();
    const dataObject = collectForecastData(data);
    displayForecast(dataObject);
    collectForecastData(data);
    console.log(collectForecastData(data));
  } catch (error) {
    console.log(error);
  }
}

export default fetchForecastData;
