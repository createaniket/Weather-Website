const request = require("request")


const forecast = (longitude, latitude, callback)  => {  

const Furl = 'http://api.openweathermap.org/data/2.5/forecast?lat='+  latitude + '&lon=' + longitude + '&APPID=422afefbebd4f36a8304168a08d51184&units=metric'



request({ url: Furl,json: true }, (error, response) => {

    if (error) 
    {
        callback('Unable to connect the forecast server!', undefined)
    }

    else if (response.body.cod =='400' ) {

        callback('Location Not Found', undefined)
    }

    else {
        callback(undefined, 'The minimum temperature for today is ' + response.body.list[0].main.temp_min + 'and max temp is ' + response.body.list[0].main.temp_max + 'Weather is' + response.body.list[0].weather[0].main)
    }
}



)


}

module.exports = forecast

