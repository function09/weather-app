const displayCurrentWeather = (data) => {
  document.querySelector(
    ".location"
  ).textContent = `${data.name}, ${data.country}`;
  document.querySelector(".currentTemp").textContent = `${data.temperatureC}°C`;
  document.querySelector(".condition").textContent = `${data.condition}`;
};

const displayForecast = (data) => {
  document.querySelector(".high").textContent = `H:${data.highest}`;
  document.querySelector(".low").textContent = `L:${data.lowest}`;
};
export { displayCurrentWeather, displayForecast };
