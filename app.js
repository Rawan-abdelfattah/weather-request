const forecast = require ('./data/forecast.js')
const geocode = require('./data/geocode.js')
const country = process.argv[2]

geocode(country , (error , data) =>{
    console.log('ERROR  : ' , error);
    console.log('DATA  : ' , data);

if(data)
{
    forecast(data.latitude ,  data.longtitude  , (error , data) =>{
        console.log('ERROR  : ' + error);
        console.log('DATA  : ' + data);
    })
}
})
