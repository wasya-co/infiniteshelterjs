
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
 * MarkerEditModal
 *
 * For editing/adding markers.
**/
const MarkerEditModal = (props) => {

  const {
    MarkerEditModalOpen, setMarkerEditModalOpen,
  } = useContext(MarkerContext)
  // logg(useContext(MarkerContext), 'MarkerEditModalUsedContext')

  return <Modal
    className={`MarkerEditModal ${styles.MarkerEditModal}`}
    isOpen={MarkerEditModalOpen}
  >
    <h1>
      marker modal
      <span onClick={() => setMarkerEditModalOpen(false)}>[x]</span>
    </h1>
    <MarkerForm />
  </Modal>
}

export default MarkerEditModal
export {
  MarkerContext,
  MarkerContextProvider,
  MarkerEditModal,
}
