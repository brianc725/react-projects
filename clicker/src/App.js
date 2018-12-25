import React, { Component } from 'react';
import Header from './components/header';
import Clicker from './components/clicker';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Clicker/>
      </div>
    );
  }
}

export default App;
