
import PropTypes from 'prop-types'
import React from "react"
import styled from 'styled-components'

import { GenericNewsitem } from "./"
import NewsitemGallery from "$components/newsitems/NewsitemGallery"
import NewsitemReport from "$components/newsitems/NewsitemReport"
import NewsitemPhoto from "$components/newsitems/NewsitemPhoto"
import NewsitemVideo from "$components/newsitems/NewsitemVideo"
import { Api, C, logg } from "$shared"

import "./newsitems.scss"

const ICONS = {
  1: "/assets/newsfeed/sunglass.png",
  2: "/assets/newsfeed/gem_premium.png"
}

const W = styled.div`
  // border: 2px solid yellow;
  // margin: 0 0 0 ${p => p.variant === C.variants.bordered ? '.5em' : 0};
`;

const Newsitems = (props) => {
  logg(props, 'Newsitems')
  const { newsitems, variant } = props

  if (!newsitems || !newsitems.length) { return <div>No Newsitems</div> }

  return (
    <W className="Newsitems" {...{ variant }} >
      { newsitems.map((newsitem, idx) => {
        const premium_tier = newsitem.premium_tier || 0
        const icon = ICONS[premium_tier]
        let item

        switch (newsitem.item_type) {
          case C.item_types.gallery:
            item = <NewsitemGallery item={newsitem} variant={variant} />
            break
          case C.item_types.report:
            item = <NewsitemReport  item={newsitem} variant={variant} />
            break
          case C.item_types.video:
            item = <NewsitemVideo   item={newsitem} variant={variant} />
            break
            case C.item_types.photo:
              item = <NewsitemPhoto   item={newsitem} variant={variant} />
              break
          default:
            item = <GenericNewsitem item={newsitem} />
        }

        return (
          <div key={idx} className={`premium-${premium_tier}`}>
            { item }
          </div>
        )
      }) }
    </W>
  )
}

Newsitems.propTypes = {
  newsitems: PropTypes.array.isRequired,
  variant: PropTypes.string,
}
export default Newsitems
