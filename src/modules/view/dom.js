const locationSubmit = document.querySelector(".locationSubmit");
const toFahrenheitButton = document.querySelector(".toF");

const displayCurrentWeather = (data) => {
  const location = document.querySelector(".location");
  const currentTemp = document.querySelector(".currentTemp");
  const condition = document.querySelector(".condition");
  const currentWeather = document.querySelector(".currentWeather");

  location.textContent = `${data.name}, ${data.region}, ${data.country}`;
  condition.textContent = `${data.condition}`;

  if (currentWeather.dataset.value === "celsius") {
    currentTemp.textContent = `${data.temperatureC} °C`;
  } else if (currentWeather.dataset.value === "fahrenheit") {
    currentTemp.textContent = `${data.temperatureF} °F`;
  }
};

const displayForecast = (data) => {
  const currentWeather = document.querySelector(".currentWeather");
  const forecastContainer = document.querySelector(".forecastDataContainer");
  const high = document.querySelector(".high");
  const low = document.querySelector(".low");
  const threeDayForecast = document.querySelectorAll(".day");
  const conditionIcon = document.querySelectorAll(".conditionIcon");
  const conditionText = document.querySelectorAll(".conditionText");
  const forecastTemp = document.querySelectorAll(".forecastTemp");

  if (currentWeather.dataset.value === "celsius") {
    high.textContent = `H: ${data.highestC} °C`;
    low.textContent = `L: ${data.lowestC} °C`;
  } else if (currentWeather.dataset.value === "fahrenheit") {
    high.textContent = `H: ${data.highestF} °F`;
    low.textContent = `L: ${data.lowestF} °F`;
  }

  threeDayForecast.forEach((day, index) => {
    const dateText = day;
    const dateArray = data.getThreeDayMaxAndMinTemp().dateArray[index];
    dateText.textContent = new Date(dateArray).toLocaleString("en-EN", {
      weekday: "long",
    });
  });

  conditionIcon.forEach((icon, index) => {
    const weatherIcon = icon;
    weatherIcon.src =
      data.getThreeDayMaxAndMinTemp().conditionIconsArray[index];
  });

  conditionText.forEach((text, index) => {
    const conditionTexts = text;
    conditionTexts.textContent =
      data.getThreeDayMaxAndMinTemp().conditionTextArray[index];
  });

  forecastTemp.forEach((forecast, index) => {
    const forecastText = forecast;

    if (forecastContainer.dataset.value === "celsius") {
      forecastText.textContent = `${
        data.getThreeDayMaxAndMinTemp().maxTempArrayC[index]
      }°C / ${data.getThreeDayMaxAndMinTemp().minTempArrayC[index]} °C`;
    } else if (forecastContainer.dataset.value === "fahrenheit") {
      forecastText.textContent = `${
        data.getThreeDayMaxAndMinTemp().maxTempArrayF[index]
      }°F / ${data.getThreeDayMaxAndMinTemp().minTempArrayF[index]} °F`;
    }
  });
};

export {
  locationSubmit,
  toFahrenheitButton,
  displayCurrentWeather,
  displayForecast,
};
