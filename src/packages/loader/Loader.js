import React        from 'react';
import Loader       from 'react-loader-spinner'

import './Loader.scss'

export default ({ height, width, timeout }) => (
    <div className="harba-loader">
        <h4>Loading...</h4>
        <Loader
            type="Puff"
            color="#00BFFF"
            height={height}
            width={width}
            timeout={timeout}
        />
    </div>
)