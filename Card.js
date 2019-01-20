import React from 'react';

import './Card.css';

const Card = (props) =>  {
    return(
        <div className='card' onClick={props.Show.bind(this,5)}>
            
            <h1>
               {'|V|'}
            </h1>
            <div className='f'>
            MATH<a className='four'>4</a>KIDS
            </div>
        </div>
    );
}

export default Card;