import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { StyledIcon } from './styles'

class Icon extends React.Component {
  static displayName = 'Icon'
  static defaultProps = {
    size: 'normal',
    inverted: false
  }

  static propTypes = {
    /**
     * Icon name
     */
    name: PropTypes.string.isRequired,
    /**
     * A button can have different colors.
     * [ primary, secondary, success, danger, white, black, grey, #FF0000, ... ]
     */
    color: PropTypes.string,
    /**
     * Icons can have different sizes.
     * [ tiny, small, normal, medium, large, xlarge, huge ]
     */
    size: PropTypes.string,
    /** A icon can have its colors inverted  */
    inverted: PropTypes.bool
  }

  render () {
    const className = cx(`icon`, `fa fa-${this.props.name}`, this.props.className)
    return (
      <StyledIcon {...this.props} className={className} />
    )
  }
}

export default Icon
