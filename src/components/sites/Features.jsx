
import React, { Fragment as F, useEffect, useRef, useState } from "react"
import styled from 'styled-components'
import { Grid } from '@material-ui/core'

import { C, logg, useApi, } from "$shared"

const Features = ({ features, ...props }) => {
  logg(props, 'Features')

  const out = []
  features.map((f) => {
    if (f.inner_html) {
      out.push(<Grid item sm={3} dangerouslySetInnerHTML={{ __html: f.inner_html }} />)
    }
  })
  return <Grid style={{ marginBottom: '1em' }} container spacing={2}>
    { out }
  </Grid>
}

export default Features