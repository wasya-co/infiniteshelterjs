
import PropTypes from 'prop-types'
import React, { Fragment as F, useEffect, useContext, useState } from "react"
import { useHistory, } from "react-router-dom"
import styled from 'styled-components'

import {
  Metaline,
} from "$components/application"
import { TwofoldContext, } from "$components/TwofoldLayout"
import Votable from "$components/Votable"
import {
  C, Card,
  inflector,
  logg,
  WidgetContainer,
} from "$shared"
import {
  ItemIcon,
} from "./"

// alphabetized

const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

const _Row = styled.div`
  display: flex;
  align-items: flex-start;

  margin-top: ${p=>p.theme.smallWidth};
`;
const Row = ({ children, ...props }) => <_Row className='Row' {...props}>{children}</_Row>

const RowInline = styled.div`
  > * {
    display: inline;
  }
`;

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 0;
  color: ${p=>p.theme.colors.text};
`;

// @TODO: better management of navigateToItem
const W0 = (props) => {
  // logg(props, 'W0')
  const { children, navigateToItem, variant } = props

  switch (variant) {
    case C.variants.bordered:
      return <WidgetContainer {...props} cursor="pointer" >{ children }</WidgetContainer>
    default:
      return <Card boxShadow={2} {...props} onClick={navigateToItem} cursor="pointer" ></Card>
  }
}



/**
 * NewsitemContainer
 *
 * @TODO: should be config with variants: standard container, container for a single photo, etc.
 * but for now I'll use item.item_type
 * _vp_ 2022-03-13
 *
**/
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

  // @TODO: move this elsewhere - make generic, remember there are two routers, internal and external.
  // move this to internal router
  // @TODO: for Photo, navigateToItem can show full-screen pic. _vp_ 2022-04-17
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
      <Row >
        <Col style={{ alignItems: 'center' }} >
          <Votable item={item} />
        </Col>
        <Col style={{ overflowWrap: 'break-word' }} >
          <RowInline>
            <ItemIcon {...item} />
            <Title onClick={navigateToItem} >{item.name}</Title>
          </RowInline>
          <Metaline {...item} />
        </Col>
      </Row>
      { item.subhead && item.subhead.length && <p className="subhead" dangerouslySetInnerHTML={{ __html: item.subhead }} /> }
    </W0>

  }
}
NewsitemContainer.propTypes = {
  item: PropTypes.object.isRequired,
  variant: PropTypes.string,
}
export default NewsitemContainer
