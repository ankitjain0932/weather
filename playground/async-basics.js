
const yargs = require('yargs')
const request = require('request')
const geocode = require ('../geocode/geocode.js')

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;
    

geocode.geocodeAddress(argv.address) 

// 1d07ad3a433344f5ee7a1810993a0fca




