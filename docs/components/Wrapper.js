import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import * as themes from '@zebbra/themes'

export default class Wrapper extends Component {
  render () {
    return (
      <ThemeProvider theme={themes.main}>
        {this.props.children}
      </ThemeProvider>
    )
  }
}
