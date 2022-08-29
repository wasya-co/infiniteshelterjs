import React from 'react'
import ReactDOM from 'react-dom'
import AppWrapper from './AppWrapper'
import * as serviceWorker from './serviceWorker'
import {
  Link, Switch, BrowserRouter as Router, Redirect, Route as _Route, useHistory, withRouter
} from 'react-router-dom'

import styles from 'ishlibjs/dist/index.css'

ReactDOM.render(<AppWrapper />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()



