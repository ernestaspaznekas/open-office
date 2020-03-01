
import React            from 'react'

import cliff            from '../images/cliff.jpg';
import Draggable        from 'react-draggable';
import logo             from '../images/logo.svg';
// import config           from '../config'
// import Error            from '../error/Error'
// import fetchFormApi     from '../api/fetch'
// import Loader           from '../loader/Loader'
// import Map              from '../map/Map'

import './Main.scss'


export default class Main extends React.Component {

    state = {
        data:               false,
        error:              false,
        loading:            false,
        x:                  0,
        y:                  0,
    }

    onChangeX = ({ target: { value } }) => {
        this.onChange('x', Number(value))
    }

    onChangeY = ({ target: { value } }) => {
        this.onChange('y', Number(value))
    }

    onChange = (prop, value) => {
        this.setState({ [prop]: value * -1 })
    }

    onReset = () => {
        this.setState({ x: 0, y: 0 })
    }

    handleStop = (e, { x, y, ...rest }) => {
        this.setState({ x, y })
    }

    render() {

        const {
            // data,
            // error: { message },
            // loading,
            x, 
            y,
        } = this.state

        return (
            <div className="container">
                {/* { loading && 
                    <Loader 
                        height={360} 
                        width={360} 
                        timeout={0} 
                    />
                }

                { message && 
                    <Error 
                        message={message}
                    />
                }

                { data && 
                    <Map 
                        data={data} 
                    />
                } */}
                <div className="main">
                    <div className="coordinates">
                        <h1>Coordinates</h1>
                        <div>
                            <div><label>x: </label> <input type="number" onChange={this.onChangeX} value={-x} /></div>
                            <div><label>y: </label> <input type="number" onChange={this.onChangeY} value={-y} /></div>
                        </div>
                        <button onClick={this.onReset}>Reset</button>
                    </div>
                    <div className="img-container">
                        <Draggable
                            bounds={{ left: -4300, right: 0, top: -2800, bottom: 0 }}
                            handle=".handle2"
                            defaultPosition={{ x: 0, y: 0 }}
                            position={{ x, y }}
                            grid={[25, 25]}
                            scale={1}
                            onStop={this.handleStop}>
                            <div>
                                <img draggable={false} className="handle2" alt="cliff" src={cliff} />
                            </div>
                        </Draggable>
                    </div>
                </div>  
            </div>
        )
    }
}