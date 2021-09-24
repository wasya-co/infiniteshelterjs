
import { IonPage, IonContent, IonButton, IonImg, IonLoading } from "@ionic/react"
import React, { Fragment as F, useContext, useEffect, useRef, useState } from "react"
import Modal from "react-modal"
import { Route, useLocation, useHistory, Switch } from 'react-router-dom'
import styled from 'styled-components'

import { logg, request, S, TwofoldContext, ZoomContext } from "$shared"
import { Metaline } from "$components/application"
import { ReportsShow } from "$components/reports"
import { Newsitems } from "$components/newsitems"

const ItemModal = (props) => {
  logg(props, 'ItemModal')
  const { item } = props

  const { showItem, setShowItem } = useContext(TwofoldContext)

  return <Modal isOpen={!!showItem} >
    <h1 onClick={() => setShowItem(false)} >[x]</h1>
    { item.item_type === 'report' && <ReportsShow match={{ params: { slug: item.reportname } }} /> }
  </Modal>
}

export default ItemModal
