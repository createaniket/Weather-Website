const request = require("request")

const geocode = (address, callback) => {

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address +'.json?access_token=pk.eyJ1IjoiYW5pa2V0MDA3IiwiYSI6ImNsMXhmcDdoazAyZWszamxmdHFmMGd5dHMifQ.FY2kkuPRe8kF7lgYkUZygw'

    request ( { url : url, json: true}, (error, response) =>
    {


        if (error) {

           callback('Not able to connect Server!', undefined);
        }

        else if (response.body.features.length === 0) {

            callback('Location Not Found', undefined)

            
        }

        else {

            callback(undefined, {

                latitude : response.body.features[0].center[1],
                longitude : response.body.features[0].center[0],
                location : response.body.features[0].place_name
            })
        }
    })
}

















module.exports = geocode;