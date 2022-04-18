
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
**/
const Voteable = (props) => {
  // logg(props, 'Voteable')
  const { item } = props

  return <FlexCol>
    <IconUp />
    <WCount>555</WCount>
    <IconDown />
  </FlexCol>
}
Voteable.propTypes = {

};

export default Voteable
