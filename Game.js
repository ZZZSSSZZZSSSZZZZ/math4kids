import React from 'react';

import './Game.css';

const Game = (props) =>  {
    return(
        <div className='Game'>
            {props.children}
        </div>
    );
}

export default Game;