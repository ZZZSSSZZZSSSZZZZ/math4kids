import React from 'react';

import './BodySkin.css';

const BodySkin = (props) =>  {
    return(
        <div className='BodySkin'>
            {props.children}
        </div>
    );
}

export default BodySkin;