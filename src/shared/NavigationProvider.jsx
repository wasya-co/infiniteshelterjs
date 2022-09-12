
import React from 'react'

import {
  logg,
} from "$shared"

export const NavigationContext = React.createContext({})

/**
 * NavigationProvider
**/
const NavigationProvider = ({ children, ...props }) => {
  // logg(props, 'NavigationProvider')
  const {
    useHistory,
  } = props

  // const history = useHistory()

  return <NavigationContext.Provider value={{
    // history,
    useHistory
  }} >
    { children }
  </NavigationContext.Provider>
}
export default NavigationProvider
