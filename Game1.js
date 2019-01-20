import React from 'react';

import './Game1.css';

const Game1 = (props) =>  {
   
  
    return(
        <div>

        <div className='scrolla'>
            <div>{props.LastQ}</div>
        </div>

        <div className='Game1'>
        
            <div>
           <h1 className='GTITLE'> {'ADDITION'}</h1>
           
           
           </div>
            <div className='center'>
            <div className='back'>
                <p className='p'>{props.x}</p>
                <p className='p'>+</p>
                <p className='p'>{props.y}</p>
                <input type='text' className='Ginput' onChange={props.ANSWER}/>
            </div>
                <div className='Gb'>               
                    <div className='Gbutton'onClick={props.ADD.bind(this,props.x,props.y)}>
                        {'next'}
                    </div>               
                 </div>              
            </div>
             {props.isCorrect}
        </div>
        </div>
    );
}

export default Game1;