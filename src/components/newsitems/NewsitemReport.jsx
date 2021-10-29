
import PropTypes from 'prop-types'
import React, { Fragment as F, useEffect, useContext, useState } from "react"

import { useHistory } from "react-router-dom"
import styled from 'styled-components'

import { ItemIcon, NewsitemContainer } from "./"
import { Metaline, } from "$components/application"
import { Api, C, logg, request, TwofoldContext } from "$shared"

import "./newsitems.scss"


const NewsitemReport = (props) => {
  // logg(props, "NewsitemReport");
  const { item, variant, } = props
  return (<NewsitemContainer item={item} variant={variant} />)
}

NewsitemReport.propTypes = {
  item: PropTypes.object.isRequired,
  variant: PropTypes.string,
}
export default NewsitemReport

