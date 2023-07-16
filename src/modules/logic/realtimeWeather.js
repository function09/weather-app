import { displayCurrentWeather } from "../view/dom";

const collectCurrentWeatherData = (data) => {
  const realtimeData = {
    country: data.location.country,
    name: data.location.name,
    region: data.location.region,
    condition: data.current.condition.text,
    temperatureF: data.current.temp_f,
    temperatureC: data.current.temp_c,
    humidity: data.current.humidity,
  };
  return realtimeData;
};

const fetchWeatherData = async (location) => {
  const realtimeAPI = `https://api.weatherapi.com/v1/current.json?key=1d38f27405c74273950235259231107&q=${location}`;

  try {
    const response = await fetch(realtimeAPI, { mode: "cors" });
    const data = await response.json();
    const dataObject = collectCurrentWeatherData(data);
    displayCurrentWeather(dataObject);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    throw new Error(error);
  }
};

export default fetchWeatherData;
