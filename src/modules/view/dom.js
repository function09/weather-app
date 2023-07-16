import rain from "../../assets/images/rainyWeather.jpg";
import sunny from "../../assets/images/sunnyWeather.jpg";
import snowy from "../../assets/images/snowyWeather.jpg";
import cloudy from "../../assets/images/cloudyWeather.jpg";
import misty from "../../assets/images/mistyWeather.jpg";

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

  const conditionText = condition.textContent.toLowerCase();

  if (conditionText.includes("rain") || conditionText.includes("thunder")) {
    document.body.style.backgroundImage = `url(${rain})`;
  } else if (
    conditionText.includes("sunny") ||
    conditionText.includes("clear")
  ) {
    document.body.style.backgroundImage = `url(${sunny})`;
  } else if (
    conditionText.includes("cloudy") ||
    conditionText.includes("overcast")
  ) {
    document.body.style.backgroundImage = `url(${cloudy})`;
  } else if (
    conditionText.includes("snow") ||
    conditionText.includes("sleet") ||
    conditionText.includes("freezing") ||
    conditionText.includes("ice")
  ) {
    document.body.style.backgroundImage = `url(${snowy})`;
  } else if (conditionText.includes("mist")) {
    document.body.style.backgroundImage = `url(${misty})`;
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
    high.textContent = ` ${data.highestC} °C`;
    low.textContent = ` ${data.lowestC} °C `;
  } else if (currentWeather.dataset.value === "fahrenheit") {
    high.textContent = ` ${data.highestF} °F`;
    low.textContent = ` ${data.lowestF} °F`;
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
