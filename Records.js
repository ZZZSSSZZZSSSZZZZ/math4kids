import React from 'react';

import Face from './Face'
import './Logn.css';


const Records = (props) =>  {
   
    return(
        <div className='Logn'>
            <div className='Records'>
              
               {
                 props.Player.map((i,x)=>{
                    return <Face key={x} name={i.name} 
                    surname={i.surname} password={i.password}
                     splicer={props.splicer} i={x}/>
                  })
               }
               
            </div>
            
        </div>
    );
}

export default Records;