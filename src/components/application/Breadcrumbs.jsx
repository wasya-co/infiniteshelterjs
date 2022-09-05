
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonToggle, IonList, IonItem,
  IonLabel, IonItemDivider,
} from '@ionic/react'
import PropTypes from 'prop-types'
import React, { Fragment as F, useContext, useState } from 'react'
import { Route, useLocation, useHistory, Switch } from 'react-router-dom'
import styled from 'styled-components'

import config from 'config'

import { SideMenu } from "$components/application"
import {
  C, logg, request, S, TwofoldContext,
} from "$shared"
import {
  DayNightToggle,
} from './'



/* B */

// One breadcrumb
const B0 = styled.div`
  color: ${p=> p.theme.colors.text};
  // padding-right: 0.5em;
`;

// The divider
const B1 = styled.div`
  padding: 0.5em;
  color: ${p => p.theme.colors.text};
`;

/* W */
const W0 = styled.div`
  // background: ${p => p.theme.colors.cardBackground};
  border: ${p=>p.debug?'1':'0'}px solid cyan;

  display: flex;
  align-items: center;
  justify-content: stretch;

  z-index: 0;

  // height: ${p => p.theme.breadcrumbsHeight};
`;

const WBreadcrumbs = styled.div`
  display: block;
  flex-grow: 1;
  // flex-direction: row;
  // flex-grow: 1;
  // flex-wrap: wrap;

  > * {
    // border: 1px solid red;
    display: inline;
  }
`;


/**
 * Breadcrumbs
 */
const Breadcrumbs = (props) => {
  // logg(props, 'Breakcrumbs')
  const { breadcrumbs=[] } = props
  const { layout, toggleTheme, theme } = useContext(TwofoldContext)
  const history = useHistory()

  const out = []
  breadcrumbs.map((b, idx) => {
    if (idx+1 === props.breadcrumbs.length) {
      // last one
      out.push(<B0 key={idx} >{b.name}</B0>)
    } else {
      out.push(<B0
        key={idx}
        style={{ textDecoration: 'underline', cursor: 'pointer' }}
        onClick={() => history.push(`/en/locations/show/${b.slug}`) }
      >{b.name}</B0>)
      out.push(<B1 key={`${idx}-divider`} >&gt;</B1>)
    }
  })

  return <W0 debug={config.debug} className="Breadcrumbs" >
    { layout === C.layout_mapui && <SideMenu variant={C.variants.inline} /> }
    <WBreadcrumbs className='WBreadcrumbs' >{ out }</WBreadcrumbs>
    <DayNightToggle toggleTheme={toggleTheme} theme={theme} />
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
