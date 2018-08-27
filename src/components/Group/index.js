import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { main } from 'zebbra/themes'
import { compose } from 'recompose'
import { withFallbackTheme } from 'zebbra/hocs'
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
    vertical: PropTypes.bool
  }

  render () {
    const className = cx('group', this.props.className)
    const { vertical, children, fluid, ...rest } = this.props
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

        let itemProps = {...removeSpaceProps(rest)}
        if (filterChildren.length > 1) {
          itemProps.className = itemClassName
        }

        return React.cloneElement(c, itemProps)
      }
    )

    return (
      <StyledGroup {...rest} fluid={fluid} className={className}>
        {items}
      </StyledGroup>
    )
  }
}

export default compose(
  withFallbackTheme(main)
)(Group)
