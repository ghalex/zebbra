const theme = {}

theme.fonts = {
  primary: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  monospace: 'monospace'
}

theme.sizes = {
  tiny: '0.60rem',
  small: '0.785rem',
  normal: '1rem',
  medium: '1.2em',
  large: '1.5rem',
  xlarge: '2.0rem',
  huge: '3rem'
}

theme.colors = {
  primary: '#1b8ceb',
  secondary: '#f4511e',
  success: '#00d1b2',
  danger: '#e91e63',
  grey: '#CCCCCC',
  light: '#E0E1E2',
  black: 'black',
  white: 'white'
}

theme.components = {
  box: {
    radius: '6px',
    border: '1px solid rgba(34,36,38, 0.15)',
    boxShadow: '0 1px 3px rgba(10, 10, 10, 0.1)'
  },
  button: {
    height: '2.40em',
    padding: '0px 1.0em',
    radius: '3px',
    boxShadow: '0 -2px 0 rgba(0,0,0,0.20) inset',
    border: '1px solid transparent'
  },
  input: {
    border: `2px solid #CCC`,
    borderRadius: '6px',
    boxShadow: 'none',
    height: '2.40em',
    focusBorder: `2px solid ${theme.colors.primary}`,
    focusBoxShadow: `none`
  },
  loader: {
    size: '1.125em',
    borderSize: '3px',
    margin: '0'
  },
  icon: {
    width: '1.6em',
    height: '1.6em'
  }
}

export default theme
