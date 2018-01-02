const request = require('request')
const geocode = require('../geocode/geocode.js')

var getWeather = (lat, lon, callback) => {
     
    request({
        url: `https://api.forecast.io/forecast/1d07ad3a433344f5ee7a1810993a0fca/${lat},${lon}`,
        json:true
    }, (error, response, body) => {
        callback(error, response)
    }) 
}

module.exports.getWeather = getWeather