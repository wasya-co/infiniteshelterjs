/*
 * $components / newsitems / index.jsx
 */
import React, { Fragment as F, useState } from "react"
import styled from 'styled-components'

import { Box } from "$shared"

export { default as NewsitemGallery } from "./NewsitemGallery"
export { default as NewsitemReport } from "./NewsitemReport"
export { default as Newsitems } from "./Newsitems"

const ICONS = {
  1: "/assets/newsfeed/sunglass.png",
  2: "/assets/newsfeed/gem_premium.png"
}

/*
export const W1 = styled(_Box)`
  margin-bottom: 1em;
  padding: 1em;
  background: white;
  cursor: pointer;

  display: flex;
  flex-direction: column;
`;
*/



const NewsitemContainer = ({ children, ...props }) => <Box boxShadow={2} {...props}>{children}</Box>

export {
  ICONS,
  NewsitemContainer,
}
