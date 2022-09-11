
import React from 'react'

import {
  logg,
} from "$shared"

export const LocationContext = React.createContext({})

/**
 * LocationProvider
 *
 * used in NewsitemGallery, for linking to a gallery inside a location.
**/
const LocationProvider = ({ children, ...props }) => {
  // logg(props, 'LocationProvider')

  return <LocationContext.Provider value={{ ...props }} >
    {children}
  </LocationContext.Provider>
}

export default LocationProvider
