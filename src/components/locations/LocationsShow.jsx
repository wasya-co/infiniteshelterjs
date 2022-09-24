
import PropTypes from 'prop-types'
import React, { Fragment as F, useContext, useEffect, useRef, useState } from "react"
import Modal from "react-modal"
import styled from 'styled-components'

import config from 'config'
import {
  AuthContext,
} from "ishlibjs"

import {
  Breadcrumbs,
  UnlockModal,
} from "$components/application"
import { ItemModal, } from "$components/ItemModal"
import { Newsitems } from "$components/newsitems"
import {
  MarkersList,
} from '$components/markers'
import {
  Collapsible,
  LongLine,
  TwofoldContext,
} from "$components/TwofoldLayout"
import {
  AppContext,
  C, Card, ChevronLeft, ChevronRight,
  Loading,
  logg,
  useWindowSize,
} from "$shared"
import {
  LocationProvider,
  LocationsShowMobile3d,
  WrappedMapPanel,
} from "./"

/**
 * MoveLeftRightIcon
**/
const _MoveLeftRightIcon = ({ fill='var(--ion-inactive-color)', ...props }) => {

  return <div {...props} >
    <svg width="17" height="17" viewBox="0 -0.5 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg"
    >
      <defs></defs>
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(1.000000, 0.000000)" fill={fill} >
        <path d="M5.958,8.951 L5.958,7.007 L3.979,7.007 L3.97900001,5.06677246 C3.97900001,4.57762889 0.265,7.332 0.265,7.332 C-0.095,7.696 -0.095,8.29 0.264,8.655 C0.264,8.655 3.97900001,11.4734899 3.97900001,10.9475709 L3.979,8.951 L5.958,8.951 Z"
        ></path><path d="M10.002,7 L10.002,8.973 L12.048,8.973 L12.048,11 C12.048,11.4553833 15.695,8.684 15.695,8.684 C16.055,8.336 16.055,7.771 15.695,7.423 C15.695,7.423 11.980774,4.64377734 11.980774,5.03546143 L12.048,7 L10.002,7 Z"></path><rect x="7" y="0" width="2" height="16"></rect></g></g>
    </svg>
 </div>
}
const MoveLeftRightIcon = () => {
  return <_MoveLeftRightIcon />
}

/**
 * Description
 *
 * @TODO: move Description into shared ?
**/
const _D = styled.div``;
const Description = ({ item={} }) => {
  if (!item.description) { return }
  return <_D className="Description" dangerouslySetInnerHTML={{ __html: item.description }} />
}


/**
 * Handle
**/
const _Handle = styled.div`
  border: ${p => p.debug ? 1 : 0 }px solid green;
  // background: rgba(64, 64, 64, 0.5);

  position: absolute;
  top: 0;
  bottom: 0;

  left: ${p => p.foldedLeft ? 0 :
    p.foldedRight ? 'auto' :
    `${p.twofoldPercent*100}%` };
  right: ${p => p.foldedRight ? 0 : 'auto' };

  display: flex;
  flex-direction: column;
  align-items: center;

  width: var(--handle-width);

  z-index: 2;
`;
const Handle = (props) => {
  const {} = props

  const {
    folded, setFolded,
    foldedLeft, foldedRight,
    twofoldPercent, setTwofoldPercent,
  } = useContext(TwofoldContext)
  // logg(useContext(TwofoldContext), 'Handle Used TwofoldContext')

  const [ w ] = useWindowSize()
  const [ offsetX, setOffsetX ] = useState()
  const [ dragging, setDragging ] = useState(false)

  const foldLeft = () => {
    if (folded === C.foldedRight) {
      setFolded(C.foldedCenter)
    } else {
      setFolded(C.foldedLeft)
    }
  }

  const foldRight = () => {
    if (folded === C.foldedLeft) {
      setFolded(C.foldedCenter)
    } else {
      setFolded(C.foldedRight)
    }
  }

  const onMouseDown = (e) => {
    setDragging(true)
    setOffsetX(e.pageX)
  }

  const onMouseMove = (e) => {
    if (!dragging) { return }
    if (e.clientX === 0) { return }
    const movedBy = e.clientX - offsetX
    if (movedBy === 0) { return }
    const movedByPercent = movedBy/w
    setTwofoldPercent(prev => prev + movedByPercent)
  }

  const onMouseUp = (e) => {
    setDragging(false)
    // document.removeEventListener('mousemove', onMouseMove)
    // document.removeEventListener('mousedown', onMouseDown)
  }

  // draggable="true"
  return <_Handle className="Handle"
    debug={config.debug}
    {...{ foldedLeft, foldedRight, twofoldPercent }}
    // onMouseMove={onMouseMove}
    // onMouseDown={onMouseDown}
    // onMouseLeave={onMouseUp}
    // onMouseUp={onMouseUp}
  >
    <ChevronLeft onClick={foldLeft} />
    <ChevronRight onClick={foldRight} />
    <MoveLeftRightIcon />
    { [C.foldedRight, C.foldedLeft].indexOf(folded) !== -1  && <LongLine orientation={C.vertical} /> }
  </_Handle>
}


// @TODO: belongs in TwofoldLayout _vp_ 2022-09-21
const IframeModal = (props) => {
  const { showUrl, setShowUrl } = useContext(TwofoldContext)

  return (<Modal ariaHideApp={false} isOpen={!!showUrl} >
    <span onClick={() => {  setShowUrl(false) }} >[x]</span>

    <iframe height="100%" style={{ width: "100%", height: "100%" }} scrolling={"yes"} src={props.src}
      frameBorder="no" allowtransparency="true" allowFullScreen={true} >
    </iframe>
  </Modal>)
}


/**
 * Left
**/
const _Left = styled.div`
  background: ${p => p.theme.colors.background};
  flex: ${p => p.foldedRight ? '99%' : `${p.twofoldPercent*100}%` };
  overflow: hidden;

  display: flex;
  flex-direction: column;

  margin-right: ${p => p.foldedRight ? '30px' : 0 };
  height: calc(100vh - ${p => p.theme.borderWidth}
    - ${p => p.bottomDrawerOpen ? p.theme.bottomDrawerOpenHeight : p.theme.bottomDrawerClosedHeight });
`;
const Left = ({ children, ...props }) => {
  const {
    bottomDrawerOpen,
    folded, foldedLeft, foldedRight,
    twofoldPercent,
  } = useContext(TwofoldContext)
  if (foldedLeft) { return null }
  return <_Left className='Left' {...{ bottomDrawerOpen, foldedRight, twofoldPercent }} >
    { children }
  </_Left>
}


/**
 * Right
**/
const _Right = styled.div`
  position: relative;

  padding: 0 0 0 var(--handle-width);
  display: ${p => p.foldedRight ? 'none' : 'flex'};
  // flex: ${p => p.foldedRight ? '2%' : `${(1-p.twofoldPercent)*100}%` };
  flex: ${p => `${(1-p.twofoldPercent)*100}%`};
  overflow-x: hidden;

  flex-direction: column;

  height: calc(100vh - ${p => `calc(2*${p.theme.borderWidth})`}
    - ${p => p.bottomDrawerOpen ? p.theme.bottomDrawerOpenHeight : p.theme.bottomDrawerClosedHeight });
`;
const Right = ({ children, ...props }) => {
  const {
    bottomDrawerOpen,
    folded, foldedLeft, foldedRight,
    twofoldPercent,
  } = useContext(TwofoldContext)
  return <_Right className='Right' {...{ bottomDrawerOpen, foldedRight, twofoldPercent }} >
    { children }
  </_Right>
}


const W0 = styled.div`
  // border: 1px solid magenta;

  display: flex;
  position: relative;
`;


/**
 * LocationsShow (Static)
 * _vp_ 2022-09-06
 * _vp_ 2022-09-11
 *
 * @TODO: re-introduce MenuIcon in Handle. _vp_ 2022-09-01
 * @TODO: can this be shared across desktop and mobile? _vp_ 2022-09-06
 * @TODO: location.is_purchased doesn't look right... _vp_ 2022-09-06
 *
 * @TODO: hella enable caching all around and measure throughput. _vp_ 2022-09-10
**/
const LocationsShow = (props) => {
  logg(props, 'LocationsShow')
  const {
    location,
    match,
    showItem,
  } = props
  if (!location) { return null }

  const {
    currentUser,
  } = useContext(AuthContext)
  logg(useContext(AuthContext), 'LocationsShow Used AuthContext')

  const {
    os,
  } = useContext(AppContext)

  const {
    bottomDrawerOpen,
    editorMode,
    folded, setFolded, foldedLeft, foldedRight,
    itemToUnlock, setItemToUnlock,
    mapPanelWidth, setMapPanelWidth,
    mapPanelHeight, setMapPanelHeight,
    ratedConfirmation, setRatedConfirmation, // @TODO: move out of this context?
    showUrl, setShowUrl,
    twofoldPercent,
  } = useContext(TwofoldContext)
  logg(useContext(TwofoldContext), 'LocationsShowUsedTwofoldContext')

  const [ windowWidth, windowHeight ] = useWindowSize()
  const [ loading, setLoading ] = useState(false)

  const mapPanelRef = useRef(null)

  // Show ItemToUnlock Modal
  useEffect(() => {
    // @TODO: having location.is_purchased doesn't sound performant, expecially with caching.
    if (location.is_premium && ( !currentUser.email || !location.is_purchased )) {
      setItemToUnlock({
        closable: false,
        item_type: C.item_types.location,
        ...location })
    } else {
      setItemToUnlock(false)
    }
  }, [ currentUser, location ])

  // Set mapPanel sizes
  useEffect(() => {
    if (mapPanelRef.current) {
      setMapPanelWidth(mapPanelRef.current.offsetWidth)
      setMapPanelHeight(mapPanelRef.current.offsetHeight)
    }
  }, [bottomDrawerOpen, folded, mapPanelRef.current, twofoldPercent, windowWidth, windowHeight])

  if (['ios', 'android'].indexOf(os) !== -1) {
    return <LocationsShowMobile3d {...{ ...props, location }} />
  }

  return <W0><LocationProvider {...location} >

    <Left >
      <Breadcrumbs {...location} />
      <WrappedMapPanel
        map={location.map ? location.map : location}
        ref={mapPanelRef}
        slug={match.params.slug}
      />
    </Left>
    <Handle />
    <Right >

      { /* Markers */ }
      { location.markers.length && <Collapsible
          className='Markers'
          label={location.labels.markers}
          slug={C.collapsible.markers}
          variant={C.variants.transparent}
      >
        <MarkersList markers={location.markers}
          variant={C.variants.bordered}
        />
      </Collapsible> || null }

      { /* Description */ }
      { location.description && <Collapsible
          className='Description'
          label={location.labels.description}
          slug={C.collapsible.description}
          variant={C.variants.bordered}
      >
        <Description item={location} />
      </Collapsible> || null }

      { /* Newsitems */ }
      { location.newsitems.length && <Collapsible
          className='Newsitems'
          label={location.labels.newsitems}
          slug={C.collapsible.newsitems}
          variant={C.variants.transparent}
      >
        <Newsitems
          newsitems={location.newsitems}
          variant={C.variants.bordered}
        />
      </Collapsible> || null }

    </Right>

    { showUrl && <IframeModal src={showUrl} /> }
    { showItem && <ItemModal item={showItem} /> }
    { loading && <Loading /> }

    <UnlockModal />

  </LocationProvider></W0>
}
LocationsShow.propTypes = {
  location: PropTypes.object,
  match: PropTypes.shape({
    params: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }),
  }),
  showItem: PropTypes.object,
}

export default LocationsShow
