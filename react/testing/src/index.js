import 'core-js/shim'
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'

import './elements/css/elements.css'
import 'font-awesome/css/font-awesome.css'

import App from './App'

ReactDOM.render((
  <Router>
    <App />
  </Router>
), document.getElementById('root'));
