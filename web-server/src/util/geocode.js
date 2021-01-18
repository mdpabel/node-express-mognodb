const axios = require("axios");

const geocode = (address, cb) => {
  const geo_code_api = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?types=address&access_token=pk.eyJ1IjoibWRwYWJlbCIsImEiOiJja2pzazY0MGUyN29pMnJxbjU1bTI3b2s3In0.fkfDPG4xneNrc5joP1p5qA&limit=1`;

  axios
    .get(geo_code_api)
    .then((res) => {
      // console.log(res.data);
      cb(undefined, {
        lat: res.data.features[0].center[1],
        lon: res.data.features[0].center[0],
        location: res.data.features[0].place_name,
      });
    })
    .catch((err) => {
      cb(err.message, undefined);
    });
};

module.exports = geocode;
