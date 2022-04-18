
import React, {
  useContext, useState,
} from 'react'
import Modal from 'react-modal'

const MarkerContext = React.createContext({})
const MarkerContextProvider = ({ children, ...props }) => {

  const [ marker, setMarker ] = useState()
  const [ markerModalOpen, setMarkerModalOpen ] = useState(false)

  return <MarkerContext.Provider value={{ marker, setMarker, markerModalOpen, setMarkerModalOpen, }}
  >{children}</MarkerContext.Provider>
}


export { default as MarkerModal } from './MarkerModal'
export {
  MarkerContext,
  MarkerContextProvider,
}
export { default as MarkersList } from "./MarkersList"
export { default as MarkerForm } from './MarkerForm'
