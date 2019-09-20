import React from 'react';

import Time from './Time';
import Partida from './Partida';

class PlacarContainer extends Component {   
    render() {
        return (
            <div>
                <div>
                    <Time />
                </div>
                <div>
                    <Partida />
                </div>
                <div>
                    <Time />
                </div>
            </div>
        );
    }
}

export default PlacarContainer;