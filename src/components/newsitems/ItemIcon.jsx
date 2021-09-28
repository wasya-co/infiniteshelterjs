
import PropTypes from 'prop-types'
import React from 'react'

import { C, logg } from "$shared"

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

  if (is_purchased) {
    return <img className="icon" src="/assets/icons/glasses.png" alt='' />
  }
  if (premium_tier > 0) {
    return <img className="icon" src="/assets/icons/gem.png" alt='' />
  }
  switch (item_type) {
    case C.item_types.gallery:
      return <img className="icon" src="/assets/icons/gallery.png" alt='' />
    case C.item_types.report:
      return <img className="icon" src="/assets/icons/report.png" alt='' />
    case C.item_types.video:
      return <img className="icon" src="/assets/newsfeed/video_icon.svg" alt='' />
    default:
      return "unknown kind"
  }
}

ItemIcon.propTypes = {
  is_purchased: PropTypes.bool, // .isRequired,
  item_type: PropTypes.string.isRequired,
  premium_tier: PropTypes.number,
}
export default ItemIcon
