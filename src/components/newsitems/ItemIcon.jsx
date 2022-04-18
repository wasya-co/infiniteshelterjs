
import {
  Article as ReportIcon,
  Diamond,
} from '@mui/icons-material'
import * as Ic from '@material-ui/icons'
import PropTypes from 'prop-types'
import React from 'react'
import styled, { useTheme } from 'styled-components'

import { C, logg } from "$shared"

const W = styled.div`
  padding: 10px;
  margin-right: 10px;
  width: 100px;
  height: 100px;

  box-sizing: border-box;
`;

logg(Ic, 'ic')

/**
 * Displays the appropriate icon.
 *
 * @param [Boolean] props.isPurchased
 * @param [Number] props.premiumTier
 * @param [String] props.kind
 */
 export const ItemIcon = (props) => {
  // logg(props, "ItemIcon")
  const { is_purchased, item_type, premium_tier } = props

  const theme = useTheme()

  if (is_purchased) {
    return <img className="icon" src="/assets/icons/glasses.png" alt='' />
  }
  if (premium_tier > 0) {
    return <img className="icon" src="/assets/icons/gem.png" alt='' />
  }
  switch (item_type) {
    case C.item_types.gallery:
      return <W><img className="icon" src="/assets/icons/gallery.png" alt='' /></W>
    case C.item_types.report:
      return <W>
        {/* <img className="icon" src="/assets/icons/report.png" alt='' /> */}
        <ReportIcon style={{ color: theme.colors.text }} />
        <Diamond />
      </W>
    case C.item_types.video:
      return <W><img className="icon" src="/assets/newsfeed/video_icon.svg" alt='' /></W>
    default:
      return <W>[unknown kind]</W>
  }
}
ItemIcon.propTypes = {
  is_purchased: PropTypes.bool, // .isRequired,
  item_type: PropTypes.string.isRequired,
  premium_tier: PropTypes.number,
}
export default ItemIcon
