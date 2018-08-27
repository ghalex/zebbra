import { darken, lighten } from 'polished'

const theme = { name: 'main' }

theme.fonts = {
  primary: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  monospace: 'monospace'
}

theme.shadows = {
  light: '0 1px 2px rgba(10, 10, 10, 0.1)',
  lightInset: '0 1px 2px rgba(10, 10, 10, 0.1) inset',
  normal: '0 1px 2px rgba(0 ,0, 0, 0.15)',
  hard: '0 1px 5px rgba(0, 0, 0, 0.22)'
}

theme.radii = [ 3, 6, 9 ]

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
  dangerLight: lighten(0.2, '#E91E63'),
  dangerDark: darken(0.1, '#E91E63'),
  grey: '#808080',
  greyLight: '#CCCCCC',
  greyUltraLight: '#E0E0E0',
  greyDark: darken(0.1, '#808080'),
  black: '#000000',
  blackLight: lighten(0.2, '#000000'),
  white: '#FFFFFF',
  focus: '#209CEE',
  google: '#cf4332',
  facebook: '#3A579B'
}

theme.components = {}
theme.components.box = {
  primary: {
    borderTop: '2px solid',
    borderTopColor: 'primary'
  },
  secondary: {
    borderTop: '2px solid',
    borderTopColor: 'secondary'
  },
  success: {
    borderTop: '2px solid',
    borderTopColor: 'success'
  },
  danger: {
    borderTop: '2px solid',
    borderTopColor: 'danger'
  },
  grey: {
    borderTop: '2px solid',
    borderTopColor: 'grey'
  },
  black: {
    borderTop: '2px solid',
    borderTopColor: 'black'
  }
}
theme.components.button = {
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
  },
  google: {
    color: 'white',
    borderColor: 'google',
    bg: 'google'
  },
  facebook: {
    color: 'white',
    borderColor: 'facebook',
    bg: 'facebook'
  }
}
theme.components.checkbox = {
  primary: {
    color: 'white',
    borderColor: 'primaryDark',
    bg: 'primary'
  },
  secondary: {
    color: 'white',
    borderColor: 'secondaryDark',
    bg: 'secondary'
  },
  success: {
    color: 'white',
    borderColor: 'successDark',
    bg: 'success'
  },
  danger: {
    color: 'white',
    borderColor: 'dangerDark',
    bg: 'danger'
  }
}
theme.components.datepicker = {}
theme.components.dropdown = {}
theme.components.icon = {}
theme.components.input = {
  primary: {
    color: 'white',
    bg: 'primary',
    borderColor: 'primary',
    fontWeight: 300,
    placeholderColor: 'rgba(255,255,255, 0.4)'
  },
  secondary: {
    color: 'white',
    bg: 'secondary',
    borderColor: 'secondary',
    fontWeight: 300,
    placeholderColor: 'rgba(255,255,255, 0.4)'
  },
  success: {
    color: 'white',
    bg: 'success',
    borderColor: 'success',
    fontWeight: 300,
    placeholderColor: 'rgba(255,255,255, 0.4)'
  },
  danger: {
    color: 'white',
    bg: 'danger',
    borderColor: 'danger',
    fontWeight: 300,
    placeholderColor: 'rgba(255,255,255, 0.4)'
  }
}
theme.components.loader = {}
theme.components.menu = {}
theme.components.switch = {}
theme.components.text = {}
theme.components.textarea = {}
theme.components.title = {}
theme.components.yesno = {}

export default theme
