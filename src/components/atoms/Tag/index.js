import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Icon } from 'components'
import { StyledTag } from './styles'

class Tag extends React.Component {
  static displayName = 'Tag'
  static defaultProps = {
    color: null,
    size: 'normal',
    icon: null,
    isDelete: false
  }

  static propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
    icon: PropTypes.string,
    isDelete: PropTypes.bool
  }

  render () {
    const className = cx(`tag`, this.props.className)
    const {icon, isDelete, children, ...props} = this.props

    return (
      <StyledTag {...props} icon={icon} isDelete={isDelete} className={className}>
        {icon && <Icon key={0} name={icon} />}
        {children}
      </StyledTag>
    )
  }
}

export default Tag
