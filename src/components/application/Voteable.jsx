
import {
  ArrowDownward as _ArrowDownward,
  ArrowUpward as _ArrowUpward,
} from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

import {
  FlexCol, FlexRow,
  logg,
} from 'ishlibjs'

const IconUp = _ArrowUpward

const IconDown = _ArrowDownward

const WCount = styled.div``;

/**
 * Voteable
 *
**/
const Voteable = (props) => {
  // logg(props, 'Voteable')
  const { item } = props

  const voteUp = () => {

    // HEREHERE
    if (!current_user) { // @TODO: or how do I check? I forget
      showModal('Login or register to vote!')
      return
    }

    if (item.current_user_vote_value === C.vote_values.up) {
      api.unvote({ voter_id: current_user.user_profile_id,
        votee_id: item.id,
        votee_class_name: item.item_type,
      })
    } else {
      api.vote({ voter_id: current_user.user_profile_id,
        value: C.vote_values.up,
        votee_id: item.id,
        votee_class_name: item.item_type,
      })
    }
  }
  const voteDown = () => {

    // HEREHERE
    if (!current_user) { // @TODO: or how do I check? I forget
      showModal('Login or register to vote!')
      return
    }

    if (item.current_user_vote_value === C.vote_values.down) {
      api.unvote({ voter_id: current_user.user_profile_id,
        votee_id: item.id,
        votee_class_name: item.item_type,
      })
    } else {
      api.vote({ voter_id: current_user.user_profile_id,
        value: C.vote_values.down,
        votee_id: item.id,
        votee_class_name: item.item_type,
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
