
import PropTypes from 'prop-types'
import React, { Fragment as F, useEffect, useContext, useState } from "react"
import { useHistory, } from "react-router-dom"
import styled from 'styled-components'

import {
  Metaline,
} from "$components/application"
import {
  LocationContext,
} from "$components/locations"
import { TwofoldContext, } from "$components/TwofoldLayout"
import Votable from "$components/Votable"
import {
  C, Card,
  inflector,
  logg,
  WidgetContainer,
} from "$shared"
import {
  appPaths,
} from "$src/AppRouter"
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

const Title = styled.a`
  margin-top: 0;
  margin-bottom: 0;
  color: ${p=>p.theme.colors.text};
  cursor: pointer;
  font-size: 2em;
`;

// @TODO: better management of variant, for ParagonAustin and such _vp_ 2022-09-12
const W0 = (props) => {
  // logg(props, 'W0')
  const { children, variant } = props

  switch (variant) {
    case C.variants.bordered:
      return <WidgetContainer {...props} cursor="pointer" >{ children }</WidgetContainer>
    default:
      return <Card boxShadow={2} {...props} cursor="pointer" ></Card>
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

  const {
    location,
  } = useContext(LocationContext)

  const {
    itemToUnlock, setItemToUnlock,
    layout,
    showItem, setShowItem,
  } = useContext(TwofoldContext)
  // logg(useContext(TwofoldContext), 'NewsitemContainerUsedContext')

  const history = useHistory()


  // @TODO: move this elsewhere - make generic, remember there are two routers, internal and external. _vp_ 2022-09-12
  // move this to internal router?
  // @TODO: for Photo, navigateToItem can show full-screen pic. _vp_ 2022-04-17
  const href = appPaths.viewItem({ location, item })
  const navigateToItem = () => {
    if (item.is_premium && !item.is_purchased) {
      setItemToUnlock(item)
    } else {
      history.push( href )
    }
  }

  if (item.item_type === C.item_types.photo) {

    return <W0 {...{ className, variant }} >
      <Col>
        <Title>{item.name}</Title>
        <Metaline {...item} />
      </Col>
      { children }
    </W0>

  } else {

    return <W0 {...{ className, variant }} >
      { children }
      <Row >
        <Col style={{ alignItems: 'center' }} >
          <Votable item={item} />
        </Col>
        <Col style={{ overflowWrap: 'break-word' }} >
          <RowInline>
            <ItemIcon {...item} />
            <Title href={href} onClick={navigateToItem} >{item.name}</Title>
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
