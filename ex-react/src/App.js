import React, { Component } from 'react';
import Screen from './Screen';
import ButtonBoard from './ButtonBoard';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      total = null,
      next = null,
      operation =null
    };
  }
  render() {
    return (
      <div id='app'>
          <div id="Screen">
              <Screen displayValue={this.state.total}/>
          </div>
          <div id="ButtonBoard">
              <ButtonBoard />
          </div>
      </div>
    );
  }
}

export default App;
