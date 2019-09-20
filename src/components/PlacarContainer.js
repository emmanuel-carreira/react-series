import React from 'react';

import Time from './Time';
import Partida from './Partida';

class PlacarContainer extends React.Component {   
    render() {
        return (
            <div>
                <div style={{float: "left", "marginRight": "10px"}}>
                    <Time />
                </div>
                <div style={{float: "left", "marginRight": "10px"}}>
                    <Partida />
                </div>
                <div style={{float: "left", "marginRight": "10px"}}>
                    <Time />
                </div>
            </div>
        );
    }
}

export default PlacarContainer;