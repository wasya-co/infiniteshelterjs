
import React, {
  useContext, useState,
} from 'react'
import Modal from 'react-modal'

const MarkerContext = React.createContext({})
const MarkerContextProvider = ({ children, ...props }) => {

  const [ marker, setMarker ] = useState()
  const [ MarkerEditModalOpen, setMarkerEditModalOpen ] = useState(false)

  return <MarkerContext.Provider value={{ marker, setMarker, MarkerEditModalOpen, setMarkerEditModalOpen, }}
  >{children}</MarkerContext.Provider>
}

export { default as Marker } from './Marker'
export { default as MarkerEditModal } from './MarkerEditModal'
export {
  MarkerContext,
  MarkerContextProvider,
}
export { default as MarkersList } from "./MarkersList"
export { default as MarkerForm } from './MarkerForm'
