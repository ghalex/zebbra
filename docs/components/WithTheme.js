import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import * as themes from '@zebbra/themes'

export default class WithTheme extends Component {
  render () {
    const theme = themes[this.props.name]

    return (
      <ThemeProvider theme={theme}>
        {this.props.children}
      </ThemeProvider>
    )
  }
}
