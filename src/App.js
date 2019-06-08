import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HeaderLinks from './HeaderLinks.js'
import Home from './Home'
import About from './About'
import Error from './Error'

import './scss/styles.scss'

export default class App extends Component {
    
    render() {
        return (
          <Router>
            <div>
              <HeaderLinks />
              <Route exact path="/" component={Home} />
              <Route path="/about" render={() => {
                if (false)
                  return <About />
                else
                  return <Error />
              }} />
            </div>
          </Router>
        );
    }
}