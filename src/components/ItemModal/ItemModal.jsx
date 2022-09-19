
import React, { Fragment as F, useContext, useEffect, useRef, useState } from "react"
import Modal from "react-modal"
import { Route, useHistory, useLocation, useParams } from 'react-router-dom'
import styled from 'styled-components'

import config from 'config'
import {
  Actions,
  CloseBtn,
} from 'ishlibjs'

import { TwofoldContext } from "$components/TwofoldLayout"
import { GalleriesShow } from "$components/galleries"
import {
  ReportsForm,
  ReportsShow,
} from "$components/reports"
import { C, logg, } from "$shared"
import { appPaths } from "$src/AppRouter"

import styles from './ItemModal.module.scss'

/**
 * ItemModal
 * @TODO: move to $components/application ?
 * shows items, but also I use it to create reports
 *
**/
const ItemModal = (props) => {
  logg(props, 'ItemModal')
  const { item } = props
  if (!item) { return null }

  const params = useParams()
  const history = useHistory()

  const {
    showItem, setShowItem,
  } = useContext(TwofoldContext)

  const onClose = () => {
    history.push(appPaths.location(params.slug))
    setShowItem(null)
  }

  if (!item.action) { item.action = C.actions.show } // set default, but @TODO: make sure I don't have to useState()

  Modal.setAppElement('body')

  return <Modal
    className={`ItemModal ${styles.ItemModal}`}
    isOpen={!!item}
    // overlayClassName={styles.LoginModalOverlay}
    // portalClassName={styles.LoginModalPortal}
  >
    <Actions >
      <CloseBtn onClick={onClose} />
    </Actions>
    { item.item_type === C.item_types.report && item.action === C.actions.show && <ReportsShow item={item} match={{ params: { slug: item.reportname } }} /> }
    { item.item_type === C.item_types.report && item.action === C.actions.new && <ReportsForm /> }
    { item.item_type === C.item_types.gallery && <GalleriesShow match={{ params: { slug: item.slug } }} /> }
    .^.
  </Modal>
}

export default ItemModal