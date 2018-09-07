import React from 'react'
import { compose } from 'recompose'
import withTheme from '../withTheme'
import setWrappedDisplayName from '../setWrappedDisplayName'

const withFallbackTheme = (fallbackTheme) => BaseComponent => {
  class WithFallbackTheme extends React.Component {
    render () {
      let { theme, ...rest } = this.props

      return (
        <BaseComponent {...rest} theme={theme || fallbackTheme} />
      )
    }
  }

  return compose(
    setWrappedDisplayName('withFallbackTheme'),
    withTheme
  )(WithFallbackTheme)
}

export default withFallbackTheme
