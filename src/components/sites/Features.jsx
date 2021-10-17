
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'
import React, { Fragment as F, useEffect, useRef, useState } from "react"
import styled from 'styled-components'

import { C, logg, useApi, } from "$shared"

const Label = styled.div``;

const Features = ({ features, label, ...props }) => {
  logg(props, 'Features')

  const out = []
  features.map((f) => {
    if (f.inner_html) {
      out.push(<Grid item sm={3} dangerouslySetInnerHTML={{ __html: f.inner_html }} />)
    }
  })

  return <F>
    {label && <Label>{label}</Label>}
    <Grid style={{ marginBottom: '1em' }} container spacing={2}>
      { out }
    </Grid>
  </F>
}

Features.propTypes = {
  features: PropTypes.arrayOf(PropTypes.shape({
    inner_html: PropTypes.string,
  }) ),
  label: PropTypes.string,
}
export default Features