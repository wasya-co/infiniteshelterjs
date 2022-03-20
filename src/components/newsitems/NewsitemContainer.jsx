
import PropTypes from 'prop-types'
import React, { Fragment as F, useEffect, useContext, useState } from "react"

import { useHistory, } from "react-router-dom"
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
`;

const Row = styled.div`
  display: flex;
  align-items: flex-start;
`;

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 0;
  color: ${p=>p.theme.colors.text};
`;

const W0 = (props) => {
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
  const {
    className,
    item,
    variant,
  } = props
  const { item_type, slug } = item

  const history = useHistory()

  const {
    itemToUnlock, setItemToUnlock,
    layout,
    location,
    showItem, setShowItem,
  } = useContext(TwofoldContext)
  // logg(useContext(TwofoldContext), 'NewsitemContainerUsedContext')

  const navigateToItem = () => {
    if (item.is_premium && !item.is_purchased) {
      setItemToUnlock(item)
    } else {
      if (layout === C.layout_mapui) {
        history.push(`/en/locations/show/${location.slug}/${inflector.tableize(item_type)}/show/${slug}`)
      } else {
        history.push(`/en/${inflector.tableize(item_type)}/show/${slug}`)
      }
    }
  }

  /*
   * @TODO: should be config with variants: standard container, container for a single photo, etc.
   * but for now I'll use item.item_type
   * _vp_ 2022-03-13
   */

  if (item.item_type === C.item_types.photo) {
    return <W0 {...{ className, navigateToItem: () => {}, variant }} >
      <Col>
        <Title>{item.name}</Title>
        <Metaline {...item} />
      </Col>
      { children }
    </W0>

  } else {
    return <W0 {...{ className, navigateToItem, variant }} >
      { children }
      <Row>
        <ItemIcon {...item} />
        <Col style={{ overflowWrap: 'break-word', maxWidth: 'calc(100vw - 100px)' }} >
          <Title>{item.name}</Title>
          <Metaline {...item} />
        </Col>
      </Row>
      <p className="subhead" dangerouslySetInnerHTML={{ __html: item.subhead }} />
    </W0>
  }
}
NewsitemContainer.propTypes = {
  item: PropTypes.object.isRequired,
  variant: PropTypes.string,
}
export default NewsitemContainer
