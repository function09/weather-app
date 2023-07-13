const displayCurrentWeather = (data) => {
  document.querySelector(
    ".location"
  ).textContent = `${data.name}, ${data.country}`;
  document.querySelector(
    ".currentTemp"
  ).textContent = `${data.temperatureC} °C`;
  document.querySelector(".condition").textContent = `${data.condition}`;
};

const displayForecast = (data) => {
  document.querySelector(".high").textContent = `H: ${data.highest} °C`;
  document.querySelector(".low").textContent = `L: ${data.lowest} °C`;

  document.querySelectorAll(".day").forEach((day, index) => {
    const dateText = day;
    const dateArray = data.getThreeDayMaxAndMinTemp().dateArray[index];
    dateText.textContent = new Date(dateArray).toLocaleString("en-EN", {
      weekday: "long",
    });
  });

  document.querySelectorAll(".conditionIcon").forEach((icon, index) => {
    const weatherIcon = icon;
    weatherIcon.src =
      data.getThreeDayMaxAndMinTemp().conditionIconsArray[index];
  });

  document.querySelectorAll(".conditionText").forEach((text, index) => {
    const conditionText = text;
    conditionText.textContent =
      data.getThreeDayMaxAndMinTemp().conditionTextArray[index];
  });

  document.querySelectorAll(".forecastTemp").forEach((forecast, index) => {
    const forecastText = forecast;
    forecastText.textContent = `${
      data.getThreeDayMaxAndMinTemp().maxTempArray[index]
    }°C / ${data.getThreeDayMaxAndMinTemp().minTempArray[index]} °C`;
  });
};
export { displayCurrentWeather, displayForecast };
