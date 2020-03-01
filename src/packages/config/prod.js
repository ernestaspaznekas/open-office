export default {
	api: {
		googleMapURL: 			'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places',
		harba: {
			harbours: {
				visible: 		'https://devapi.harba.co/harbors/visible',
			},
			domain:				'https://devapi.harba.co',
		},
		openWeather: {
			APPID: 				'8780f13a39a2b8f66fa388b272418483',
			weather: 			'https://api.openweathermap.org/data/2.5/weather?',
		},
		yahooWeather: {
			APPID: 				'keyToBeHere',
			weather: 			'urlToBeHere',
		},
	},
	weather: {
		providers: {
			yahoo: {
				name: 			'Yahoo Weather',
				provider: 		'yahooWeather',
			},
			openWeather: {
				name: 			'Open Weather',
				provider: 		'openWeather',
			}
		},
    },
    // custom
    coordinates: {
        lat: 55.656,
        lon: 12.299,
    },
}