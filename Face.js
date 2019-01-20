import React from 'react';

import './Face.css';

const Face = (props) =>  {
    return(
        <div className='Face' onClick={props.splicer.bind(this,props.i)}>
            <div className='Face1' >
                <div>name : {props.name}</div> 
                      
                <div>surname : {props.surname}</div> 
                      
                <div>
                    password : {props.password} 
                </div> 
              
            </div> 
        </div>
    );
}

export default Face;