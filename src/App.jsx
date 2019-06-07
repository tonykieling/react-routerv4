import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import HeaderLinks from './HeaderLinks.jsx'

import './scss/styles.scss'

export default class App extends React.Component {
    
    render() {
        return (
          <Router>
            <h1>Hello World!</h1>
            <HeaderLinks />
          </Router>
        );
    }
}