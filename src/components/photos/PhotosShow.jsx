
import React from 'react'

import {
  logg,
} from "$shared"

/**
 * PhotosShow
**/
const PhotosShow = (props) => {
  logg(props, 'PhotosShow')
  const { item } = props

  return <>
    <img src={item.original_url} alt='' />
    { item.subhead }
  </>
}
export default PhotosShow