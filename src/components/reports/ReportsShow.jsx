
import React, { useEffect, useState } from "react";
import styled from 'styled-components'

import config from "config"
import { useApi, Card as Box, logg, request } from "$shared"

const W = styled.div`
  padding: 2em 0;
`

/**
 * Default
 */
const ReportsShow = (props) => {
  logg(props, "ReportsShow")

  let [ item, setItem ] = useState({})
  let api = useApi()

  // @TODO: refactor
  const currentUser = JSON.parse(localStorage.getItem("current_user")) || {};

  // @TODO: not logged in and has access
  const getReport = async () => {
    api.getReport(props.match.params.slug).then((data) => {
      setItem(data)
    })
  }

  useEffect(() => {
    getReport()
  }, [])

  // @TODO: logged in and no access

  // @TODO: logged in and access

  return (<W>
    {/* <Box boxShadow={2}> */}
      <h1>Report {item.name}</h1>
      <div className="description" dangerouslySetInnerHTML={{ __html: item.description }} />
    {/* </Box> */}
  </W>)
}

// @TODO: wrap in login HOC
export default ReportsShow
