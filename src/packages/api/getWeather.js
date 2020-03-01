import config       from '../config'
import getUrl       from '../url/getOpenWeather'

import fetchFromApi from './fetch'


export default ({ lat, lon, provider }) => fetchFromApi({
    endpoint: getUrl({ 
        lat, 
        lon, 
        openWeather: config.api[provider], 
    }),
    options: {
        method: 'GET',
    },
})
