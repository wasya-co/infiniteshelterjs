
import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
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

const _IconUp = ({ fill, ...props }) => {
  return <div {...props} >
    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
      width="20px" height="20px" viewBox="0 0 124.138 124.138"
      fill={fill}
      style={{ enableBackground: 'new 0 0 124.138 124.138' }}
    >
      <g><path d="M50.569,124.138h23.1c4.7,0,9-3.8,9-8.601V81.138c0-4.7,3.5-9,8.2-9h14.699c7.2,0,11.2-8.101,6.801-13.8l-44.101-55
     c-3.5-4.5-10.2-4.4-13.6,0l-42.9,55c-4.4,5.699-0.4,13.8,6.8,13.8h14.8c4.7,0,8.3,4.2,8.3,9v34.399
     C41.669,120.338,45.769,124.138,50.569,124.138z"/></g>
      <g></g><g></g><g></g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>
   </svg>
 </div>
}
const IconUp = styled(_IconUp)`
  cursor: pointer;
`;


const _IconDown = ({ fill, ...props }) => {
  return <div {...props} >
    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	    width="20px" height="20px" viewBox="0 0 124.075 124.075"
      fill={fill}
      style={{ enableBackground: 'new 0 0 124.075 124.075' }}
	  >
      <g><path d="M54.628,120.7c3.5,4.5,10.2,4.5,13.601,0l44.1-54.9c4.4-5.7,0.4-13.8-6.8-13.8h-14.7c-4.7,0-8.2-4.2-8.2-9V8.6
		c0-4.8-4.2-8.6-9-8.6h-23.1c-4.8,0-8.9,3.8-8.9,8.6V43c0,4.7-3.6,9-8.3,9h-14.8c-7.1,0-11.2,8-6.8,13.7L54.628,120.7z"/>
      </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
    </svg>
  </div>
}
const IconDown = styled(_IconDown)`
  cursor: pointer;
`;

const WCount = styled.div`
  text-align: center;
`;

/**
 * Votable
 *
**/
const Votable = (props) => {
  // logg(props, 'Votable')
  const { item } = props

  const {
    currentUser, setCurrentUser,
    setLoginModalOpen,
  } = useContext(AuthContext)
  // logg(useContext(AuthContext), 'Votable Used AuthContext')

  const api = useApi()

  const [ votesScore, setVotesScore ] = useState('undefined' === typeof item.votes_score ? '-' : item.votes_score)
  const [ upFill, setUpFill ] = useState("#cecece")
  const [ downFill, setDownFill ] = useState("#cecece")

  const [ currentUserVoteValue, setCurrentUserVoteValue ] = useState(item.current_user_vote_value)
  useEffect(() => {

    // logg(currentUserVoteValue, 'currentUserVoteValue')
    // logg(C.vote_values.up, 'one?')
    // logg(C.vote_values.down, 'two?')
    // logg(currentUserVoteValue === C.vote_values.up, 'three?')
    // logg(currentUserVoteValue === C.vote_values.down, 'four?')


    if (currentUserVoteValue === C.vote_values.up) {
      setUpFill('#cc3333')
      setDownFill('#cecece')
    }
    if (currentUserVoteValue === C.vote_values.down) {
      setUpFill('#cecece')
      setDownFill('#cc3333')
    }
  }, [currentUserVoteValue])


  const voteUp = () => {
    if (!currentUser.email) {
      setLoginModalOpen("Please login or register to upvote or downvote.")
      return
    }

    if (currentUserVoteValue === C.vote_values.up) {
      logg('unvoting is not implemented!')
      toast('unvoting is not implemented!')
      api.unvote()
    } else {

      api.vote({
        value: C.vote_values.up,
        votee_class_name: 'Newsitem',
        votee_id: item.newsitem_id,
        voter_id: currentUser.id,
      }).then((r) => {
        logg(r, 'upvoted')
        setUpFill('#cc3333')
        setCurrentUserVoteValue(C.vote_values.up)
        if (currentUserVoteValue === C.vote_values.down) {
          setDownFill('#cecece')
          setVotesScore(votesScore + 2)
        } else {
          setVotesScore(votesScore + 1)
        }
      })

      // api.vote({
      //   value: C.vote_values.up,
      //   votee_class_name: item.item_type, // eg Video
      //   votee_id: item.id,
      //   voter_id: currentUser.id,
      // })
    }
  }
  const voteDown = () => {
    if (!currentUser.email) {
      setLoginModalOpen("Please login or register to upvote or downvote.")
      return
    }

    if (currentUserVoteValue === C.vote_values.down) {
      logg('unvoting is not implemented!')
      toast('unvoting is not implemented!')
      api.unvote()
    } else {
      api.vote({
        value: C.vote_values.down,
        votee_class_name: 'Newsitem',
        votee_id: item.newsitem_id,
        voter_id: currentUser.id,
      }).then((r) => {
        logg(r, 'downvoted')
        setDownFill('#cc3333')
        setCurrentUserVoteValue(C.vote_values.down)
        if (currentUserVoteValue === C.vote_values.up) {
          setUpFill('#cecece')
          setVotesScore(votesScore - 2)
        } else {
          setVotesScore(votesScore - 1)
        }
      })
    }
  }

  return <FlexCol>
    <IconUp onClick={voteUp} width={20} height={20} fill={upFill} />
    <WCount>{ votesScore}</WCount>
    <IconDown onClick={voteDown} width={20} height={20} fill={downFill} />
  </FlexCol>
}
Votable.propTypes = {

};

export default Votable
