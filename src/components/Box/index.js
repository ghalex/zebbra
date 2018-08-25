import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { main } from 'zebbra/themes'
import * as s from './styles'

class Box extends React.Component {
  static displayName = 'Box'
  static defaultProps = {
    color: null,
    bg: null,
    m: 0,
    p: '1em',
    boxShadow: 'light',
    border: 1,
    borderColor: 'greyUltraLight',
    borderRadius: '3px',
    stacked: false,
    textAlign: 'left',
    fontFamily: 'primary',
    fontSize: null,
    theme: main
  }

  static propTypes = {
    /** A box can be stacked. */
    stacked: PropTypes.bool,
    /** Box theme */
    theme: PropTypes.object
  }

  render () {
    const className = cx(`box`, this.props.className)
    const { children, childrenProps, ...props } = this.props

    return (
      <s.Box {...props} className={className}>
        {children}
      </s.Box>
    )
  }
}

export default Box
