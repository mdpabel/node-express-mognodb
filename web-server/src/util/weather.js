const axios = require("axios");

const weather = (lat, lon, cb) => {
  const weather_api = `http://api.weatherstack.com/current?access_key=a359603cb1f98223f23f0d3215f05436&query=${lat},${lon}&units%20=%20m`;

  axios
    .get(weather_api)
    .then((res) => {
      //   console.log(res.data.current);
      //   console.log(res.data.temperature);
      cb(
        undefined,
        res.data.current.weather_descriptions[0] +
          ". It is currently " +
          res.data.current.temperature +
          ", It's feels like " +
          res.data.current.feelslike +
          "."
      );
    })
    .catch((err) => {
      cb(err.message, undefined);
    });
};

module.exports = weather;
