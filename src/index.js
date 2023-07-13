import fetchForecastData from "./modules/logic/forecast";
import fetchWeatherData from "./modules/logic/realtimeWeather";

fetchWeatherData();
fetchForecastData();

// console.log(
//   new Date("2023-07-13").toLocaleString("en-EN", { weekday: "long" })
// );
