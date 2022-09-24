
import PropTypes from 'prop-types'
import React from "react"
import styled from 'styled-components'

import { NewsitemContainer } from './'
import { Metaline } from "$components/application"
import { logg } from "$shared"

import "./Newsitems.module.scss"

const ImageLarge = styled.img`
  max-width: 100%;
`;

const W0 = styled.div`
  display: flex;
  justify-content: center;
`;

/**
 * default
 */
const NewsitemPhoto = (props) => {
  // logg(props, 'NewsitemPhoto')
  const { item, variant } = props

  return <NewsitemContainer className='Newsitem NewsitemPhoto' {...{ item, variant }} >
    <W0>
      { item.photos[0] && <ImageLarge src={item.photos[0].large_url} /> }
    </W0>
  </NewsitemContainer>
}

NewsitemPhoto.propTypes = {
  item: PropTypes.shape({
    photos: PropTypes.array.isRequired, // @TODO: this is wrong, just show one photo
  }),
  variant: PropTypes.string,
}
export default NewsitemPhoto
