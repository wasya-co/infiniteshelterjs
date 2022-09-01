
// import {
//   Article as ReportIcon,
//   Diamond,
// } from '@mui/icons-material'
import * as Ic from '@material-ui/icons'
import PropTypes from 'prop-types'
import React from 'react'
import styled, { useTheme } from 'styled-components'

import { C, logg } from "$shared"

const ReportIcon = () => <div>@TODO: ReportIcon</div>
const DiamondIcon = () => <div>@TODO: DiamondIcon</div>

const IconVideo = ({ fill, w, h, ...props }) => {
  const theme = useTheme()

  fill = fill ? fill : theme.colors.text
  w = w ? w : 24
  h = h ? h : 24

  return <div className='IconVideo' style={{ padding: '0 10px' }} >
    <svg width={w} height={h} viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd"
        fill={fill} fill-opacity="0.54"
        d="M9.89989 0H29.6999C31.5149 0 32.9999 1.485 32.9999 3.3V23.1C32.9999 24.915 31.5149 26.4 29.6999 26.4H9.89989C8.08489 26.4 6.59989 24.915 6.59989 23.1V3.3C6.59989 1.485 8.08489 0 9.89989 0ZM0 6.6H3.3V29.7H26.4V33H3.3C1.485 33 0 31.515 0 29.7V6.6ZM29.7 23.1H9.89997V3.3H29.7V23.1ZM16.5001 20.625V5.775L26.4001 13.2L16.5001 20.625Z" />
    </svg>
  </div>
}

const _W0 = styled.div`
  // border: 1px solid red;

  padding: 10px 10px 0 10px;
  margin-right: 10px;

  box-sizing: border-box;
`;
const W0 = ({ children, ...props }) => <_W0 className='ItemIcon' {...props}>{children}</_W0>

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
      return <W0><img className="icon" src="/assets/icons/gallery.png" alt='' /></W0>
    case C.item_types.report:
      return <W0>
        {/* <img className="icon" src="/assets/icons/report.png" alt='' /> */}
        <ReportIcon style={{ color: theme.colors.text }} />
        <DiamondIcon />
      </W0>
    case C.item_types.video:
      return <IconVideo />
      // return <Wv1 ><img className="icon" src="/assets/newsfeed/icon_video.svg" alt='' /></W0>
    default:
      return <W0>[unknown kind]</W0>
  }
}
ItemIcon.propTypes = {
  is_purchased: PropTypes.bool, // .isRequired,
  item_type: PropTypes.string.isRequired,
  premium_tier: PropTypes.number,
}
export default ItemIcon
