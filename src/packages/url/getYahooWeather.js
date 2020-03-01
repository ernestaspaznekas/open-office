// TODO add logic
export default ({ 
    openWeather: { 
        weather: weatherUrl, 
        APPID 
    }, 
    lat, 
    lon 
}) => `${weatherUrl}lat=${lat}&lon=${lon}&APPID=${APPID}`