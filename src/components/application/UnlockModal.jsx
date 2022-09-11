
import PropTypes from 'prop-types'
import React, { Fragment as F, useContext, useEffect, useRef, } from 'react'
import Modal from "react-modal"
import { useHistory, useRouteMatch } from 'react-router-dom'
import styled from 'styled-components'

import {
  AuthContext,
  ModalHeader,
} from 'ishlibjs'
import config from 'config'

import { TwofoldContext, } from "$components/TwofoldLayout"
import {
  Btn,
  C,
  inflector,
  logg,
} from "$shared"

import './UnlockModal.module.scss'

const BtnRow = styled.div`
  display: flex;
  justify-content: space-around;
`;


/**
 * UnlockModal
 */
const UnlockModal = (props) => {
  // logg(props, 'UnlockModal')

  const {
    itemToUnlock, setItemToUnlock,
    location, setLocation,
    loginModalOpen, setLoginModalOpen,
    purchaseModalOpen, setPurchaseModalOpen,
    ratedConfirmation, setRatedConfirmation,
  } = useContext(TwofoldContext)
  // logg(useContext(TwofoldContext), 'unlockModalUsedTwofoldContext')

  const {
    currentUser, setCurrentUser,
    useApi,
  } = useContext(AuthContext)
  // logg(useContext(AuthContext), 'unlockModalUsedAuthContext')

  const api = useApi()
  const history = useHistory()

  let match = useRouteMatch()

  const doUnlock = async () => {

    // @TODO: check how many unlocks I have, and offer to purchase more if not enough.
    // @TODO: Do I Need to refresh the newsfeed somehow? _vp_ 2022-09-04
    await api.doUnlock({ kind: itemToUnlock.item_type, id: itemToUnlock.id }).then((r) => {

      // @TODO: Change this to null if possible. Test-drive this change. _vp_ 2022-09-04
      setItemToUnlock({})
      setCurrentUser(r)

      // @TODO: move, copy-pasted from LocationsShowDesktop
      api.getLocation({ slug: match.params.slug }).then(r => {
        setLocation(r)
        if (r.rated === C.rated.nc17 && !ratedConfirmation) { // @TODO: not test-driven, bad!
          setRatedConfirmation(false)
        }
      })

      const resource_name = inflector.tableize(itemToUnlock.item_type)
      history.push(`/en/locations/show/${match.params.slug}/${resource_name}/show/${itemToUnlock.slug}`)

    }).catch((e) => {
      logg(e, 'e19 - cannot doUnlock')
    })
  }

  if (!itemToUnlock.id) { return null }

  let closable = typeof itemToUnlock.closable === 'undefined' ? true : itemToUnlock.closable

  // @TODO: this is messy
  let gohome = () => {
    setItemToUnlock({})
    setRatedConfirmation(true)
    history.push(config.homePath)
  }

  const cost = itemToUnlock.premium_tier

  Modal.setAppElement('body')

  return (<Modal isOpen={!!itemToUnlock.id} >
    <ModalHeader onClose={() => closable && setItemToUnlock(false) } >Unlock this item?</ModalHeader>
    <p>To access this content, please unlock it first. It costs {cost} coin(s) to unlock.</p>
    { currentUser && <F>
      <p>You have <b>{currentUser.n_unlocks}</b> unlocks.</p>
      { currentUser.n_unlocks >= cost && <Btn className='doUnlock' onClick={doUnlock} >Unlock</Btn> }
      { currentUser.n_unlocks < cost && <F>
        <p>You don't have enough unlocks.</p>
        <Btn onClick={() => { setPurchaseModalOpen(true) ; setItemToUnlock(false)} } >Purchase more.</Btn>
      </F> }
    </F> }
    { !currentUser && <F>
      <p>You have to be logged in to unlock content. <a onClick={() => { setLoginModalOpen(true) ; setItemToUnlock(false) }}>Please login.</a></p>
    </F> }
    <BtnRow>
      { !closable && <Btn onClick={gohome} >Go Home</Btn> }
    </BtnRow>
  </Modal>)

}

export default UnlockModal
