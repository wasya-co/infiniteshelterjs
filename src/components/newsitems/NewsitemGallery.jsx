import React from "react"
import { useHistory } from "react-router-dom"
import styled from 'styled-components'

import { Metaline } from "$components/application"
import "./newsitems.scss"
import { logg } from "$shared"

const Card = styled.div`
  background: #333333;
  color: white;
`

const Image = styled.div`
  position: relative;
  padding-top: 100%;
  overflow: hidden;
  z-index: 10;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  width: 100px;
  height: 100px;
`

const Image2 = styled.div`
`

const Images = styled.div`
  border: 1px solid red;
`

const ImageLarge = styled.img``
const ImageThumb1 = styled.img``
const ImageThumb2 = styled.img``

const NewsitemGallery = (props) => {
  logg(props, 'NewsitemGallery')
  const { gallery } = props;

  const history = useHistory()

  const navigateToGallery = () => {
    history.push(`/en/galleries/show/${gallery.slug}`)
  }


  return (
    <Card>
      <Images onClick={navigateToGallery} >
        { false && (gallery.photos || []).slice(0, 3).map((photo, i) =>
          <Image key={i}
            style={{ backgroundImage: `url(${photo.large_url})` }}>
            { i == 2 && <div className="number">+{gallery.photos.length - 3}</div> }
          </Image>
        ) }

        { gallery.photos[0] && <ImageLarge src={gallery.photos[0].large_url} /> }
        { gallery.photos[1] && <ImageThumb1 src={gallery.photos[1].thumb_url} /> }
        { gallery.photos[2] && <ImageThumb2 src={gallery.photos[2].thumb_url} /> }

        { false && gallery.photos.map((photo, idx) =>
          <Image2 key={idx} >
            <img src={`${photo.thumb_url}`} alt='' />
          </Image2>
        ) }
      </Images>
      <div>
        <p className="title routable" onClick={navigateToGallery}>
          <img className="icon" src={"/assets/newsfeed/photos_icon.png"} alt='' />
          <span className="title-heading">{gallery.name}</span>
        </p>
        <Metaline item={gallery} />
        <p className="subhead" dangerouslySetInnerHTML={{ __html: gallery.subhead }}></p>
      </div>
    </Card>
  )

}

export default NewsitemGallery
