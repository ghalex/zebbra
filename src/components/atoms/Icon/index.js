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
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
    size: PropTypes.string,
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
