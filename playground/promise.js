request = require('request')

var geocodeAddress = (address) => {
    return new Promise((respond, reject) => {
        encoded_address = encodeURIComponent(address)
        request({
            url:`http://maps.googleapis.com/maps/api/geocode/json?address=${encoded_address}`,
            json:true
        }, (error, response, body) => { 
            if (error) {
                reject(`Error: ${error}`)
            } else if (!body){
                reject('No address found');
            } else if (body.status === 'ZERO_RESULTS') {
                reject('No valid address found')
            } else if (body.status === 'OK') {
                respond(`Address: ${body.results[0].formatted_address}`)
                
                
            } else {
                reject(`Couldn't fetch address. Status: ${body.status}`)
            }
            
        });
    })
} 

geocodeAddress('Indiranagar Bahohguyocitdfykngalore').then((response) => {
    console.log(JSON.stringify(response, undefined, 2))
}, (errormessage) => {
    console.log(errormessage)
})