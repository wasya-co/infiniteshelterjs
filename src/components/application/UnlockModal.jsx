
// import { useRouter } from 'next/router'
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

const modalStyle = {
  overlay: {},
  content: {
    margin: 'auto',
    maxWidth: '400px',

  }
}

/**
 * UnlockModal
 */
const UnlockModal = (props) => {
  // logg(props, 'UnlockModal')
  const { location, } = props

  if ('undefined' === typeof window) { return null } // next_js

  const {
    itemToUnlock, setItemToUnlock,
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

  if (!itemToUnlock.id) { return null }

  const api = useApi()
  const history = useHistory()
  const match = useRouteMatch()

  // // next_js
  // let match
  // const router = useRouter()
  // try {
  //   match = useRouteMatch()
  // } catch(e) {
  //   // logg(e, 'e77')
  //   match = { params: router.query }
  // }



  const doUnlock = () => {
    // logg(itemToUnlock, 'itemToUnlock')

    // @TODO: check how many unlocks I have, and offer to purchase more if not enough. _vp_ 2022-09-06
    // @TODO: Do I Need to refresh the newsfeed somehow? _vp_ 2022-09-04
    api.doUnlock({ kind: itemToUnlock.item_type, id: itemToUnlock.id }).then((r) => {
      // logg(r, 'OK doUnlock')

      setItemToUnlock({}) // @TODO: Change this to null if possible. Test-drive this change. _vp_ 2022-09-04
      setCurrentUser(r) // @TODO: remove, this does not belong here. _vp_ 2022-09-06

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



  let closable = typeof itemToUnlock.closable === 'undefined' ? true : itemToUnlock.closable

  // @TODO: this is messy
  let gohome = () => {
    setItemToUnlock({})
    setRatedConfirmation(true)
    history.push(config.homePath)
  }

  const cost = itemToUnlock.premium_tier

  Modal.setAppElement('body')

  return (<Modal style={modalStyle} isOpen={!!itemToUnlock.id} >
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
UnlockModal.propTypes = {
  location: PropTypes.object.isRequired,
}

export default UnlockModal
