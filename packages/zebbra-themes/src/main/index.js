import { darken, lighten } from 'polished'

const theme = { name: 'main' }

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
  primaryDark: darken(0.1, '#1B8CEB'),
  secondary: '#F4511E',
  secondaryLight: '#F4754E',
  secondaryDark: darken(0.1, '#F4511E'),
  success: '#00D1B2',
  successLight: '#49E5CE',
  successDark: darken(0.1, '#00D1B2'),
  danger: '#E91E63',
  dangerLight: '#EC5287',
  dangerDark: darken(0.1, '#E91E63'),
  grey: '#808080',
  greyLight: '#CCCCCC',
  greyUltraLight: '#E0E0E0',
  greyDark: darken(0.1, '#808080'),
  black: '#000000',
  blackLight: lighten(0.1, '#000000'),
  white: '#FFFFFF',
  focus: '#209CEE'
}

theme.components = {}
theme.components.buttons = {
  primary: {
    color: 'white',
    borderColor: 'primary',
    bg: 'primary'
  },
  secondary: {
    color: 'white',
    borderColor: 'secondary',
    bg: 'secondary'
  },
  success: {
    color: 'white',
    borderColor: 'success',
    bg: 'success'
  },
  danger: {
    color: 'white',
    borderColor: 'danger',
    bg: 'danger'
  },
  grey: {
    color: 'white',
    borderColor: 'grey',
    bg: 'grey'
  },
  black: {
    color: 'white',
    borderColor: 'black',
    bg: 'black'
  }
}

theme.components.checkboxes = {
  primary: {
    color: 'white',
    borderColor: 'red',
    bg: 'primary'
  }
}

export default theme
