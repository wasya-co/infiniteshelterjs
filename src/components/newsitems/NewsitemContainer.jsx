
import PropTypes from 'prop-types'
import React, { Fragment as F, useEffect, useContext, useState } from "react"

import { useHistory } from "react-router-dom"
import styled from 'styled-components'

import { ItemIcon } from "./"
import { Metaline, } from "$components/application"
import { Api, Box, C, inflector, logg, request, TwofoldContext } from "$shared"


const Col = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 0.5em;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  // padding: 0 1em;
`;

const Title = styled.h2`
  margin-top: 0;
`;

/**
 * TDD
 */
const NewsitemContainer = ({ children, ...props }) => {
  // logg(props, 'NewsitemContainer')
  const { item } = props
  const { item_type, slug } = item

  const history = useHistory()

  const {
    itemToUnlock, setItemToUnlock,
    layout,
    showItem, setShowItem,
  } = useContext(TwofoldContext)

  const navigateToItem = () => {
    if (item.is_premium && !item.is_purchased) {
      setItemToUnlock(item)
    } else {
      if (layout === C.layout_mapui) {
        setShowItem(item)
      } else {
        history.push(`/en/${inflector.tableize(item_type)}/show/${slug}`)
      }
    }
  }

  return <Box boxShadow={2} {...props} onClick={navigateToItem} cursor="pointer" >
    { children }
    <Row>
      <ItemIcon {...item} />
      <Col>
        <Title>{item.name}</Title>
        <Metaline {...item} />
      </Col>
    </Row>
    <p className="subhead" dangerouslySetInnerHTML={{ __html: item.subhead }} />
  </Box>
}

NewsitemContainer.propTypes = {
  item: PropTypes.object.isRequired,
}
export default NewsitemContainer
