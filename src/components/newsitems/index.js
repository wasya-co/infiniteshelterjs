/*
 * $components / newsitems / index.jsx
 */
import React, { Fragment as F, useState } from "react"
import styled from 'styled-components'

import { Box, inflector } from "$shared"

export { default as NewsitemGallery } from "./NewsitemGallery"
export { default as NewsitemReport } from "./NewsitemReport"
export { default as Newsitems } from "./Newsitems"

const ICONS = {
  1: "/assets/newsfeed/sunglass.png",
  2: "/assets/newsfeed/gem_premium.png"
}

export { default as ItemIcon } from "./ItemIcon"

export { default as NewsitemContainer } from "./NewsitemContainer"

export {
  ICONS,
}
