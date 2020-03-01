import React        from 'react'

import MapComponent from './MapComponent'

export default class Map extends React.Component {
    state = {
        selected:       null,
    }

    handleMarkerClick = id => () => {
        this.setState({ 
            selected:   id 
        })
    }

    render() {
        return (
            <MapComponent
                onMarkerClick={this.handleMarkerClick}
                data={this.props.data}
                selected={this.state.selected}
            />
        )
    }
}