const axios = require("axios");

const geocode = require("./util/geocode");
const weather = require("./util/weather");

const address = process.argv[2];

if (!address) {
  console.log("Please provide your address");
} else {
  geocode(address, (err, data) => {
    if (err) {
      return console.log(err.message);
    }
    weather(data.lat, data.lon, (err, weatherData) => {
      if (err) {
        return console.log(err.message);
      }
      console.log(data.location);
      console.log(weatherData);
    });
  });
}
