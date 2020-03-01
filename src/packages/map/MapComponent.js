import React            from 'react'
import { 
    compose, 
    withProps, 
}                       from 'recompose'
import { 
    GoogleMap, 
    withScriptjs, 
    withGoogleMap, 
}                       from 'react-google-maps'

import config           from '../config'
import Marker           from '../marker/Marker'


export default compose(
    withProps({
        containerElement:   <div style={{ height: `100vh` }} />,
        googleMapURL:       config.api.googleMapURL,
        loadingElement:     <div style={{ height: `100%` }} />,
        mapElement:         <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)(({ data, selected, onMarkerClick }) => (
        <GoogleMap
            defaultZoom={3}
            defaultCenter={{ 
                lat:        config.coordinates.lat, 
                lng:        config.coordinates.lon 
            }}
        >
            { data.map(({ id, image, lat, lon, name }) =>
                <Marker
                    id={id}
                    image={image}
                    key={id}
                    lat={lat}
                    lon={lon}
                    name={name}
                    selected={selected}
                    onMarkerClick={onMarkerClick}
                />
            )}
        </GoogleMap>
    )
)