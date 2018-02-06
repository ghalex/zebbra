import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { compact } from 'lodash'
import { HGroup, VGroup } from './styles'

class Group extends React.Component {
  static displayName = 'Group'
  static defaultProps = {
    vertical: false
  }
  static propTypes = {
    /**
     * A group can display it's children vertical
     */
    vertical: PropTypes.bool
  }

  render () {
    const className = cx('group', this.props.className)
    const { vertical, children, ...props } = this.props
    const StyledGroup = vertical ? VGroup : HGroup

    const items = React.Children.map(
      compact(children),
      c => {
        return React.cloneElement(c, {...props})
      }
    )

    return (
      <StyledGroup {...props} className={className}>
        {items}
      </StyledGroup>
    )
  }
}

export default Group
