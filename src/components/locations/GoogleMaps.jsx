
import * as React from "react"
import * as ReactDom from "react-dom"
import { Wrapper, Status } from "@googlemaps/react-wrapper"

import config from 'config'

import {
  logg,
} from '$shared'

/**
 * App
**/
const App = (props) => {
  // logg(props, 'GoogleMaps2')
  const {
    map,
  } = props

  const [clicks, setClicks] = React.useState([]);
  const [zoom, setZoom] = React.useState(12); // initial zoom
  const [center, setCenter] = React.useState({ lat: map.x, lng: map.y })

  const onClick = (e) => {
    // avoid directly mutating state
    // setClicks([...clicks, e.latLng]);
  };

  const onIdle = (m) => {
    // console.log("onIdle");
    m.getZoom() && setZoom(m.getZoom());
    m.getCenter() && setCenter(m.getCenter().toJSON());
  };

  const form = (
    <div
      style={{
        display: 'none',

        padding: "1rem",
        flexBasis: "250px",
        height: "100%",
        overflow: "auto",
      }}
    >
      <label htmlFor="zoom">Zoom</label>
      <input
        type="number"
        id="zoom"
        name="zoom"
        value={zoom}
        onChange={(event) => setZoom(Number(event.target.value))}
      />
      <br />
      <label htmlFor="lat">Latitude</label>
      <input
        type="number"
        id="lat"
        name="lat"
        value={center.lat}
        onChange={(event) =>
          setCenter({ ...center, lat: Number(event.target.value) })
        }
      />
      <br />
      <label htmlFor="lng">Longitude</label>
      <input
        type="number"
        id="lng"
        name="lng"
        value={center.lng}
        onChange={(event) =>
          setCenter({ ...center, lng: Number(event.target.value) })
        }
      />
      <h3>{clicks.length === 0 ? "Click on map to add markers" : "Clicks"}</h3>
      {clicks.map((latLng, i) => (
        <pre key={i}>{JSON.stringify(latLng.toJSON(), null, 2)}</pre>
      ))}
      <button onClick={() => setClicks([])}>Clear</button>
    </div>
  );

  return (
    <div style={{ display: "flex", height: "100%" }}>
      <Wrapper apiKey={config.GOOGLE_MAPS_KEY} >
        <Map
          center={center}
          onClick={onClick}
          onIdle={onIdle}
          zoom={zoom}
          style={{ flexGrow: "1", height: "100%" }}
        >
          {map.markers.map((m, i) =>
            <Marker key={i} position={{lat: m.x, lng: m.y}} />
          ) }
        </Map>
      </Wrapper>
      {/* Basic form for controlling center and zoom of map. */}
      {form}
    </div>
  );
};

/**
 * GoogleMaps
**/
const Map = ({
  onClick,
  onIdle,
  children,
  style,
  ...options
}) => {
  const ref = React.useRef(null);
  const [map, setMap] = React.useState();

  React.useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);

  // because React does not do deep comparisons, a custom hook is used
  // see discussion in https://github.com/googlemaps/js-samples/issues/946
  useDeepCompareEffectForMaps(() => {
    if (map) {
      map.setOptions(options);
    }
  }, [map, options]);

  React.useEffect(() => {
    if (map) {
      ["click", "idle"].forEach((eventName) =>
        google.maps.event.clearListeners(map, eventName)
      );

      if (onClick) {
        map.addListener("click", onClick);
      }

      if (onIdle) {
        map.addListener("idle", () => onIdle(map));
      }
    }
  }, [map, onClick, onIdle]);

  return (
    <>
      <div ref={ref} style={style} />
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          // set the map prop on the child component
          return React.cloneElement(child, { map });
        }
      })}
    </>
  );
};

const Marker = (options) => {
  const [marker, setMarker] = React.useState();

  React.useEffect(() => {
    if (!marker) {
      setMarker(new google.maps.Marker());
    }

    // remove marker from map on unmount
    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  React.useEffect(() => {
    if (marker) {
      marker.setOptions(options);
    }
  }, [marker, options]);

  return null;
};

function useDeepCompareMemoize(value) {
  const ref = React.useRef();

  if (value !== ref.current) {
    ref.current = value;
  }

  return ref.current;
}

const useDeepCompareEffectForMaps = (callback, dependencies) => {
  React.useEffect(callback, dependencies.map(useDeepCompareMemoize));
}

export default App