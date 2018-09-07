import React from 'react'
import { compose } from 'recompose'
import setWrappedDisplayName from '../setWrappedDisplayName'

const withVariant = (key) => BaseComponent => {
  class WithVariant extends React.Component {
    render () {
      let { variant, theme } = this.props
      let variantProps = {}

      if (variant && theme && theme.components[key] && theme.components[key][variant]) {
        variantProps = theme.components[key][variant]
      }

      return (
        <BaseComponent {...this.props} {...variantProps} />
      )
    }
  }

  return compose(
    setWrappedDisplayName('withVariant')
  )(WithVariant)
}

export default withVariant
