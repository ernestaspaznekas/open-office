export default ({ 
    lat, 
    lon,
    openWeather: { 
        weather: weatherUrl, 
        APPID 
    },
}) => `${weatherUrl}lat=${lat}&lon=${lon}&APPID=${APPID}`