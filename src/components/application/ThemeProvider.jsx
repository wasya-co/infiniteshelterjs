
import React, { useEffect, useState, } from 'react'
import { ThemeProvider as _ThemeProvider } from 'styled-components'

import {
  C,
  S,
} from '$shared'

/**
 * ThemeProvider - this one is my own.
**/
export const ThemeContext = React.createContext({})
const ThemeProvider = ({ children, ...props }) => {

  const defaultTheme = 'undefined' === typeof window ? C.themes.light : ( window.localStorage.getItem(C.theme) || C.themes.light )
  const [theme, setTheme] = useState(defaultTheme)
  // @TODO: this is untested and unused!
  const toggleTheme = (e) => {
    if (theme === C.themes.light) {
      window.localStorage.setItem(C.theme, C.themes.dark)
      setTheme(C.themes.dark)
    } else {
      window.localStorage.setItem(C.theme, C.themes.light)
      setTheme(C.themes.light)
    }
  }

  return <ThemeContext.Provider value={{ theme, setTheme }} >
    <_ThemeProvider theme={theme == C.themes.light ? S.lightTheme: S.darkTheme} >
      { children }
    </_ThemeProvider>
  </ThemeContext.Provider>
}
export default ThemeProvider

