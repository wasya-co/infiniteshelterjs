
import React from 'react'

import 'react-toastify/dist/ReactToastify.css'
import 'ishlibjs/dist/index.css'
import '$src/variables.css'
import '$src/application.scss'


function NextApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default NextApp
