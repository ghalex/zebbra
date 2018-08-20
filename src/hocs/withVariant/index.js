import React from 'react'
import { setDisplayName, wrapDisplayName } from 'recompose'

const withVariant = (key, defaultTheme) => BaseComponent => {
  class WithVariant extends React.Component {
    state = { isHover: false }
    handleMouseEnter = evt => {
      this.setState({ isHover: true })
      this.props.onMouseEnter && this.props.onMouseEnter(evt)
    }

    handleMouseLeave = evt => {
      this.setState({ isHover: false })
      this.props.onMouseLeave && this.props.onMouseLeave(evt)
    }

    render () {
      let { variant, theme } = this.props
      let { isHover } = this.state
      let props = {...this.props}

      if (!theme) {
        theme = defaultTheme
      }

      if (variant && theme && theme.components[key][variant]) {
        let vProps = theme.components[key][variant]

        if (isHover && vProps.hover && !props.outlined) {
          vProps = { ...vProps, ...vProps.hover }
        }

        props = { ...this.props, ...vProps, isHover }
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
