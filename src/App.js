import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HeaderLinks from './HeaderLinks.js'
import Home from './Home'

import './scss/styles.scss'

export default class App extends Component {
    
    render() {
        return (
          <Router>
            <div>
              <HeaderLinks />
              <Route exact path="/" component={Home} />
            </div>
          </Router>
        );
    }
}