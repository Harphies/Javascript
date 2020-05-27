// controller is meant to intereact with the views
const axios = require("axios");
const API_KEY = "263339f5c0d7a865aa49471f79197a20"; // Openweather API
const Weather = require("../model/Weather");

exports.renderHomePage = (req, res) => {
  res.render("index");
};

exports.getWeather = (req, res) => {
  const city = req.body.city;
  const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const weather = new Weather(req.body.city);
  weather.validateUserInput();

  if (weather.errors.length) {
    res.render("index", {
      error: weather.errors.toString(),
    });
  } else {
    axios
      .get(URL)
      .then((response) => {
        const { temp: temperature } = response.data.main; // the last object name is what we must call what to distructure
        const { name: location } = response.data;
        res.render("index", {
          weather: `It's currently ${temperature} in ${location}`,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

exports.renderAboutPage = (req, res) => {
  res.render("about");
};
