
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import {
  logg,
  useApi,
} from '$shared'
import { LocationsShow } from './'

/**
 * LocationsShowAsync
 *
 * useEffect with react-router, delegate to LocationsShow
 *
**/
const LocationsShowAsync = (props) => {
  logg(props, 'LocationsShowAsync')
  const { match } = props

  const [ location, setLocation ] = useState()
  const api = useApi()
  logg(api, 'zeApi')


  useEffect(() => {
    logg('calling?')

    api.getLocation({ slug: match.params.slug }).then((r) => {
      setLocation(r)
    }).catch(err => {
      logg(err, "Could not load Location.")
      toast("Could not load Location.")
    })
  }, []) // @TODO: pretty certain need to add `match` to args to useEffect. _vp_ 2022-09-10

  if (!location) { return  null }
  return <LocationsShow {...{ item: location, match }} />
}
LocationsShowAsync.propTypes = {
  match: PropTypes.object.isRequired,
}
export default LocationsShowAsync
