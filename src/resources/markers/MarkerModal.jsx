
import React, {
  useContext, useState,
} from 'react'
import Modal from 'react-modal'

import {
  MarkerContext, MarkerContextProvider,
  MarkerForm,
} from './'
import {
  logg,
} from '$shared'

import styles from './Markers.module.scss'

/**
 * MarkerModal
 *
 * For editing/adding markers.
**/
const MarkerModal = (props) => {

  const {
    markerModalOpen, setMarkerModalOpen,
  } = useContext(MarkerContext)
  // logg(useContext(MarkerContext), 'MarkerModalUsedContext')

  return <Modal
    className={`MarkerModal ${styles.MarkerModal}`}
    isOpen={markerModalOpen}
  >
    <h1>
      marker modal
      <span onClick={() => setMarkerModalOpen(false)}>[x]</span>
    </h1>
    <MarkerForm />
  </Modal>
}

export default MarkerModal
export {
  MarkerContext,
  MarkerContextProvider,
  MarkerModal,
}
