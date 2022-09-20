
import React, {
  useContext, useState,
} from 'react'
import Modal from 'react-modal'


const MarkerContext = React.createContext({})

/**
 * MarkerProvider - for editing, right? _vp_ 2022-09-18
**/
const MarkerContextProvider = ({ children, ...props }) => {

  const [ marker, setMarker ] = useState()
  const [ MarkerEditModalOpen, setMarkerEditModalOpen ] = useState(false)

  return <MarkerContext.Provider value={{ marker, setMarker, MarkerEditModalOpen, setMarkerEditModalOpen, }}
  >{children}</MarkerContext.Provider>
}

export {
  MarkerContext,
  MarkerContextProvider,
}


export { default as Marker, MarkerEmpty } from './Marker'
export { default as MarkerEditModal } from './MarkerEditModal'
export { default as MarkersList } from "./MarkersList"
export { default as MarkerForm } from './MarkerForm'
