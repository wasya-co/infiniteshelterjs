
import React, { useEffect, useState } from "react";
import styled from 'styled-components'

import config from "config"
import { useApi, Card as Box, logg, request } from "$shared"

const W0 = styled.div`
  padding: 2em 0;
`

/**
 * ReportsShow
 */
const ReportsShow = (props) => {
  // logg(props, "ReportsShow")

  let [ item, setItem ] = useState({})
  let api = useApi()

  useEffect(() => {
    api.getReport(props.match.params.slug).then((data) => {
      setItem(data)
    })
  }, [])

  // @TODO: logged in and no access

  // @TODO: logged in and access

  return (<W0>
    {/* <Box boxShadow={2}> */}
      <h1>Report {item.name}</h1>
      <div className="description" dangerouslySetInnerHTML={{ __html: item.description }} />
    {/* </Box> */}
  </W0>)
}

// @TODO: wrap in login HOC
export default ReportsShow
