/*
 *  $shared / index
**/
// alphabetized
import { arrowBack } from 'ionicons/icons'
import { IonIcon } from '@ionic/react'
import { CircularProgress as _CircularProgress } from '@material-ui/core'
import _Box from '@material-ui/core/Box'
import { ChevronLeft as _ChevronLeft, ChevronRight as _ChevronRight, Menu as _MenuIcon, } from '@material-ui/icons'
import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'

import C from "./C"
import { TwofoldContext, TwofoldContextProvider } from '$components/TwofoldLayout'

/* A */
export { default as useApi } from "./Api"
export {
  default as AppProvider,
  AppContext,
} from './AppProvider'
export { appPaths } from '$src/AppRouter'

/* B */

/**
 * Back Button
 */
const BackIcon = styled(IonIcon)`
  margin-right: 5px;
  cursor: pointer;
`;
export const BackBtn = () => {
  const { useHistory } = useContext(AppContext)
  const history = useHistory()
  const {
    showItem, setShowItem,
  } = useContext(TwofoldContext)
  // logg(useContext(TwofoldContext), 'BackBtn usedContext')

  const onClick = () => {
    setShowItem(null)
    history.goBack()
  }

  return <BackIcon className="BackBtn"
    icon={arrowBack}
    onClick={onClick}
  ></BackIcon>
}

/**
 * Just your regular shadowed box. Pointer cursor. TDD
 */
export const Btn = styled.div`
  border: 1px solid gray;
  border-radius: 5px;

  padding: .3em 1em;
  cursor: pointer;
`;


/* C */

export { C }
export const ChevronLeft = styled(_ChevronLeft)`
  color: ${(p) => p.theme.colors.text}
`;
export const ChevronRight = styled(_ChevronRight)`
  color: ${(p) => p.theme.colors.text}
`;

/**
 * A Card
 * @deprecated, use WBordered instead. _vp_ 2022-09-19
 */
const _Card = styled(_Box)`
  margin-bottom: 1em;
  padding: ${p => p.theme.smallWidth};
  background: var(--ion-card-background-color);
  cursor: ${p => p.cursor ? p.cursor : 'auto'};

  display: flex;
  flex-direction: column;
`;
export const Card = ({ children, ..._props }) => {
  // logg(_props, 'Card')
  const { navigateToItem, ...props } = _props

  return <_Card className="Card" {...props}>{ children }</_Card>
}


/* D */

/* F */

export const FlexRow = styled.div`
  display: flex;

  > * {
    margin: auto .4em;
  }
`;

/* I */

/**
 * Like the rails inflector, has methods:
 * tableize()
 */
export const inflector = {
  classify: (m) => {
    if (m.slice(-3)==='ies') {
      m = m.slice(0, -3) + 'y'
    }
    if (m.slice(-1)==='s') {
      m = m.slice(0, -1)
    }
    const ms = m.split('_')
    for (var i = 0; i < ms.length; i++) {
      ms[i] = ms[i].charAt(0).toUpperCase() + ms[i].slice(1)
    }
    return ms.join("")
  },
  tableize: (m) => {
    switch(m) {
      case 'Gallery':
        return 'galleries'
      default:
        // Report, what else?
        return `${m.toLowerCase()}s`
    }
  },
}

/* L */


// From: https://codepen.io/charlyarg/pen/GByKja
const _Circle = styled.div`
  position: fixed;
  z-index: 999;
  overflow: show;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 50px;
  height: 50px;
`;
export const Loading = (p) => <_Circle><_CircularProgress /></_Circle>

/**
 * Usage: logg(someObject, 'label')
 *
 * This development-grade logger can be used instead of console.log() with some advantages:
 * * It encourages consistent labeling of logs. By labeling each log line, you can have dozens of log lines
 * written per action, and still know which log line comes from where.
 * The recommended label is the component name, or function name.
 * * If the label is present, the logged object is placed in the window, allowing you to inspect it in the console. The
 * label becomes the name of the object (stripped to [0-9a-zA-Z\-_] chars). If you're logging a function, you can execute it.
 * If you log more than one thing, they can interact, allowing you to validate control flow.
 * * the logger can be turned off by making this function simply return.
 */
const logg = (a, b="", c=null) => {
  if ('undefined' === typeof window) { return }

  c = "string" === typeof c ? c : b.replace(/\W/g, "");
  if (c.length > 0) {
    window[c] = a;
  }
  console.log(`+++ ${b}:`, a); // eslint-disable-line no-console
};
// loggs a non-empty vector
const logg_v = (a, b="", c=null) => {
  // threejs
  if ('undefined' !== typeof a) {
    if ('undefined' !== typeof a.z) { // it's a vector
      if (a.x+a.y+a.z !== 0) {
        console.log(`+++ ${b}:`, a); // eslint-disable-line no-console
      }
      return
    }
  }
  logg(a, b, c)
}
// optimized for Android (e.g. it inspects and doesn't use window)
const logg_android = (a, b="", c=null) => {
  console.log(`+++ ${b}:`, a.inspect); // eslint-disable-line no-console
};
const logga = logg_android
export {
  logg,
  logg_android,
  logg_v,
  logga,
};

/* M */
export const MenuIcon = styled(_MenuIcon)`
  color: ${(p) => p.theme.colors.text}
`;

/* N */

/* P */
export const PurchasedIcon = () => {
  return <div className="PurchasedIcon">[purchased]</div>
}

/**
 * pretty print date
 */
export const pp_date = (d) => (d || "" ).substring(0, 10)

/* R */

export { default as request } from "./request"

export const Root = styled.div`
  background: ${p => p.theme.colors.background};
  height: 100vh;
  overflow: auto;
`;


/* S */
export { default as S } from "./S"
export { default as SsrProvider, SsrContext } from './SsrProvider'

/* T */
export { default as ThemeProvider, ThemeContext } from './ThemeProvider'

/* U */
export { default as useWindowSize } from './useWindowSize'

/* W */

/**
 * Wrapper Bordered
 *
 * Used in collapsibles and MarkersList
 * prefer this to Card.
 */
const _WBordered = styled.div`
  border: 2px solid var(--ion-border-color);
  border-radius: var(--ion-border-radius);
  background: var(--ion-card-background-color);
  color: var(--ion-color);

  margin-bottom: 1em;
  padding: .5em;

  cursor: ${p => p.onClick ? 'pointer' : null};
`;
export const WBordered = ({ children, ..._props }) => {
  const { className='', ...props } = _props
  return <_WBordered className={`${className} WBordered`} {...props} >{children}</_WBordered>
}


/* Z */
// @TODO: move this into its own Zoom components, or into MapPanel
export const ZoomContext = React.createContext({})



