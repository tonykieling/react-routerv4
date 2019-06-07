import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'

import './scss/styles.scss'

class App extends React.Component {
    
    render() {
        return (
          <Router>
            <h1>Hello World!</h1>

          </Router>
        );
    }
}


/*******************************************/
ReactDOM.render(<App />, document.getElementById('app'));
