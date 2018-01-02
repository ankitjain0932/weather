const request = require('request')
const weather = require('../weather/weather.js')
var geocode = {
    geocodeAddress: (address) => {
        encoded_address = encodeURIComponent(address)
        request({
            url:`http://maps.googleapis.com/maps/api/geocode/json?address=${encoded_address}`,
            json:true
        }, (error, response, body) => { 
            if (error) {
                console.log(`Error: ${error}`)
            } else if (!body){
                console.log('No address found');
            } else if (body.status === 'ZERO_RESULTS') {
                console.log('No valid address found')
            } else if (body.status === 'OK') {
                console.log(`Address: ${body.results[0].formatted_address}`)
                console.log(`Latitude: ${body.results[0].geometry.location.lat}`)
                console.log(`Longitude: ${body.results[0].geometry.location.lng}`)
                weather.getWeather(body.results[0].geometry.location.lat, body.results[0].geometry.location.lng, (error, response) => {
                    if (error || response.statusCode !== 200)
                        console.log(`Couldn't fetch temperature. Error: ${error}. Status Code: ${response.statusCode}`)
                    else {
                        console.log(`Temperature in F: ${response.body.currently.temperature}`)
                        console.log('Temperature in C: ' + (response.body.currently.temperature - 32)/1.8)
                    }
                })
            } else {
                console.log(`Couldn't fetch address. Status: ${body.status}`)
            }
            
        });
    } 
}

module.exports = geocode;