const https = require("https");

const API_END_POINT = "https://jsonplaceholder.typicode.com/users";

const request = https.request(API_END_POINT, (res) => {
  let data = [];
  res.on("data", (chunk) => {
    data.push(chunk);
  }); // Register a handler

  res.on("end", () => {
    const parsedData = Buffer.concat(data).toString();
    console.log(parsedData);
  });

  res.on("error", (err) => {
    console.log(err.message);
  });
});

request.end();
