import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppNavbar from './components/layout/AppNavbar';
import Dashboard from './components/layout/Dashboard';
import AddClient from './components/clients/AddClient';
import EditClient from './components/clients/EditClient';
import ClientDetails from './components/clients/ClientDetails';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/client/add" component={AddClient} />
            <Route exact path="/client/edit/:id" component={EditClient} />
            <Route exact path="/client/:id" component={ClientDetails} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
