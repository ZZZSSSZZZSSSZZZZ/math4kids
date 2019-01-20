import React from 'react';

import './NavBar.css';

const NavBar = (props) =>  {
    return(
        <div className='NavBar'>
            <div className='manu' onClick={props.showPage.bind(this,1)}>
               {'login'}
            </div>
             <div className='manu' onClick={props.showPage.bind(this,2)}>
               {'signup'}
            </div>
             <div className='manu' onClick={props.showPage.bind(this,3)}>
               {'play game'}
            </div>
             <div className='manu' onClick={props.showPage.bind(this,4)}>
               {'records'}
            </div>
        </div>
    );
}

export default NavBar;