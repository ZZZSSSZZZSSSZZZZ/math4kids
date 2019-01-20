import React from 'react';

import './Logn.css';

const Logn = () =>  {
    return(
        <div>
         <h1 className='Stitle'>login</h1>
        <div className='Logn'>
           
           <div className='LPage'>
                 <div className='Lpage'>
                        <div className='h'>
                            <p className='p'>name</p>
                            <input type='text' className='input'/>
                            <p className='p'>password</p>
                            <input type='password' className='input'/>
                            <div className='Lb'>
                                <div className='Lbutton'>
                                   {'sign in'}
                                </div>
                            </div>
                        </div>
                 </div> 
           </div>
        </div>
        </div>
    );
}

export default Logn;