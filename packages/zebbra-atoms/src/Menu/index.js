import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { compact, omit } from 'lodash'
import * as s from './styles'

class Menu extends React.Component {
  state = { index: -1, data: null }
  static displayName = 'Menu'
  static defaultProps = {
    size: 'normal',
    onItemClick: null
  }
  static propTypes = {
    size: PropTypes.string,
    /**
     * Called on item click
     *
     * @param {number} index - item index
     * @param {object} props - item props
     */
    onItemClick: PropTypes.func
  }

  static Item = s.MenuItem

  handleItemClick = (index, data) => {
    this.setState({ index, data })

    if (this.props.onItemClick) {
      this.props.onItemClick(index, data)
    }
  }

  render () {
    const className = cx(`menu`, this.props.className)
    const { children, size, ...props } = this.props
    const { index } = this.state

    return (
      <s.Menu {...props} className={className}>
        {React.Children.map(
          compact(children),
          (item, i) => {
            let itemProps = {
              size,
              active: i === index,
              onClick: () => !item.props.static && this.handleItemClick(i, omit({ ...item.props }, 'children'))
            }

            return React.cloneElement(item, itemProps)
          }
        )}
      </s.Menu>
    )
  }
}

export default Menu
