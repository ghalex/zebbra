import React from 'react'
import { compose } from 'recompose'
import { ThemeConsumer } from 'styled-components'
import setWrappedDisplayName from '../setWrappedDisplayName'

const withFallbackTheme = (fallbackTheme) => BaseComponent => {
  class WithFallbackTheme extends React.Component {
    render () {
      let { theme, ...rest } = this.props

      return (
        <ThemeConsumer>
          {comsumerTheme => <BaseComponent {...rest} theme={theme || comsumerTheme || fallbackTheme} />}
        </ThemeConsumer>
      )
    }
  }

  return compose(
    setWrappedDisplayName('withFallbackTheme')
  )(WithFallbackTheme)
}

export default withFallbackTheme
