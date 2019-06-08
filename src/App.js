import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HeaderLinks from './HeaderLinks.js'
import Home from './Home'
import About from './About'
import Error from './Error'
import Admin from './Admin'
import './scss/styles.scss'

export default class App extends Component {
    
    render() {
        return (
          <Router>
            <div>
              <HeaderLinks />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" render={() => {
                  if (true)
                    return <About />
                  else
                    return <Error />
                }} />
                <Route path="/admin" component={Admin} />
                <Route component={Error} />

              </Switch>
            </div>
          </Router>
        );
    }
}