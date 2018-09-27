import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  UserIsAuthenticated,
  UserIsNotAuthenticated
} from './components/helpers/auth';
import AppNavbar from './components/layout/AppNavbar';
import Dashboard from './components/layout/Dashboard';
import AddClient from './components/clients/AddClient';
import EditClient from './components/clients/EditClient';
import ClientDetails from './components/clients/ClientDetails';
import Settings from './components/settings/Settings';
import Login from './components/auth/Login';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={UserIsAuthenticated(Dashboard)} />
            <Route
              exact
              path="/client/add"
              component={UserIsAuthenticated(AddClient)}
            />
            <Route
              exact
              path="/client/edit/:id"
              component={UserIsAuthenticated(EditClient)}
            />
            <Route
              exact
              path="/client/:id"
              component={UserIsAuthenticated(ClientDetails)}
            />
            <Route
              exact
              path="/login"
              component={UserIsNotAuthenticated(Login)}
            />
            <Route
              exact
              path="/settings"
              component={UserIsAuthenticated(Settings)}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
