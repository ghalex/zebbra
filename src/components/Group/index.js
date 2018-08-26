import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { compact, filter, isBoolean } from 'lodash'
import { removeSpaceProps } from 'zebbra/utils'
import { VGroup, HGroup } from './styles'

/**
 * Group is used to group other elements. <br/>
 * **__Info__**: A group passes all props like `color`, `size`, `etc...` to it's children.
 */
class Group extends React.Component {
  static displayName = 'Group'
  static defaultProps = {
    vertical: false,
    noBorders: false,
    borderRadius: 0
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
    const filterChildren = filter(compact(children), e => !isBoolean(e))

    const items = React.Children.map(
      filterChildren,
      (c, index) => {
        let itemClassName = cx(
          {'child': index !== 0 && index !== filterChildren.length - 1},
          {'first': index === 0},
          {'last': index === filterChildren.length - 1}
        )

        let itemProps = {...removeSpaceProps(props)}
        if (filterChildren.length > 1) {
          itemProps.className = itemClassName
        }

        return React.cloneElement(c, itemProps)
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
