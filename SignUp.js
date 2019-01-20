import React from 'react';

import './SignUp.css';

const SignUp = (props) =>  {
    let PlayerName,PlayerSurname,PlayerKey;
   const insectPlayer=()=>{
       props.Player.push({name:PlayerName,surname:PlayerSurname,password:PlayerKey});
       console.log(props.Player);
    }
    const insectName=(e)=>{
       PlayerName=e.target.value;
    }
    const insectSurname=(e)=>{
       PlayerSurname=e.target.value;
    }
    const insectKey=(e)=>{
       PlayerKey=e.target.value;
    }
    return(
        <div>
         <h1 className='Stitle'>registration</h1>
        <div className='SignUp'>
           
           <div className='SPage'>
                 <div className='Spage'>
                        <div className='h'>
                            <p className='p'>name</p>
                            <input type='text' className='input' onChange={insectName}/>
                            <p className='p'>surname</p>
                            <input type='text' className='input' onChange={insectSurname}/>
                            <p className='p'>password</p>
                            <input type='password' className='input' onChange={insectKey}/>
                            <div className='Sb'>
                                <div className='Sbutton'>
                                    {'cancel'}
                                </div>
                                <div className='Sbutton' onClick={insectPlayer}>
                                   {'register'}
                                </div>
                            </div>
                        </div>
                 </div> 
           </div>
        </div>
        </div>
    );
}

export default SignUp;