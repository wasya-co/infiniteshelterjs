
import PropTypes from 'prop-types'
import React, { useContext, } from "react"
import { toast } from 'react-toastify'
import styled from 'styled-components'

import { GenericNewsitem } from "./"
import NewsitemGallery from "$components/newsitems/NewsitemGallery"
import NewsitemReport from "$components/newsitems/NewsitemReport"
import NewsitemPhoto from "$components/newsitems/NewsitemPhoto"
import NewsitemVideo from "$components/newsitems/NewsitemVideo"
import {
  Btn,
  C,
  logg,
  TwofoldContext,
  useApi,
} from "$shared"

import "./newsitems.scss"

const ICONS = {
  1: "/assets/newsfeed/sunglass.png",
  2: "/assets/newsfeed/gem_premium.png"
}

const W0 = styled.div`
`;

const W1 = styled.div`
  position: relative;
`;

const _EditModeActions = styled.div`
  position: absolute;
  right: 1em;
  top: 1em;
  z-index: 2;
`;
const EditModeActions = ({ children, ...props }) => {
  logg(props, 'EditModeActions')
  const { item } = props

  const {
    editorMode,
  } = useContext(TwofoldContext)

  const api = useApi()

  if (!editorMode) { return null }

  const removeStory = (e) => {
    if (!confirm('Are you sure?')) { return }
    api.deleteNewsitem({ id: item.newsitem_id }).then((resp) => {
      toast('Removed the story')
    }).catch((err) => {
      logg('320 - cannot delete newsitem')
    })
  }

  return <_EditModeActions>

    <Btn onClick={removeStory} >
      Remove Story
    </Btn>

  </_EditModeActions>
}

/**
 * Newsitems
**/
const Newsitems = (props) => {
  // logg(props, 'Newsitems')
  const { newsitems=[], variant } = props

  if (!newsitems.length) { return <div>No Newsitems</div> }

  return (
    <W0 className="Newsitems" {...{ variant }} >
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
          <W1 key={idx} className={`premium-${premium_tier}`} >
            <EditModeActions item={newsitem} />
            { item }
          </W1>
        )
      }) }
    </W0>
  )
}

Newsitems.propTypes = {
  newsitems: PropTypes.array.isRequired,
  variant: PropTypes.string,
}
export default Newsitems
