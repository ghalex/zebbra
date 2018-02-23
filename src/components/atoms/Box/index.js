import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { StyledBox } from './styles'

class Box extends React.Component {
  static displayName = 'Box'
  static defaultProps = {
    padding: '1em',
    size: 'normal',
    color: 'white',
    inverted: false
  }

  static propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
    padding: PropTypes.string,
    inverted: PropTypes.bool
  }

  render () {
    const className = cx(`box`, this.props.className)
    return (
      <StyledBox {...this.props} className={className} />
    )
  }
}

export default Box
