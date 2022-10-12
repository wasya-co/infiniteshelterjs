
import PropTypes from 'prop-types'
import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useLocation } from 'react-router-dom'

import {
  C,
  inflector,
  logg,
  SsrContext,
  useApi,
} from '$shared'
import {
  LocationsRestricted,
  LocationsShow,
} from './'

/**
 * LocationsShowAsync
 *
 * uses react-router for search params
 *
 *
**/
const LocationsShowAsync = (props) => {
  // logg(props, 'LocationsShowAsync')
  const { match } = props

  // @TODO: this is elegantly LocationProvider _vp_ 2022-09-12
  const [ location, setLocation ] = useState()

  // @TODO: this is so ugly... _vp_ 2022-09-20
  function useQuery() {
    const { search } = useLocation()
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }
  const q = useQuery()
  match.params  = { ...match.params,
    newsitems_page: q.get('newsitems_page') || 1,
  }

  const [ showItem, setShowItem ] = useState()
  const api = useApi()

  useEffect(() => {
    const chain = [ api.getLocation( match.params ) ]
    if (match.params.item_type) {
      const itemType = inflector.classify(match.params.item_type)
      switch (itemType) {
        case C.item_types.gallery:
          chain.push( api.getGallery(match.params.item_slug) )
          break
        case C.item_types.photo:
          chain.push( api.getPhoto(match.params.item_slug) )
          break
        case C.item_types.report:
          chain.push( api.getReport(match.params.item_slug) )
          break
        default:
          logg(itemType, 'Cannot get this item type!')
          toast(`Cannot get this item type: ${itemType}`)
      }
    }
    Promise.all(chain).then(rs => {
      // logg(rs, 'LocationsShowAsync ChainResults')
      setLocation(rs[0])

      // @TODO: test-drive this. Clicking from a location-gallery back to location, should un-set the showItem. _vp_ 2022-09-11
      rs[1] ? setShowItem(rs[1]) : setShowItem(null)

    }).catch(err => {
      // logg(err, "Could not load Location.")
      // toast("Could not load Location.")
    })
  }, [
    match.params.item_type,
    match.params.item_slug,
    match.params.slug,
    match.params.newsitems_page ])

  if (!location) { return  null }
  if (location.is_premium && !location.is_purchased) { return <LocationsRestricted /> }
  return <LocationsShow {...{ location, match, showItem }} />
}
LocationsShowAsync.propTypes = {
  match: PropTypes.object.isRequired,
}
export default LocationsShowAsync
