import React from 'react'
import { ThemeProvider } from 'styled-components'
import * as themes from 'zebbra/themes'

class WithTheme extends React.Component {
  static displayName = 'WithTheme'
  static defaultProps = {
    name: 'main'
  }

  render () {
    return (
      <ThemeProvider theme={themes[this.props.name]}>
        {this.props.children}
      </ThemeProvider>
    )
  }
}

export default WithTheme
