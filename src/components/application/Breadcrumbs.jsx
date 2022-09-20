
import PropTypes from 'prop-types'
import React, { Fragment as F, useContext, useState } from 'react'
import styled from 'styled-components'

import config from 'config'

import {
  SideMenu,
  DayNightToggle,
} from "$components/application"
import {
  AppContext,
  appPaths,
  C,
  logg,
} from "$shared"


// One breadcrumb
const B0 = styled.a`
  color: var(--ion-color);
  display: block;
`;

// The divider
const B1 = styled.div`
  padding: 0.5em;
  color: var(--ion-color);
`;

const W0 = styled.div`
  border: ${p=>p.debug?'1':'0'}px solid cyan;

  display: flex;
  align-items: center;
  justify-content: stretch;

  z-index: 0;
`;

const WBreadcrumbs = styled.div`
  display: block;
  flex-grow: 1;

  > * {
    display: inline;
  }
`;


/**
 * Breadcrumbs
 */
const Breadcrumbs = (props) => {
  // logg(props, 'Breakcrumbs')
  const { breadcrumbs=[] } = props

  const {
    useHistory,
  } = useContext(AppContext)
  const history = useHistory()

  const out = []
  breadcrumbs.map((b, idx) => {
    if (idx+1 === props.breadcrumbs.length) { // last one
      out.push(<B0 key={idx}
      >{b.name}</B0>)
    } else {
      const href = appPaths.location({ slug: b.slug })
      const goto = (e) => {
        e.preventDefault()
        history.push( href )
      }
      out.push(<B0 key={idx}
        href={href}
        onClick={goto}
      >{b.name}</B0>)
      out.push(<B1 key={`${idx}-divider`} >&gt;</B1>)
    }
  })

  return <W0 debug={config.debug} className="Breadcrumbs" >
    <SideMenu variant={C.variants.inline} />
    <WBreadcrumbs className='WBreadcrumbs' >{ out }</WBreadcrumbs>
    <DayNightToggle />
  </W0>
}
Breadcrumbs.propTypes = {
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }),
  ),
}
export default Breadcrumbs
