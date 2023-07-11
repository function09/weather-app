// async function getWeatherData() {
//   const weatherDataURLs = [
//     "http://api.weatherapi.com/v1/current.json?key=2d2c3fc74eb549aaba1202946230807&q=paris",
//     "http://api.weatherapi.com/v1/forecast.json?key=2d2c3fc74eb549aaba1202946230807&q=paris",
//   ];
//   let weatherInfo;

//   try {
//     const weatherData = await Promise.all(
//       weatherDataURLs.map((url) =>
//         fetch(url).then((response) => {
//           if (!response.ok) {
//             console.log(`Error ${response.status}: ${response.StatusText}`);
//           }
//           return response.json();
//         })
//       )
//     );
//     weatherInfo = weatherData;
//   } catch (error) {
//     console.log(error);
//   }
//   return console.log(weatherInfo);
// }

// export default getWeatherData
