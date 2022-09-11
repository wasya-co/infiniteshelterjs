
import React from 'react'
import ReactDOM from 'react-dom'
import AppWrapper2 from './AppWrapper2'
import * as serviceWorker from './serviceWorker'

import 'react-toastify/dist/ReactToastify.css'
import 'ishlibjs/dist/index.css'
import './variables.css'
import './application.scss'

ReactDOM.render(<AppWrapper2 />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()



