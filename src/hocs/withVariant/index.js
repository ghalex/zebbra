import React from 'react'
import { setDisplayName, wrapDisplayName } from 'recompose'

const withVariant = (key, defaultTheme) => BaseComponent => {
  class WithVariant extends React.Component {
    render () {
      let { variant, theme } = this.props
      let props = {...this.props}

      if (!theme) {
        theme = defaultTheme
      }

      if (variant && theme && theme.components[key] && theme.components[key][variant]) {
        let variantProps = theme.components[key][variant]
        props.variantProps = variantProps
      }

      return (
        <BaseComponent
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          {...props}
        />
      )
    }
  }

  return setDisplayName(wrapDisplayName(BaseComponent, 'withVariant'))(
    WithVariant
  )
}

export default withVariant
