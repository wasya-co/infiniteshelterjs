
import {
  ArrowDownward as _ArrowDownward,
  ArrowUpward as _ArrowUpward,
} from '@material-ui/icons'
import React, { useContext } from 'react'
import styled from 'styled-components'

import {
  AuthContext,
  FlexCol, FlexRow,
  logg,
} from 'ishlibjs'

import {
  C,
  TwofoldContext,
  useApi,
} from "$shared"

const IconUp = _ArrowUpward

const IconDown = _ArrowDownward

const WCount = styled.div``;

/**
 * Voteable
 *
**/
const Voteable = (props) => {
  logg(props, 'Voteable')
  const { item } = props

  const {
    currentUser, setCurrentUser,
    setLoginModalOpen,
  } = useContext(AuthContext)
  logg(useContext(AuthContext), 'Voteable Used AuthContext')

  const api = useApi()

  const setLoginModalMessage = () => {} // @TODO: implement! _vp_ 2022-08-24

  const voteUp = () => {

    // HEREHERE
    if (!currentUser.email) {
      setLoginModalMessage("Please login or register to upvote or downvote.")
      setLoginModalOpen(true)
      return
    }

    if (item.current_user_vote_value === C.vote_values.up) {
      api.unvote()
    } else {
      api.vote({
        value: C.vote_values.up,
        votee_class_name: item.item_type,
        votee_id: item.id,
        voter_id: currentUser.id,
      })
    }
  }
  const voteDown = () => {

    // HEREHERE
    if (!currentUser.email) {
      setLoginModalMessage("Please login or register to upvote or downvote.")
      setLoginModalOpen(true)
      return
    }

    if (item.current_user_vote_value === C.vote_values.down) {
      api.unvote()
    } else {
      api.vote({
        value: C.vote_values.down,
        votee_class_name: item.item_type,
        votee_id: item.id,
        voter_id: currentUser.id,
      })
    }
  }

  return <FlexCol>
    <IconUp onClick={voteUp} />
    <WCount>{ 'undefined' === typeof item.votes_score ? '-' : item.votes_score }</WCount>
    <IconDown onClick={voteDown} />
  </FlexCol>
}
Voteable.propTypes = {

};

export default Voteable
