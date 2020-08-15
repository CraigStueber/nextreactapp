import React, { Component } from 'react';
import './App.css';
import Ball from './Ball';

class App extends Component{
  render() {
 return (
    <div className='App'>
      <Ball num={17} />   
      <Ball num={13} />

      <Ball num={11} />
      <Ball num={9} />
      
    </div>
  );
}
}


export default App;
