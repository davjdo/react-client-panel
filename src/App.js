import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppNavbar from './components/layout/AppNavbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <div className="container">
          <h1>hello</h1>
        </div>
      </div>
    );
  }
}

export default App;
