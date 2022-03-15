
import { IonPage, IonContent, IonButton, IonImg, IonLoading } from "@ionic/react"
import React, { Fragment as F, useContext, useEffect, useRef, useState } from "react"
import Modal from "react-modal"
import { Route, useLocation, useHistory, Switch } from 'react-router-dom'
import styled from 'styled-components'

import { C, logg, request, S, TwofoldContext, ZoomContext } from "$shared"
import { Metaline } from "$components/application"
import { GalleriesShow } from "$components/galleries"
import { ReportsShow } from "$components/reports"
import { Newsitems } from "$components/newsitems"


const Fabs = styled.div`
  // border: 1px solid red;

  position: fixed;
`;

/**
 * ItemModal
 * @TODO: move to $components/application
 */
const ItemModal = (props) => {
  // logg(props, 'ItemModal')
  const { item } = props

  const {
    showItem, setShowItem, // @TODO: should navigate here!
  } = useContext(TwofoldContext)

  return <Modal isOpen={!!showItem} >
    <Fabs className='Fabs' >
      <div onClick={() => setShowItem(false)} >[x]</div>
    </Fabs>
    { item.item_type === C.item_types.report && <ReportsShow match={{ params: { slug: item.reportname } }} /> }
    { item.item_type === C.item_types.gallery && <GalleriesShow match={{ params: { slug: item.slug } }} /> }
  </Modal>
}

export default ItemModal
