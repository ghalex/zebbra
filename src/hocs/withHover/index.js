import React from 'react'
import { setDisplayName, wrapDisplayName } from 'recompose'

const withHover = (key, defaultTheme) => BaseComponent => {
  class WithHover extends React.Component {
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
      let { isHover } = this.state
      let props = { ...this.props, isHover }

      return (
        <BaseComponent
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          {...props}
        />
      )
    }
  }

  return setDisplayName(wrapDisplayName(BaseComponent, 'withHover'))(
    WithHover
  )
}

export default withHover
