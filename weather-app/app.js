const geocode = require('./utils/geocode').geocode
const forecast = require('./utils/forecast').forecast
const address = process.argv[2]
const command = process.argv

if (address !== undefined) {
	geocode(address, (error, {latitude, longitude, location})=>{
		if (error) {
			return console.log(error);
		}
		else if (command.length > 3) {
			console.log('You need tou wrap your city with "" like: "New York"');
		}
		else {
			forecast(latitude, longitude, (error, forecastData)=>{
				if (error) {
					return console.log(error);		
				}else {
					console.log(location);
					console.log(forecastData);
				}
			})
		}
	})
	
}else{
	console.log('You need to write a city like: node app.js Paris' );
}
