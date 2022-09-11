
import PropTypes from 'prop-types'
import React, { useState } from 'react'

import {
  logg,
} from '$shared'

export const SsrContext = React.createContext({})

/**
 * SsrProvider
**/
const SsrProvider = ({ children, ...props }) => {
  // logg(props, 'SsrProvider')
  const {
    location: _location,
  } = props

  const [ location, setLocation ] = useState(_location)

  return <SsrContext.Provider value={{ location, setLocation }} >
    { children }
  </SsrContext.Provider>
}
SsrProvider.propTypes = {
  location: PropTypes.object,
}
export default SsrProvider
