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
    p: '1em',
    stacked: false,
    fontFamily: 'primary',
    boxShadow: 'light',
    border: 1,
    borderColor: 'greyUltraLight',
    borderRadius: '3px',
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
    return (
      <s.Box {...this.props} className={className} />
    )
  }
}

export default Box
