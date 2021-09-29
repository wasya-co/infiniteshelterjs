
import PropTypes from 'prop-types'
import React from "react"
import { useHistory } from "react-router-dom"
import styled from 'styled-components'

import { Metaline } from "$components/application"
import { logg } from "$shared"
import { NewsitemContainer } from './'
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
 * TDD
 */
const NewsitemGallery = (props) => {
  // logg(props, 'NewsitemGallery')
  const { item } = props

  const history = useHistory()

  return <NewsitemContainer item={item} >
    <Images >
      { false && (item.photos || []).slice(0, 3).map((photo, i) =>
        <Image key={i}
          style={{ backgroundImage: `url(${photo.large_url})` }}>
          { i == 2 && <div className="number">+{item.photos.length - 3}</div> }
        </Image>
      ) }

      { item.photos[0] && <ImageLarge src={item.photos[0].thumb_url} /> }
      { item.photos[1] && <ImageThumb1 src={item.photos[1].thumb_url} /> }
      { item.photos[2] && <ImageThumb2 src={item.photos[2].thumb_url} /> }

      { false && item.photos.map((photo, idx) =>
        <Image2 key={idx} >
          <img src={`${photo.thumb_url}`} alt='' />
        </Image2>
      ) }
    </Images>
  </NewsitemContainer>
}

NewsitemGallery.propTypes = {
  item: PropTypes.shape({
    photos: PropTypes.array.isRequired,
  }),
}
export default NewsitemGallery
