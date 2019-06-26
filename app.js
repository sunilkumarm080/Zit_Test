const express = require("express");
const fetch = require("node-fetch");
const app = express();
const port = 4000;
async function getWeather() {
  const config = {
    secret: "222ef16098daf64382e5bb0e84c30501",
    location: "52.238,5.5346", // This is NL, welcome!
    lang: "en",
    units: "si",
    exclude: "minutely,hourly,daily,alerts,flags"
  };
  const weatherAPI = `https://api.darksky.net/forecast/${config.secret}/${config.location}?lang=${config.lang}&units=${config.units}&exclude=${config.exclude}`;
  const response = await fetch(weatherAPI);
  return response.json();
}
app.get("/", (req, res) => {
  getWeather().then(weather => {
    res.json(weather);
  });
});
const server = app.listen(port);