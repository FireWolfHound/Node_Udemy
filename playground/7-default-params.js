// le fait de mettre {latitude, longitude, location} = {} évite que l'app crach si aucune valeur n'est défini, on met une valeur par défault
geocode(address, (error, {latitude, longitude, location} = {})=>{
	if (error) {
		res.send({
			error
		})
	}
	else {
		forecast(latitude, longitude, (error, forecast)=>{
			if (error) {
				res.send({
					error
				})
			}else {
				res.send({
					location,
					forecast
				})
			}
		})
	}
})