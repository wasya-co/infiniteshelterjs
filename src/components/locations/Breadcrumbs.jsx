import React, { useContext } from 'react'
import { Route, useLocation, useHistory, Switch } from 'react-router-dom'
import styled from 'styled-components'

import config from 'config'
import { C, logg, request, S, TwofoldContext } from "$shared"
import { MenuLeft } from "$components/application"

// one breadcrumb
const B = styled.div`
  padding: 0.5em;
`;

// the divider
const B1 = styled.div`
  padding: 0.5em 0;
`;

const W = styled.div`
  border: ${p=>p.debug?'1':'0'}px solid cyan;

  display: flex;
  align-items: center;
  z-index: 1;

  height: ${p => p.theme.breadcrumbsHeight};
`;

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
    { out }
  </W>
}

export default Breadcrumbs
