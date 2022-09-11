
import React from "react"
import styled from 'styled-components'

import styles from "./Metaline.module.scss"

import {
  logg,
  pp_date,
} from "$shared"

const W0 = styled.div`
  margin: .5em 0;
  color: ${p=>p.theme.colors.text};
`

/**
 * Metaline
**/
const Metaline = (props) => {
  // logg(props, 'Metaline')
  const {
    created_at, city,
    tags = [],
    username,
  } = props

  return (
    <W0 className={styles.Metaline} >
      { created_at && <span className="date">On {pp_date(created_at)}&nbsp;</span>}
      { username && <>by <span className="user" style={{ textDecoration: 'underline' }} >{username}</span>&nbsp;</> }
      {/* { city     && <>in <span className="city" onClick={navigateToCity}> {city.name} </span>&nbsp;</> } */}
      {/* { tags     && tags.map((tag, i) => <span key={i} className="tags">{tag.name}</span>) } */}
    </W0>
  );

}

export default Metaline

