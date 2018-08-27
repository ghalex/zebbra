import React from 'react'
import { compose, defaultProps } from 'recompose'
import setWrappedDisplayName from '../setWrappedDisplayName'

const withThemeVariant = (key) => BaseComponent => {
  class WithVariant extends React.Component {
    render () {
      let { variant, theme } = this.props
      let variantProps = {}

      if (variant && theme && theme.components[key] && theme.components[key][variant]) {
        variantProps = theme.components[key][variant]
      }
      console.log(BaseComponent.defaultProps)
      return (
        <BaseComponent
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          {...this.props}
          {...variantProps}
        />
      )
    }
  }

  return compose(
    setWrappedDisplayName('withThemeVariant')
  )(WithVariant)
}

export default withThemeVariant
