import React from "react";
import { withRouter } from "react-router-dom";
import "./application.scss";
import styled from 'styled-components'

import { Api, logg, request } from "$shared"

const W = styled.div`
  margin-top: .5em;
`

const Metaline = (props) => {
  logg(props, 'Metaline')

  const { created_at, username, city, tags = [] } = props;

  function navigateToCity(){
    props.history.push(`/en/cities/travel-to/${city.slug}/show/newsfeed`);
  }

  return (
    <W>
      <span className="date"> On {(created_at || "").substring(0, 10)} </span>
      { username && <>by <span className="user"> {username} </span></> }
      { city     && <>in <span className="city" onClick={navigateToCity}> {city.name} </span></> }
      { tags     && tags.map((tag, i) => <span key={i} className="tags">{tag.name}</span>) }
    </W>
  );

}

export default withRouter(Metaline);