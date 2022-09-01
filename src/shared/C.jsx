
/**
 * Constants
 */
const C = {

  // A
  actions: { // CRUD
    new: 'new',
    show: 'show',
  },
  anonUser: {}, // as opposed to null

  // B
  bottomDrawerOpen: 'bottom-drawer-open', // localStorage

  // C
  collapsible: {
    description: "descr-sec",
    extra1: "extra1-sec",
    extra2: "extra2-sec",
    extra3: "extra3-sec",
    map: "map-sec",
    markers: "markers-sec",
  },
  collapsibles: 'collapsibles', // localStorage
  current_user: 'current_user',

  // F
  foldedCenter: 'folded-center',
  foldedLeft: 'folded-left', // twofoldContext
  foldedRight: 'folded-right',

  // H
  horizontal: 'horizontal',

  // I
  item_types: {
    gallery: 'Gallery',
    report: 'Report',
    photo: 'Photo',
    video: 'Video',
  },

  // J
  jwt_token: 'jwt_token',

  // L
  layout_onecol: 'onecol',
  layout_mapui: 'mapui',
  locations: {
    earth: 'earth',
  },

  // M
  map_panel_types: {
    Equirectangular: "Equirectangular",
    GoogleMaps: "GoogleMaps",
    MapPanel: "MapPanel",
    MapPanelNoZoom: "MapPanelNoZoom",
    TabiversePlanet: "TabiversePlanet",
    ThreePanelV1: "ThreePanelV1",
    ThreePanelV4: "ThreePanelV4",
  },

  // N
  names: { // for localStorage
    editorMode: 'editorMode',
  },

  // R
  rated: {
    nc17: 'nc-17',
  },
  ratedConfirmation: 'rated-confirmation', // localStorage

  // T
  theme: 'theme',
  themes: {
    dark: 'dark',
    light: 'light',
  },
  twofoldPercent: 'twofold-percent', // localStorage

  // V
  variants: {
    bordered: 'bordered', // for Newsitems
    floating: 'floating', // for main-menu btn
    inline: 'inline',     // for main-menu btn
    transparent: 'transparent', // for markers on Right
  },
  vertical: 'vertical',
  vote_values: {
    up: 'up',
    down: 'down',
  },
}
export default C
