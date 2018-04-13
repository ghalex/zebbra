import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { compact, isFunction } from 'lodash'
import * as s from './styles'

class Menu extends React.Component {
  state = { selected: null }
  static displayName = 'Menu'
  static defaultProps = {
    size: 'normal',
    onItemClick: null,
    height: 0
  }
  static propTypes = {
    size: PropTypes.string,
    /**
     * Called on item click
     *
     * @param {object} props - item props
     */
    onItemClick: PropTypes.func
  }

  static Item = s.MenuItem
  static Header = s.MenuHeader

  handleItemClick = (data) => {
    this.setState({ selected: data })

    if (this.props.onItemClick) {
      this.props.onItemClick(data)
    }
  }

  render () {
    let className = cx(`menu`, this.props.className)
    let { selected } = this.state
    let { header, children, size, ...props } = this.props
    let items = isFunction(children) ? compact(children(selected)) : compact(children)

    if (items[0].type.displayName === 'styles__MenuHeader') {
      header = items.shift()
    }

    return (
      <s.Menu {...props} className={className}>
        {header && React.cloneElement(header, { size })}
        <s.MenuItemContainer height={props.height} hasHeader={!!header}>
          {React.Children.map(
            items,
            (item, i) => {
              let itemProps = {
                size,
                ...item.props,
                onClick: () => !item.props.static && this.handleItemClick(item.props)
              }

              return React.cloneElement(item, itemProps)
            }
          )}
        </s.MenuItemContainer>
      </s.Menu>
    )
  }
}

export default Menu
