import React        from 'react'
import {
    InfoWindow,
    Marker,
}                   from 'react-google-maps'

import config       from '../config'
import getWeather   from '../api/getWeather'
import Loader       from '../loader/Loader'
import Details      from '../details/Details'

import './Marker.scss'


export default class MarkerComponent extends React.PureComponent {
    state = {
        loading:            false,
        provider:           false,
        weather:            false,
    }

    setWeather = () => {
        this.setState({ loading: true })

        getWeather({
            lat:            this.props.lat, 
            lon:            this.props.lon, 
            provider:       config.weather.providers.openWeather.provider,
        })
            .then(response => response.json())
            .then(weather => this.setState({
                weather,
                provider:   config.weather.providers.openWeather.name,
                loading:    false,
            }))
            .catch(error => this.setState({
                error,
                loading:    false,
            }))
    }

    render() {
        const {
            id,
            image,
            lat,
            lon,
            name,
            selected,
            onMarkerClick,
        } = this.props

        const {
            provider,
            weather,
            loading,
        } = this.state

        if ( selected === id && ! weather & ! loading ) this.setWeather()
        
        return (
            <Marker
                position={{
                    lat: Number(lat),
                    lng: Number(lon),
                }}
                onClick={onMarkerClick(id)}
            >
                { selected === id &&
                    <InfoWindow>
                        <div className='harba-info'>
                            <div>
                                <h1>
                                    {name}
                                </h1>
                            </div>
                            <div>
                                { image && 
                                    <img 
                                        alt={name}
                                        src={`${config.api.harba.domain}${image}`} 
                                        height='150px' 
                                        width='250px'
                                    /> 
                                }
                            </div>
                            { loading && 
                                <Loader 
                                    height={100}    
                                    width={100} 
                                    timeout={0} 
                                /> 
                            }
                            { weather && 
                                <Details 
                                    {...weather} 
                                /> 
                            }
                            <div className="harba-weather-provider">
                                { provider && 
                                    <h3>
                                        Provider: {provider}
                                    </h3>
                                }
                            </div>
                        </div>
                    </InfoWindow>
                }
            </Marker>
        )
    }
}