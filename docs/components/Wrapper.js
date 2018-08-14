import React, { Component } from 'react'
// import { ThemeProvider } from 'styled-components'
// import * as themes from '@zebbra/themes'

export default class Wrapper extends Component {
  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
