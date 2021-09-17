import React from 'react'
import { Route, useLocation, useHistory, Switch } from 'react-router-dom'
import styled from 'styled-components'

import { logg, request, S } from "$shared"

// one breadcrumb
const B = styled.div`
  padding: 0.5em;
`
// the divider
const B1 = styled.div`
  padding: 0.5em 0;
`
const Root = styled.div`
  display: flex;
  z-index: 50;

  position: absolute;
  top: 0;
  left: 0;
  background: white;
`;
const Breadcrumbs = (props) => {
  logg(props, 'Breakcrumbs')

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
  return <Root>{out}</Root>
}

export default Breadcrumbs
