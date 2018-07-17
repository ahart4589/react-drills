import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import arch from './arch.jpg'
import Image from './Image'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Image myImage={arch}/>
      </div>
    );
  }
}

export default App;
