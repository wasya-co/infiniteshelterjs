
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import {
  C,
  inflector,
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
  const [ showItem, setShowItem ] = useState()
  const api = useApi()

  useEffect(() => {
    logg([ match.params.item_type, match.params.item_slug, match.params.slug ], 'not effecting?')

    const chain = [ api.getLocation({ slug: match.params.slug }) ]
    if (match.params.item_type) {
      const itemType = inflector.classify(match.params.item_type)
      switch (itemType) {
        case C.item_types.gallery:
          chain.push( api.getGallery(match.params.item_slug) )
          break
        case C.item_types.report:
          chain.push( api.getReport(match.params.item_slug) )
          break
        default:
          logg(itemType, 'Cannot get this item type!')
          toast('Cannot get this item type!')
      }
    }
    Promise.all(chain).then(rs => {
      logg(rs, 'LocationsShowAsync.chainResults')
      setLocation(rs[0])
      // @TODO: test-drive this. Clicking from a location-gallery back to location, should un-set the showItem. _vp_ 2022-09-11
      rs[1] ? setShowItem(rs[1]) : setShowItem(null)
    }).catch(err => {
      // logg(err, "Could not load Location.")
      // toast("Could not load Location.")
    })
  }, [ match.params.item_type, match.params.item_slug, match.params.slug ])

  if (!location) { return  null }
  return <LocationsShow {...{ location, match, showItem }} />
}
LocationsShowAsync.propTypes = {
  match: PropTypes.object.isRequired,
}
export default LocationsShowAsync
