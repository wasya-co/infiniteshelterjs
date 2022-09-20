
import Head from 'next/head'
import Script from 'next/script'
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import {
  NavigationProvider,
} from "$shared"
import WrappedApp from '$src/WrappedApp'

function App() {
  const [ isMounted, setIsMounted ] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return <div>

      <WrappedApp />

    <Script
      src="https://www.googletagmanager.com/gtag/js?id=G-W8PVZ83B9H"
      strategy="lazyOnload"
    />
    <Script id="google-analytics" strategy="lazyOnload">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-W8PVZ83B9H');
      `}
    </Script>

  </div>
}

export default App