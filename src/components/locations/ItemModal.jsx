
import React, { Fragment as F, useContext, useEffect, useRef, useState } from "react"
import Modal from "react-modal"
import { Route, useHistory, useLocation, useParams } from 'react-router-dom'
import styled from 'styled-components'

import config from 'config'
import {
  Actions,
  CloseBtn,
} from 'ishlibjs'

import { C, logg, TwofoldContext } from "$shared"
import { GalleriesShow } from "$components/galleries"
import {
  ReportsForm,
  ReportsShow,
} from "$resources/reports"

/**
 * ItemModal
 * @TODO: move to $components/application ?
 * shows items, but also I use it to create report, ...
 *
**/
const ItemModal = (props) => {
  // logg(props, 'ItemModal')
  const { item } = props

  const params = useParams()
  const history = useHistory()

  const {
    showItem, setShowItem,
  } = useContext(TwofoldContext)

  const onClose = () => {
    history.push(config.router.locationPath(params.slug))
    setShowItem(null)
  }

  if (!item) { return }

  return <Modal isOpen={!!showItem} >
    <Actions style={{ position: 'absolute', top: '1em', right: '1em' }} >
      <CloseBtn onClick={onClose} />
    </Actions>
    { item.item_type === C.item_types.report && action === C.actions.show && <ReportsShow match={{ params: { slug: item.reportname } }} /> }
    { item.item_type === C.item_types.report && action === C.actions.new && <ReportsForm /> }
    { item.item_type === C.item_types.gallery && <GalleriesShow match={{ params: { slug: item.slug } }} /> }
  </Modal>
}

export default ItemModal
