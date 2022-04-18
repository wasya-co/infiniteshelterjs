/*
 * $components / newsitems / index.jsx
 */
import React, { Fragment as F, useState } from "react"
import styled from 'styled-components'

import { Box, inflector, logg } from "$shared"

/* G */

export const GenericNewsitem = (props) => {
  // logg(props, 'GenericNewsitem')
  const { item } = props

  return <F>
    generic newsitem
    <div dangerouslySetInnerHTML={{ __html: item.description }} />
  </F>
}

/* N */
export { default as NewsitemGallery } from "./NewsitemGallery"
export { default as NewsitemPhoto } from "./NewsitemPhoto"
export { default as NewsitemReport } from "./NewsitemReport"
export { default as Newsitems } from "./Newsitems"
export { default as NewsitemContainer } from "./NewsitemContainer"



/* I */
export const ICONS = {
  1: "/assets/newsfeed/sunglass.png",
  2: "/assets/newsfeed/gem_premium.png"
}

export { default as ItemIcon } from "./ItemIcon"

/* V */

