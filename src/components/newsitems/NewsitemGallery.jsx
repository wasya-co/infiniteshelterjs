
import PropTypes from 'prop-types'
import React from "react"
import { toast } from 'react-toastify'
import styled from 'styled-components'

import { Metaline } from "$components/application"
import { logg } from "$shared"
import { NewsitemContainer } from './'

import "./Newsitems.module.scss"

const Images = styled.div`
  position: relative;
`;

const ImageLarge = styled.img`
  width: 200px;
`;

const ImageThumb1 = styled.img`
  position: absolute;
  left: 200px;
  top: 0;
`;

const ImageThumb2 = styled.img`
  position: absolute;
  left: 200px;
  top: 100px;
`;

/**
 * NewsitemGallery
 */
const NewsitemGallery = (props) => {
  // logg(props, 'NewsitemGallery')
  const { item, variant } = props

  const navigateToItem = () => {
    toast('this click is not implemented!')
    logg('not implemented')
  }

  return <NewsitemContainer item={item} variant={variant} >
    <Images onClick={navigateToItem} >
      { item.photos[0] && <ImageLarge src={item.photos[0].thumb_url} /> }
      { item.photos[1] && <ImageThumb1 src={item.photos[1].thumb_url} /> }
      { item.photos[2] && <ImageThumb2 src={item.photos[2].thumb_url} /> }
    </Images>
  </NewsitemContainer>
}
NewsitemGallery.propTypes = {
  item: PropTypes.shape({
    photos: PropTypes.array.isRequired,
  }),
  variant: PropTypes.string,
}
export default NewsitemGallery
