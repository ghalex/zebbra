import { Theme } from "zebbra"
import { color } from 'styled-helpers'
import { rgba, lighten } from 'polished'

const theme: Theme = {
  fonts: {
    primary: 'BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
    monospace: 'monospace'
  },
  sizes: {
    tiny: '0.60rem',
    small: '0.785rem',
    normal: '1rem',
    medium: '1.2em',
    large: '1.5rem',
    xlarge: '2.0rem',
    huge: '3rem'
  },
  colors: {
    primary: '#1b8ceb',
    secondary: '#f4511e',
    success: '#00d1b2',
    danger: '#e91e63',
    grey: '#CCCCCC',
    black: 'black',
    white: 'white'
  },
  components: {
    input: (props: any) => ({
      border: `2px solid #CCC`,
      borderRadius: '6px',
      boxShadow: 'none',
      height: '2.40em',
      focusBorder: `2px solid ${color(props)}`,
      focusBoxShadow: `none`
    })
  }
}

export default theme
