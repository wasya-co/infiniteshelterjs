
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
import img from '$components/application/45x45_day-night-2.png'
import './day_night_toggle.scss'

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

/* D */
const L = styled.div`
  color: ${p=> p.theme.colors.text};
  margin-top: .5em;
`;
const WDayNight = styled.div`
  // border: 1px solid green;
  display: flex;
  margin: 0 1em;
`;
const DayNightToggle = (props) => {
  const { theme, toggleTheme } = props
  return <WDayNight>
    <L>Day</L>
    <IonToggle checked={theme === C.themes.dark} onIonChange={toggleTheme} value="DayNight" />
    <L>Night</L>
  </WDayNight>
}
const T0 = styled.div`
  width: 40px;
  height: 40px;
  // background-image: url(${img});
`;
const DayNightToggle2 = (props) => {
  // logg(props, 'DayNightToggle2')
  const { theme, toggleTheme } = props

  return <WDayNight onClick={toggleTheme} >
    <T0 className={`theme-${theme}`} />
    {/* <IonToggle checked={theme === C.themes.dark} onIonChange={toggleTheme} value="DayNight" /> */}
  </WDayNight>
}

/* W */
const W0 = styled.div`
  background: ${p => p.theme.colors.cardBackground};
  border: ${p=>p.debug?'1':'0'}px solid cyan;

  display: flex;
  align-items: center;
  justify-content: stretch;

  z-index: 1;

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
 * @TODO: move to src/application
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
    { layout === C.layout_mapui && <MenuLeft variant={C.variants.inline} /> }
    <WBreadcrumbs className='WBreadcrumbs' >{ out }</WBreadcrumbs>
    <DayNightToggle2 toggleTheme={toggleTheme} theme={theme} />
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
