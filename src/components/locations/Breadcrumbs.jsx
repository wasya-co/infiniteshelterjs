
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonToggle, IonList, IonItem,
  IonLabel, IonItemDivider,
} from '@ionic/react'
import PropTypes from 'prop-types'
import React, { Fragment as F, useContext } from 'react'
import { Route, useLocation, useHistory, Switch } from 'react-router-dom'
import styled from 'styled-components'

import config from 'config'
import { C, logg, request, S, TwofoldContext } from "$shared"
import { MenuLeft } from "$components/application"

/* B */

// One breadcrumb
const B = styled.div`
  padding: 0.5em;
`;

// The divider
const B1 = styled.div`
  padding: 0.5em 0;
`;

/* D */
const L = styled.div`
  margin-top: .5em;
`;
const WDayNight = styled.div`
  // border: 1px solid green;

  display: flex;

  margin: 0 1em;
`;
const DayNightToggle = (props) => {
  return <WDayNight>
    <L>Day</L>
    <IonToggle value="DayNight" />
    <L>Night</L>
  </WDayNight>
}



/* W */

const W = styled.div`
  border: ${p=>p.debug?'1':'0'}px solid cyan;

  display: flex;
  align-items: center;
  z-index: 1;

  height: ${p => p.theme.breadcrumbsHeight};
`;

const WBreadcrumbs = styled.div`
  flex-grow: 1;
`;


/**
 * Default
 */
const Breadcrumbs = (props) => {
  // logg(props, 'Breakcrumbs')

  const { layout } = useContext(TwofoldContext)
  const history = useHistory()

  const out = []
  props.breadcrumbs.map((b, idx) => {
    if (idx+1 === props.breadcrumbs.length) {
      // last one
      out.push(<B key={idx} >{b.name}</B>)
    } else {
      out.push(<B
        key={idx}
        style={{ textDecoration: 'underline' }}
        onClick={() => history.push(`/en/locations/show/${b.slug}`) }
      >{b.name}</B>)
      out.push(<B1 key={`${idx}-divider`} >&gt;</B1>)
    }
  })

  return <W debug={config.debug} className="Breadcrumbs" >
    { layout === C.layout_mapui && <MenuLeft variant={C.variants.inline} /> }
    <WBreadcrumbs>{ out }</WBreadcrumbs>
    <DayNightToggle />
  </W>
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
