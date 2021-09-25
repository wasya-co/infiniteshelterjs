
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
  const { item } = props
  return (<NewsitemContainer item={item} />)
}

NewsitemReport.propTypes = {
  item: PropTypes.object.isRequired,
}
export default NewsitemReport

