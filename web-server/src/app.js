const path = require("path");

const express = require("express");

const geocode = require("./util/geocode");
const weather = require("./util/weather");

const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/", (req, res) => {
  res.render("index", {
    pageTitle: "Weather",
    pageHead: "Weather",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    pageTitle: "About",
    pageHead: "About",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    pageTitle: "Help",
    pageHead: "Help",
  });
});

app.get("/weather", (req, res) => {
  //   console.log(req.query.location);
  if (!req.query.location) {
    return res.send({
      Error: "Please provide your address",
    });
  }

  geocode(req.query.location, (err, { lat, lon, location } = {}) => {
    if (err) {
      return res.send({
        Error: err,
      });
    }
    weather(lat, lon, (err, weatherData) => {
      if (err) {
        return res.send({
          Error: err,
        });
      }
      res.send({
        details: weatherData,
        address: location,
      });
    });
  });
});

app.use((req, res) => {
  res.render("404", {
    pageTitle: "404 not found",
    pageHead: "404 Not Found",
  });
});

app.listen("3000", () => {
  console.log("Server is running on PORT 3000");
});
