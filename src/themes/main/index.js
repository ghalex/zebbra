const theme = {}

theme.fonts = {
  primary: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  monospace: 'monospace'
}

/** All sizes are in pixels */
theme.sizes = {
  tiny: 10,
  small: 13,
  normal: 16,
  medium: 20,
  large: 24,
  xlarge: 30,
  huge: 36
}

theme.colors = {
  primary: '#1b8ceb',
  primaryLight: '#65b3e3',
  secondary: '#f4511e',
  secondaryLight: '#f4754e',
  success: '#00d1b2',
  successLight: '#49e5ce',
  danger: '#e91e63',
  grey: '#CCCCCC',
  light: '#E0E1E2',
  black: '#363636',
  white: 'white'
}

theme.components = {
  group: {
    borderRadius: 3
  },
  box: {
    border: '1px solid rgba(34,36,38, 0.15)',
    borderRadius: 6,
    boxShadow: '0 1px 3px rgba(10, 10, 10, 0.1)'
  },
  button: {
    height: '2.40em',
    padding: '0px 1.0em',
    boxShadow: '0 -2px 0 rgba(0,0,0,0.20) inset',
    border: '1px solid',
    borderRadius: 3,
    borderColor: '#e8eaed',
    color: 'black',
    background: 'linear-gradient(#ffffff, #f6f7f8)',
    hoverBackground: '#f6f7f8'
  },
  tag: {
    border: '1px solid gray',
    borderRadius: 3,
    height: '2em'
  },
  input: {
    border: `2px solid #CCC`,
    borderRadius: 0,
    boxShadow: 'none',
    height: '2.40em',
    focusBorder: `2px solid ${theme.colors.primaryLight}`,
    focusBoxShadow: `none`
  },
  textarea: {
    border: `2px solid #CCC`,
    borderRadius: 0,
    boxShadow: 'none',
    focusBorder: `2px solid ${theme.colors.primaryLight}`,
    focusBoxShadow: `none`
  },
  checkbox: {
    border: '1px solid gray',
    borderRadius: 3,
    boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.12)'
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
