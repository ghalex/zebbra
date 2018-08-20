import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { compact } from 'lodash'
import { HGroup, VGroup } from './styles'

/**
 * Group is used to group other elements. <br/>
 * **__Info__**: A group passes all props like `color`, `size`, `etc...` to it's children.
 */
class Group extends React.Component {
  static displayName = 'Group'
  static defaultProps = {
    vertical: false,
    borderRadius: 3
  }

  static propTypes = {
    /** A group can display it's children **vertical**. */
    vertical: PropTypes.bool,
    /** A group can have different border radius */
    borderRadius: PropTypes.oneOf([ PropTypes.number, PropTypes.string ])
  }

  render () {
    const className = cx('group', this.props.className)
    const { vertical, children, fluid, ...props } = this.props
    const StyledGroup = vertical ? VGroup : HGroup

    const items = React.Children.map(
      compact(children),
      c => {
        return React.cloneElement(c, {...props})
      }
    )

    return (
      <StyledGroup {...props} fluid={fluid} className={className}>
        {items}
      </StyledGroup>
    )
  }
}

export default Group
