import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import HeaderLinks from './HeaderLinks.js'

import './scss/styles.scss'

export default class App extends React.Component {
    
    render() {
        return (
          <Router>
            <div>
              <HeaderLinks />

            </div>
          </Router>
        );
    }
}