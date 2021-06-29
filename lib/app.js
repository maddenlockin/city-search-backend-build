const express = require('express');
const cors = require('cors');
const app = express();
const morgan = require('morgan');
const request = require('superagent');
const { mungeLocationInfo, mungeWeatherInfo } = require('./munge.js');
//const { response } = require('express');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));


app.get('/location', async(req, res) => {
  try {
    //below grabs whatever comes after a ? in an api url 
    const city = req.query.search;

    const data = await request.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.LOCATION_KEY}&q=${city}&format=json`
    );
  
    const mungedData = mungeLocationInfo(data.body);
    res.json(mungedData);
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

app.get('/weather', async(req, res) => {
  try {
    //below data? or response?
    const response = await request.get(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${req.query.latitude}&lon=${req.query.longitude}&key=${process.env.WEATHER_KEY}`
    );

    const mungedWeather = mungeWeatherInfo(response.body);
    res.json(mungedWeather);

  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

// app.get('/reviews', async(req, res) => {
//   try {
//     const data = await request.get(`https://api.yelp.com/v3/businesses/search?latitude={lat}&longitude={lng}&key=${process.env.REVIEWS_KEY}`);

//     //const mungedWeather = mungeWeatherInfo(response.body);
//     res.json(data);
//     //res.json(mungedWeather);
//   } catch(e) {
//     res.status(500).json({ error: e.message });
//   }
//});


module.exports = app;
