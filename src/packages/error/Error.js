import React from 'react';

import './Error.scss'


export default ({ message }) => (
    <h1 
        className="harba-error"
    >
        Error happend: <b>{message}</b>
    </h1>
)