import React from "react"
import styled from 'styled-components'

import { Api, C, logg } from "$shared"
import NewsitemGallery from "$components/newsitems/NewsitemGallery"
import NewsitemReport from "$components/newsitems/NewsitemReport"
import NewsitemVideo from "$components/newsitems/NewsitemVideo"
import "./newsitems.scss"

const ICONS = {
  1: "/assets/newsfeed/sunglass.png",
  2: "/assets/newsfeed/gem_premium.png"
}

const Wrapper = styled.div`
  // border: 2px solid yellow;

  // margin-bottom: 2em;
`

const Newsitems = (props) => {
  logg(props, 'Newsitems')
  const { newsitems } = props

  if (!newsitems || !newsitems.length) { return <div>No Newsitems</div> }

  return (
    <Wrapper>
      { newsitems.map((newsitem, idx) => {
        const premium_tier = newsitem.premium_tier || 0
        const icon = ICONS[premium_tier]

        return (
          <div key={idx} className={`items premium-${premium_tier}`}>
            { newsitem.item_type === C.item_types.gallery && <NewsitemGallery item={newsitem} /> }
            { newsitem.item_type === C.item_types.report  && <NewsitemReport  item={newsitem} /> }
            { newsitem.item_type === C.item_types.video   && <NewsitemVideo   item={newsitem} /> }
          </div>
        )
      }) }
    </Wrapper>
  )
}

export default Newsitems
