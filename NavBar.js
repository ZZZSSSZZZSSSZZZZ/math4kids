import React from 'react';

import './NavBar.css';

const NavBar = (props) =>  {
    return(
        <div className='NavBar'>
            <div className='manu' onClick={props.showPage.bind(1)}>
               {'login'}
            </div>
             <div className='manu' onClick={props.showPage}>
               {'signup'}
            </div>
             <div className='manu' onClick={props.showPage}>
               {'play game'}
            </div>
             <div className='manu' onClick={props.showPage}>
               {'records'}
            </div>
        </div>
    );
}

export default NavBar;