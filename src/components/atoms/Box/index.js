import React from 'react'
import cx from 'classnames'
import { StyledBox } from './styles'

class Box extends React.Component {
  static displayName = 'Box'
  static defaultProps = {
    padding: '1em'
  }

  render () {
    const className = cx(`box`, this.props.className)
    return (
      <StyledBox {...this.props} className={className} />
    )
  }
}

export default Box