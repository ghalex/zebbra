import { rgba, darken, lighten } from 'polished'

const theme = {}

theme.fonts = {
  primary: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  monospace: 'monospace'
}

theme.shadows = {
  light: '0 1px 2px rgba(10, 10, 10, 0.1)',
  normal: '0 1px 2px rgba(0 ,0, 0, 0.15)',
  hard: '0 1px 5px rgba(0, 0, 0, 0.22)'
}

/** All sizes are in pixels */
theme.sizes = theme.fontSize = {
  tiny: 10,
  small: 14,
  normal: 16,
  medium: 20,
  large: 24,
  xlarge: 30,
  huge: 36
}

theme.colors = {
  primary: '#1B8CEB',
  primaryLight: '#65B3E3',
  secondary: '#F4511E',
  secondaryLight: '#F4754E',
  success: '#00D1B2',
  successLight: '#49E5CE',
  danger: '#E91E63',
  dangerLight: '#EC5287',
  grey: '#808080',
  greyLight: '#CCCCCC',
  greyUltraLight: '#E0E0E0',
  greyGradient: '',
  black: '#000000',
  white: '#FFFFFF',
  focus: '#209CEE'
}

theme.buttons = {
  normal: {
    background: 'linear-gradient(#FFFFFF, #F6F7F8)',
    border: `1px solid ${theme.colors.greyLight}`,
    '&:hover': {
      background: darken(0.06, '#F6F7F8')
    }
  },
  primary: {
    color: 'white',
    borderColor: theme.colors.primary,
    background: theme.colors.primary,
    '&:hover': {
      background: darken(0.06, theme.colors.primary)
    }
  },
  secondary: {
    color: 'white',
    borderColor: theme.colors.secondary,
    background: theme.colors.secondary,
    '&:hover': {
      background: darken(0.06, theme.colors.secondary)
    }
  },
  success: {
    color: 'white',
    borderColor: theme.colors.success,
    background: theme.colors.success,
    '&:hover': {
      background: darken(0.06, theme.colors.success)
    }
  },
  danger: {
    color: 'white',
    borderColor: theme.colors.danger,
    background: theme.colors.danger,
    '&:hover': {
      background: darken(0.06, theme.colors.danger)
    }
  }
}

theme.components = {
  box: p => ({
    border: '1px solid rgba(34,36,38, 0.15)',
    borderRadius: 3,
    boxShadow: '0 1px 3px rgba(10, 10, 10, 0.1)'
  }),
  button: p => ({
    height: '2.40em',
    padding: '0px 1.0em',
    border: '1px solid #CCC',
    borderRadius: 3,
    color: '#363636',
    background: 'linear-gradient(#ffffff, #f6f7f8)',
    hoverBackground: '#f6f7f8',
    focusBoxShadow: `0 0 0 2px ${rgba(theme.colors.focus, 0.2)}`
  }),
  group: p => ({
    borderRadius: 3
  }),
  icon: p => ({
    width: '1.6em',
    height: '1.6em'
  }),
  loader: p => ({
    size: '1.125em',
    borderSize: '3px',
    margin: '0'
  }),
  menu: p => ({
    border: '1px solid',
    borderColor: 'rgba(34,36,38, 0.15)',
    borderRadius: 3,
    boxShadow: '0 1px 3px rgba(10, 10, 10, 0.1)',
    hover: '#f2f2f2'
  }),
  dropdown: p => ({}),
  tag: p => ({
    border: '1px solid #888',
    borderRadius: 3,
    height: '2em'
  }),
  input: p => ({
    border: `1px solid`,
    borderColor: '#CCC',
    background: 'white',
    borderRadius: 3,
    boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.12)',
    height: '2.40em',
    focusBorder: `1px solid ${theme.colors.focus}`,
    focusBoxShadow: `0 0 0 2px ${rgba(theme.colors.focus, 0.2)}`
  }),
  textarea: p => ({
    border: `1px solid #CCC`,
    borderRadius: 3,
    boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.12)',
    focusBorder: `1px solid ${theme.colors.focus}`,
    focusBoxShadow: `0 0 0 2px ${rgba(theme.colors.focus, 0.2)}`
  }),
  checkbox: p => ({
    border: '1px solid gray',
    borderRadius: 3,
    boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.12)'
  }),
  switch: p => ({
    width: '2.5em',
    thumbSize: '1.15em',
    thumbPadding: 4
  })
}

export default theme
