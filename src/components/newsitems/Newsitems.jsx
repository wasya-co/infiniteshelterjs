
import PropTypes from 'prop-types'
import React from "react"
import styled from 'styled-components'

import { GenericNewsitem } from "./"
import NewsitemGallery from "$components/newsitems/NewsitemGallery"
import NewsitemReport from "$components/newsitems/NewsitemReport"
import NewsitemVideo from "$components/newsitems/NewsitemVideo"
import { Api, C, logg } from "$shared"

import "./newsitems.scss"

const ICONS = {
  1: "/assets/newsfeed/sunglass.png",
  2: "/assets/newsfeed/gem_premium.png"
}

const W = styled.div`
  // border: 2px solid yellow;
  margin: ${p => p.variant === C.variants.bordered ? '.5em' : 0};
  margin-top: 0;
  margin-bottom: 0;
`;

const Newsitems = (props) => {
  // logg(props, 'Newsitems')
  const { newsitems, variant } = props

  if (!newsitems || !newsitems.length) { return <div>No Newsitems</div> }

  return (
    <W {...{ variant }} >
      { newsitems.map((newsitem, idx) => {
        const premium_tier = newsitem.premium_tier || 0
        const icon = ICONS[premium_tier]

        return (
          <div key={idx} className={`items premium-${premium_tier}`}>
            { newsitem.item_type === C.item_types.gallery && <NewsitemGallery item={newsitem} variant={variant} /> }
            { newsitem.item_type === C.item_types.report  && <NewsitemReport  item={newsitem} variant={variant} /> }
            { newsitem.item_type === C.item_types.video   && <NewsitemVideo   item={newsitem} variant={variant} /> }
            { !newsitem.item_type && <GenericNewsitem item={newsitem} /> }
          </div>
        )
      }) }
    </W>
  )
}

Newsitems.propTypes = {
  variant: PropTypes.string,
}
export default Newsitems
