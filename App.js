import React, { Component } from 'react';

import Card from './Card';
import BodySkin from './BodySkin';
import SignUp from './SignUp';
import Footer from './Footer';
import LandingPage from './LandingPage';
import NavBar from './NavBar';
import Records from './Records';
import Game from './Game';
import Game1 from './Game1';
import Logn from './Logn';
import Player from './Players';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
    Players:Player,
    res:0,
    isCorrect:<div className='Gb2'>
      <div></div>
    </div>,
    playGame:false,
    landing:true,
    signUp:false,
    login:false,
    record:false,
    addition:false,
    subtration:false,
    multiplication:false,
    division:false
    }   
  }
  LastQ=[];
  y=Math.floor(Math.random()*200);
  x=Math.floor(Math.random()*200);
  lastQ=(<div></div>);
  showlanding=(input)=>{

    switch(input){
      case 1:this.setState({ 
        playGame:false,
        landing:false,
        login:true,
        addition:false,
        subtration:false,
        multiplication:false,
        division:false});
        break;
       case 2:this.setState({ 
        playGame:false,
        landing:false,
        signUp:true,
        login:false,
        addition:true,
        subtration:false,
        multiplication:false,
        division:false});
        break;
       case 3:this.setState({ 
        playGame:true,
        landing:false,
        login:false,
        signUp:false,
        addition:false,
        subtration:true,
        multiplication:false,
        division:false});
        break;
        case 4:this.setState({ 
        record:true,
        playGame:false,
        login:false,
        signUp:false,
        landing:false,
        addition:false,
        subtration:false,
        multiplication:true,
        division:false});
        break; 
        case 5:this.setState({ 
         record:false,
        playGame:false,
        login:false,
        signUp:false,
        landing:true,
        addition:false,
        subtration:false,
        multiplication:true,
        division:false});
        break; 
        default:this.setState({ 
        addition:false,
        subtration:false,
        multiplication:false,
        division:false});
        break;
    }

    /*const show=this.state.landing;
    this.setState({landing:!show});
    */
  }
    
   
   answer=(e)=>{
         this.setState({res: e.target.value});
    }
  splicer=(i)=>{
       console.log('delet');
       console.log(i);
       let P=[...this.state.Players];
       P.splice(i,1);
       this.setState({Players:P});
    }
   add=(a,b,)=>{



       if(this.state.res==(a+b))
            {
            console.log('correct');  
            this.lastQ=`${a} + ${b} = ${(a+b)} correct`;   
            this.setState({isCorrect:(<div className='Gb3'>
                    <div className='Gbutton3'>
                        correct
                    </div>
            </div>  )}) 
            
            this.y=Math.floor(Math.random()*200);
            this.x=Math.floor(Math.random()*200);
                  }   
      else{    
            console.log('incorrect');
            this.lastQ=`${a} + ${b} = ${this.state.res} wrong ${(a+b)}`; 
            this.setState({isCorrect:(
            <div className='Gb2'>
              <div className='Gbutton2'>
                        incorrect
             </div>
            </div>)});
            
            this.y=Math.floor(Math.random()*200);
            this.x=Math.floor(Math.random()*200);
           
        }
         this.LastQ.push(this.lastQ);
         this.LastQ.push('     |     ');
    }
  


 
 
 
  render() {
   
    return (
      <div className="App">   
          <div className='inline'>
               <Card Show={this.showlanding}/>
               <NavBar showPage = {this.showlanding}/>           
         </div>
         <BodySkin>
         <div>{this.state.landing?
                    <LandingPage show={this.showlanding}/>
                    :this.state.playGame?
                    <Game>
                          <Game1 ADD={this.add} ANSWER={this.answer}
                          x={this.x} y={this.y} isCorrect={this.state.isCorrect}
                          LastQ={this.LastQ}/>
                    </Game>
                    :this.state.login?
                    <Logn/>
                    :this.state.signUp?
                    <SignUp Player={this.state.Players}/>
                    :this.state.record?
                    <Records splicer={this.splicer} Player={this.state.Players}/>:
                    <div>bad choice</div>                  
             }</div>
         </BodySkin>
         <div className='footer'>
         <Footer >
           <p>math4kids@gmail.com</p>
         </Footer>
         </div>
      </div>
    );
  }
}

export default App;
