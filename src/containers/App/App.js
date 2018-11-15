import React, { Component } from 'react';
import {
  HashRouter as Router, 
  Route,
  Redirect,
  withRouter
} from 'react-router-dom';
import Login from '../Login/Login';
import Home from '../../components/Home/Home';

class App extends Component {
  constructor() {
    super();
    this.state = {
      logged: false
    }
  }

  onLogin = () => {
    this.setState({
      logged: true
    })
  }

  render() {
    const { logged } = this.state;
    return (
      <Router>
        <div>
          <Route 
            exact path='/'
            render={() => {
              return !logged ? <Login onLogin={this.onLogin} /> : <Redirect to={{pathname: '/home'}} />
            }}/>
            <Route
              exact path='/home'
              render={() => {
                return logged ? <Home /> : <Redirect to={{pathname: '/'}} />
              }} />
        </div>
      </Router>
    );
  }
}

export default App;
