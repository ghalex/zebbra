import React from 'react'
import PropTypes from 'prop-types'
import { setDisplayName, wrapDisplayName } from 'recompose'

const CHANNEL = '__styled-components__'

const withVariant = (key, fallbackTheme) => BaseComponent => {
  class WithVariant extends React.Component {
    static contextTypes = {
      [CHANNEL]: PropTypes.func
    }

    state = { theme: undefined }

    componentWillMount () {
      const subscribe = this.context[CHANNEL]
      if (subscribe) {
        this.unsubscribe = subscribe(theme => { this.setState({ theme }) })
      }
    }

    componentWillUnmount () {
      if (typeof this.unsubscribe === 'function') this.unsubscribe()
    }

    render () {
      let { variant, theme, ...rest } = this.props
      theme = this.state.theme || this.props.theme || fallbackTheme

      if (variant && theme && theme.components[key] && theme.components[key][variant]) {
        let variantProps = theme.components[key][variant]
        rest.variantProps = variantProps
      }

      return (
        <BaseComponent
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          theme={theme}
          {...rest}
        />
      )
    }
  }

  return setDisplayName(wrapDisplayName(BaseComponent, 'withVariant'))(
    WithVariant
  )
}

export default withVariant
