import React from "react"
import { withRouter } from "react-router-dom"
import "./Application.module.scss"
import styled from 'styled-components'

import { Api, logg, request, pp_date } from "$shared"

const W = styled.div`
  margin: .5em 0;
  color: ${p=>p.theme.colors.text};
`

const Metaline = (props) => {
  // logg(props, 'Metaline')

  const { created_at, username, city, tags = [] } = props;

  function navigateToCity(){
    props.history.push(`/en/cities/travel-to/${city.slug}/show/newsfeed`);
  }

  return (
    <W>
      { created_at && <span className="date">On {pp_date(created_at)}&nbsp;</span>}
      { username && <>by <span className="user" style={{ textDecoration: 'underline' }} >{username}</span>&nbsp;</> }
      {/* { city     && <>in <span className="city" onClick={navigateToCity}> {city.name} </span>&nbsp;</> } */}
      {/* { tags     && tags.map((tag, i) => <span key={i} className="tags">{tag.name}</span>) } */}
    </W>
  );

}

export default withRouter(Metaline);