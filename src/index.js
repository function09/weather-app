import fetchForecastData from "./modules/logic/forecast";
import fetchWeatherData from "./modules/logic/realtimeWeather";
import { locationSubmit } from "./modules/view/dom";

fetchForecastData("Paris");
fetchWeatherData("Paris");

locationSubmit.addEventListener("click", (event) => {
  const location = document.querySelector("#inputLocation").value;

  fetchWeatherData(location);
  fetchForecastData(location);
  event.preventDefault();
});
