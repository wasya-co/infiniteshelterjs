
import PropTypes from 'prop-types'
import React from "react"
import styled from 'styled-components'

import { NewsitemContainer } from './'
import { Metaline } from "$components/application"
import { logg } from "$shared"

import "./newsitems.scss"


const Image = styled.div`
  position: relative;
  padding-top: 100%;
  overflow: hidden;
  z-index: 10;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  width: 100px;
  height: 100px;
`;

const Image2 = styled.div`
`;

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
 * default
 */
const NewsitemPhoto = (props) => {
  // logg(props, 'NewsitemPhoto')
  const { item, variant } = props

  return <NewsitemContainer className='NewsitemPhoto' item={item} variant={variant} >
    <Images >
      { item.photos[0] && <ImageLarge src={item.photos[0].thumb_url} /> }
      { item.photos[1] && <ImageThumb1 src={item.photos[1].thumb_url} /> }
      { item.photos[2] && <ImageThumb2 src={item.photos[2].thumb_url} /> }
    </Images>
  </NewsitemContainer>
}

NewsitemPhoto.propTypes = {
  item: PropTypes.shape({
    photos: PropTypes.array.isRequired, // @TODO: this is wrong, just show one photo
  }),
  variant: PropTypes.string,
}
export default NewsitemPhoto
