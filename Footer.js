import React from 'react';

import './Footer.css';

const Footer = (props) =>  {
    return(
        <div className='Footer'>
            {props.children}
        </div>
    );
}

export default Footer;