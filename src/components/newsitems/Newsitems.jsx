
import PropTypes from 'prop-types'
import React, { useContext, } from "react"
import { toast } from 'react-toastify'
import styled from 'styled-components'

import config from 'config'

import {
  LocationContext,
} from "$components/locations"
import NewsitemGallery from "$components/newsitems/NewsitemGallery"
import NewsitemReport from "$components/newsitems/NewsitemReport"
import NewsitemPhoto from "$components/newsitems/NewsitemPhoto"
import NewsitemVideo from "$components/newsitems/NewsitemVideo"
import { TwofoldContext, } from "$components/TwofoldLayout"
import {
  Btn,
  C,
  logg,
  useApi,
} from "$shared"
import {
  appPaths,
} from "$src/AppRouter"
import { GenericNewsitem } from "./"

import "./Newsitems.module.scss"


const Pagination = styled.div`
  border: ${p => p.debug ? 1 : 0}px solid cyan;

  display: flex;
`;
const CurrentPageNum = styled.div`
  text-decoration: bold;
`;
const PageNum = styled.a`
  display: block;
`;


const W0 = styled.div`
`;

const W1 = styled.div`
  position: relative;
  ::before {
    content: '${p => p.debug && p._key}';
    position: absolute;
    top: 2px;
    left: 2px;
    color: var(--ion-debug-color);
  }
`;

const _EditModeActions = styled.div`
  position: absolute;
  right: 1em;
  top: 1em;
  z-index: 2;
`;
const EditModeActions = ({ children, ...props }) => {
  // logg(props, 'EditModeActions')
  const { item } = props

  const {
    editorMode,
  } = useContext(TwofoldContext)

  if (!editorMode) { return null }

  const api = useApi()

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
 *
 * @TODO: variant should come from the location, right? _vp_ 2022-09-11
**/
const Newsitems = (props) => {
  logg(props, 'Newsitems')
  const {
    newsitems=[],
    variant,
  } = props

  if (!newsitems.length) { return <div>No Newsitems</div> }

  const {
    newsitems_pagination,
    slug: destination_slug,
  } = useContext(LocationContext)

  const rendered = []
  newsitems.map((newsitem, idx) => {
    const premium_tier = newsitem.premium_tier || 0
    // const icon = ICONS[premium_tier]
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

    rendered.push(
      <W1 key={idx} _key={idx+1} className={`premium-${premium_tier}`} debug={config.debug} >
        <EditModeActions item={newsitem} />
        { item }
      </W1>
    )
  })

  return (
    <W0 className="Newsitems" {...{ variant }} >
      { rendered }

      <Pagination >
        Pages:
        { newsitems_pagination.previous &&
          <PageNum href={ appPaths.location({ slug: destination_slug, newsitems_page: newsitems_pagination.previous }) }
          >previous</PageNum>
        || null }
        <CurrentPageNum>{newsitems_pagination.current}</CurrentPageNum>
        { newsitems_pagination.next &&
          <PageNum href={ appPaths.location({ slug: destination_slug, newsitems_page: newsitems_pagination.next }) }
          >next</PageNum>
        || null }
      </Pagination>

    </W0>
  )
}
Newsitems.propTypes = {
  newsitems: PropTypes.array.isRequired,
  variant: PropTypes.string,
}
export default Newsitems
