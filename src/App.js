import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter, Switch, Route } from 'react-router-dom'
import Auth from './component/Auth/Auth'
import Dashboard from './component/Dashboard/Dashboard'
import Form from './component/Form/Form'
import Nav from './component/Nav/Nav'
import Post from './component/Post/Post'
import Routes from './routes'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path='/' component={Auth} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/post/:postid' component={Post} />
          <Route path='/new' component={Form} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
