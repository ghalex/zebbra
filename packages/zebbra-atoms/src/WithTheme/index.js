import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import * as themes from '@zebbra/themes'

export default class WithTheme extends Component {
  render () {
    const theme = themes[this.props.name]
    if (!theme) return this.props.children

    return (
      <ThemeProvider theme={theme}>
        <div>
          {this.props.children}
        </div>
      </ThemeProvider>
    )
  }
}
