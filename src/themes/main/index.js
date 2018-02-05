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
  black: 'black',
  white: 'white'
}

theme.components = {
  input: {
    border: `2px solid #CCC`,
    borderRadius: '6px',
    boxShadow: 'none',
    height: '2.40em',
    focusBorder: `2px solid ${theme.colors.primary}`,
    focusBoxShadow: `none`
  }
}

export default theme
