
import PropTypes from 'prop-types'
import React from "react"
import styled from 'styled-components'

import { logg } from "$shared"
import { Metaline } from "$components/application"
import { NewsitemContainer } from "./"

import "./Newsitems.module.scss"

/**
 * NewsitemVideo
 *
**/
const NewsitemVideo = (props) => {
  logg(props, 'NewsitemVideo')
  const { item, variant } = props

  return <NewsitemContainer item={item} variant={variant} >
    <div style={{ display: 'flex', justifyContent: 'center' }} >
      { item.youtube_id ?
          <iframe className="iframe" width="100%" height="315" src={`https://www.youtube.com/embed/${item.youtube_id}`} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          : <video style={{ maxWidth: '100%', maxHeight: '50vh' }}  preload="metadata" height="auto" controls><source src={item.url} type="video/mp4" /></video>
      }
    </div>
  </NewsitemContainer>
}

NewsitemVideo.propTypes = {
  item: PropTypes.object.isRequired,
  variant: PropTypes.string,
}
export default NewsitemVideo