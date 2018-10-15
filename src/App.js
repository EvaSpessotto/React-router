import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';

import './App.css';

import Home from './Components/Home';
import OurHistory from './Components/OurHistory';


class App extends Component {
  render() {
    return (
      <div className="App">
          <nav>
            <NavLink activeClassName="active" exact to="/">Home</NavLink> |&nbsp;
            <NavLink activeClassName="active" to="/notre-histoire">Notre Histoire</NavLink>
          </nav>

          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/notre-histoire" component={OurHistory}/>
          </Switch>
      </div>
    );
  }
}

export default App;
