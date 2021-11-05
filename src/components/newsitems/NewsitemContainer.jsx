
import PropTypes from 'prop-types'
import React, { Fragment as F, useEffect, useContext, useState } from "react"

import { useHistory } from "react-router-dom"
import styled from 'styled-components'

import { ItemIcon } from "./"
import { Metaline, } from "$components/application"
import {
  C, Card,
  inflector,
  logg,
  request,
  TwofoldContext,
  WidgetContainer,
} from "$shared"

// alphabetized

const Col = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 0.5em;
`;

const Row = styled.div`
  display: flex;
  align-items: flex-start;
`;

const Title = styled.h2`
  margin-top: 0;
`;

const W = (props) => {
  const { children, navigateToItem, variant } = props
  // @TODO: better management of navigateToItem

  switch (variant) {
    case C.variants.bordered:
      return <WidgetContainer {...props} onClick={navigateToItem} cursor="pointer" >{ children }</WidgetContainer>
    default:
      return <Card boxShadow={2} {...props} onClick={navigateToItem} cursor="pointer" ></Card>
  }
}

/**
 * NewsitemContainer
 */
const NewsitemContainer = ({ children, ...props }) => {
  // logg(props, 'NewsitemContainer')
  const { item, variant } = props
  const { item_type, slug } = item

  const history = useHistory()

  const {
    itemToUnlock, setItemToUnlock,
    layout,
    showItem, setShowItem,
  } = useContext(TwofoldContext)

  const navigateToItem = () => {
    logg('navigating')

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

  return <W {...{ navigateToItem, variant }} >
    { children }
    <Row>
      <ItemIcon {...item} />
      <Col>
        <Title>{item.name}</Title>
        <Metaline {...item} />
      </Col>
    </Row>
    <p className="subhead" dangerouslySetInnerHTML={{ __html: item.subhead }} />
  </W>
}

NewsitemContainer.propTypes = {
  item: PropTypes.object.isRequired,
  variant: PropTypes.string,
}
export default NewsitemContainer
