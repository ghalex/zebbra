import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import * as s from './styles'

class Box extends React.Component {
  static displayName = 'Box'
  static defaultProps = {
    bg: 'white',
    p: '1rem',
    stacked: false,
    boxShadow: '0 1px 3px rgba(10, 10, 10, 0.1)',
    border: '1px solid',
    borderColor: 'rgba(34, 36, 38, 0.15)',
    borderRadius: '3px'
  }

  static propTypes = {
    /** A box can be stacked. */
    stacked: PropTypes.bool
  }

  render () {
    const className = cx(`box`, this.props.className)
    return (
      <s.Box {...this.props} className={className} />
    )
  }
}

export default Box
