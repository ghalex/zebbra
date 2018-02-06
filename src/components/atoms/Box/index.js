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
    /**
     * A box can have different colors.
     * [ primary, secondary, success, danger, white, black, grey, #FF0000, ... ]
     */
    color: PropTypes.string,
    /**
     * A box can have different sizes.
     * [ tiny, small, normal, medium, large, xlarge, huge ]
     */
    size: PropTypes.string,
    /** Ex: 2px, 0.5rem */
    padding: PropTypes.string,
    /** A box can have its colors inverted  */
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
