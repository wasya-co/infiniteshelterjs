
import React, { useState, useEffect } from 'react'
import AppWrapper from '../src/AppWrapper'

function App() {
  const [ isMounted, setIsMounted ] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return <AppWrapper />
}

export default App