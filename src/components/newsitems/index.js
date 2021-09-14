/*
 * $components / newsitems / index.jsx
 */
import _Box from '@material-ui/core/Box'
import React, { Fragment as F, useState } from "react"
import styled from 'styled-components'

export { default as NewsitemGallery } from "./NewsitemGallery";
export { default as NewsitemReport } from "./NewsitemReport";
export { default as Newsitems } from "./Newsitems";

const ICONS = {
  1: "/assets/newsfeed/sunglass.png",
  2: "/assets/newsfeed/gem_premium.png"
}


export const W1 = styled(_Box)`
  margin-bottom: 1em;
  padding: 1em;
  background: white;
  cursor: pointer;

  display: flex;
  flex-direction: column;
`
const NewsitemContainer = ({ children, ...props }) => <W1 {...props}>{children}</W1>

export {
  ICONS,
  NewsitemContainer,
}
