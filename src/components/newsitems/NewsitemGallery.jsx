
import PropTypes from 'prop-types'
import React, { useContext } from "react"
import styled from 'styled-components'

import {
  LocationContext,
} from "$components/locations"
import {
  logg,
  NavigationContext,
} from "$shared"
import { appPaths } from "$src/AppRouter"
import { NewsitemContainer } from './'

import "./Newsitems.module.scss"

const Images = styled.a`
  // border: 1px solid red;

  display: block;

  position: relative;
  width: 100%;
  max-width: 600px;
  height: 0;
  padding-bottom: min( 400px, 66.66% );

  margin: auto;
`;

const Thumb0 = styled.div`
  border: solid ${p => p.theme.colors.text};
  border-width: 1px 1px 1px 1px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;

  width: 66.66%;
  height: 0;
  padding-bottom: 66.66%;

  background-image: url('${p => p.src}');
  background-size: contain;
`;

const Thumb1 = styled.div`
  // background: #660000;

  border: solid ${p => p.theme.colors.text};
  border-width: 1px 1px 0 0;

  position: absolute;
  left: 66.66%;
  top: 0;

  width: 33.33%;
  height: 0;
  padding-bottom: 33.33%;

  background-color: #dedede; // @TODO: put in theme
  background-image: url('${p => p.src}');
  background-size: contain;
`;

const _Thumb2 = styled.div`
  border: solid ${p => p.theme.colors.text};
  border-width: 1px 1px 1px 0;

  position: absolute;
  left: 66.66%;
  top: 50%;

  width: 33.33%;
  height: 0;
  padding-bottom: 33.33%;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  background-color: #c4c4c4; // @TODO: put in theme
  background-image: url('${p => p.src}');
  background-size: contain;
`;
const Thumb2 = ({ children, src, ...props }) => {
  return <_Thumb2
    style={{ background: src }}
  ><div style={{ marginTop: 'calc( 50% - 0.5em )' }} >{children}</div></_Thumb2>
}

/**
 * NewsitemGallery
 * _vp_ 2022-09-12
 *
 * @TODO: variant is used, but move it to LocationProvider, rather than props. _vp_ 2022-09-12
**/
const NewsitemGallery = (props) => {
  // logg(props, 'NewsitemGallery')
  const { item, variant } = props

  const {
    slug: location_slug,
  } = useContext(LocationContext)

  const {
    useHistory,
  } = useContext(NavigationContext)

  const history = useHistory()
  const href = appPaths.viewGallery({ location_slug, slug: item.slug })

  // @TODO: only if purchased or free! IMPORTANT _vp_ 2022-09-12
  const goto = (e) => {
    e.preventDefault()
    history.push(href)
  }

  return <NewsitemContainer item={item} variant={variant} >
    <Images className='Images'
      href={href}
      onClick={goto}
    >
      <Thumb0 src={item.photos[0] && item.photos[0].thumb_url} />
      <Thumb1 src={item.photos[1] && item.photos[1].thumb_url} />
      <Thumb2 src={item.photos[2] && item.photos[2].thumb_url} >({item.n_photos} photos)</Thumb2>
    </Images>
  </NewsitemContainer>
}
NewsitemGallery.propTypes = {
  item: PropTypes.shape({
    photos: PropTypes.array.isRequired,
  }),
}
export default NewsitemGallery
