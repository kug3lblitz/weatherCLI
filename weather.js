const argv = require('yargs').argv;
const request = require('request');
const apiKey = 'a669e9a25e61155653e227c82b3dd2f6';
let city = argv.c || 'Myrtle Beach';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

console.log("where are you located? specify your location with the -c flag. Ex. node weather.js -c Greensboro, NC") + '\n';

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body)
    let message = `\n It's currently ${weather.main.temp} degrees farenheit with ${weather.main} in ${weather.name} (give or take 3 hours)`;
    console.log(message + '\n');
    console.log('body:', body + '\n');
  }
});

let url2 = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`

request(url2, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let forecast = JSON.parse(body)
    let fdata = (forecast.list)
    for (let i = 0; i < fdata.length; i++) {
      console.log(JSON.stringify((fdata[i].dt_txt + ' ') + (fdata[i].main.temp_min + ' - ') + (fdata[i].main.temp_max + ' ') + (fdata[i].weather[0].description)));
    }
  }
});
