import fetchForecastData from "./modules/logic/forecast";
import fetchWeatherData from "./modules/logic/realtimeWeather";
import { locationSubmit, toFahrenheitButton } from "./modules/view/dom";

fetchForecastData("Paris");
fetchWeatherData("Paris");

locationSubmit.addEventListener("click", (event) => {
  const location = document.querySelector("#inputLocation");
  const locationValue = location.value;

  fetchWeatherData(locationValue);
  fetchForecastData(locationValue);

  location.value = "";
  event.preventDefault();
});

toFahrenheitButton.addEventListener("click", (event) => {
  const locationText = document.querySelector(".location").textContent;
  const currentWeather = document.querySelector(".currentWeather");
  const forecastContainer = document.querySelector(".forecastDataContainer");
  const currentWeatherValue = currentWeather.dataset.value;
  const forecastContainerValue = forecastContainer.dataset.value;
  const toFButton = event;

  if (
    currentWeatherValue === "celsius" ||
    forecastContainerValue === "celsius"
  ) {
    currentWeather.dataset.value = "fahrenheit";
    forecastContainer.dataset.value = "fahrenheit";
    fetchWeatherData(locationText);
    fetchForecastData(locationText);
    toFButton.target.textContent = "Display °C";
  } else if (
    currentWeatherValue === "fahrenheit" ||
    forecastContainerValue === "fahrenheit"
  ) {
    currentWeather.dataset.value = "celsius";
    forecastContainer.dataset.value = "celsius";
    fetchWeatherData(locationText);
    fetchForecastData(locationText);
    toFButton.target.textContent = "Display °F";
  }
});
