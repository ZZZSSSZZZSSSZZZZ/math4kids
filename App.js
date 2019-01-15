import React, { Component } from 'react';

import Card from './Card';
import BodySkin from './BodySkin';
import LandingPage from './LandingPage';
import NavBar from './NavBar';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
    landing:true,
    addition:false,
    subtration:false,
    multiplication:false,
    division:false
    }   
  }

  showlanding=(input)=>{

    switch(input){
      case 1:this.setState({ 
        landing:true,
        addition:false,
        subtration:false,
        multiplication:false,
        division:false});
        break;
       case 2:this.setState({ 
        landing:false,
        addition:true,
        subtration:false,
        multiplication:false,
        division:false});
        break;
       case 3:this.setState({ 
        landing:false,
        addition:false,
        subtration:true,
        multiplication:false,
        division:false});
        break;
        case 4:this.setState({ 
        landing:false,
        addition:false,
        subtration:false,
        multiplication:true,
        division:false});
        break; 
        case 5:this.setState({ 
        landing:false,
        addition:false,
        subtration:false,
        multiplication:false,
        division:true});
        break; 
        default:this.setState({ 
        landing:true,
        addition:false,
        subtration:false,
        multiplication:false,
        division:false});
        break;
    }

    const show=this.state.landing;
    this.setState({landing:!show});
  }

  render() {
    return (
      <div className="App">   
          <div className='inline'>
               <Card/>
               <NavBar showPage = {this.showlanding}/>           
         </div>
         <BodySkin>
            {this.state.landing?
            <LandingPage/>:'nothing to show'
            }
         </BodySkin>
      </div>
    );
  }
}

export default App;
