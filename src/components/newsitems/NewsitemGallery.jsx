
import PropTypes from 'prop-types'
import React from "react"
import { toast } from 'react-toastify'
import styled from 'styled-components'

import { Metaline } from "$components/application"
import { logg } from "$shared"
import { NewsitemContainer } from './'

import "./Newsitems.module.scss"

const Images = styled.div`
  // border: 1px solid red;

  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 66.66%;
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
 */
const NewsitemGallery = (props) => {
  logg(props, 'NewsitemGallery')
  const { item, variant } = props

  const navigateToItem = () => {
    toast('this click is not implemented!')
    logg('not implemented')
  }

  return <NewsitemContainer item={item} variant={variant} >
    <Images onClick={navigateToItem} >
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
  variant: PropTypes.string,
}
export default NewsitemGallery
