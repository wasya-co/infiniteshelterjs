import React from "react"
import styled from 'styled-components'

import { Api, logg } from "$shared"
import NewsitemGallery from "$components/newsitems/NewsitemGallery"
import NewsitemReport from "$components/newsitems/NewsitemReport"
import NewsitemVideo from "$components/newsitems/NewsitemVideo"
import "./newsitems.scss"

const ICONS = {
  1: "/assets/newsfeed/sunglass.png",
  2: "/assets/newsfeed/gem_premium.png"
}

const Wrapper = styled.div`
  border: 1px solid blue;
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
            { newsitem.item_type === "gallery" && <NewsitemGallery gallery={newsitem} icon={icon} /> }
            { newsitem.item_type === "report" && <NewsitemReport newsitem={newsitem} /> }
            { newsitem.item_type === "video" && <NewsitemVideo data={newsitem} icon={icon} /> }
          </div>
        )
      }) }
    </Wrapper>
  )
}

export default Newsitems
