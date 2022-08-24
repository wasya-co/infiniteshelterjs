
import React from 'react'

import {
  C,
  logg,
} from '$shared'

import styles from './DayNightToggle.module.scss'

/**
 * DayNightToggle
 * From: https://codepen.io/fagnanm/pen/RpWNyb
 * From: https://devbeep.com/css-day-night-toggle-switch/
**/
const DayNightToggle = (props) => {
  logg(props, 'DayNightToggle')
  const { toggleTheme, theme } = props

  return (
    <div className={styles.container} onClick={toggleTheme} >
      <div className={styles.switch} >
        <label for="toggle">
          <input id="toggle" type="checkbox" checked={theme === C.themes.light} ></input>
          <div className={styles.sunMoon} ><div className={styles.dots} ></div></div>
          <div className={styles.background} ><div className={styles.stars1}></div><div className={styles.stars2}></div></div>
          {/* <div className={styles.fill}></div> */}
        </label>
      </div>
    </div>
  );
}

export default DayNightToggle
