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
    height: 0,
    fluid: false,
    onItemClick: null
  }
  static propTypes = {
    size: PropTypes.string,
    fluid: PropTypes.bool,
    /**
     * Called on item click
     *
     * @param {object} props - item props
     */
    onItemClick: PropTypes.func
  }

  handleItemClick = (data) => {
    this.setState({ selected: data })

    if (this.props.onItemClick) {
      this.props.onItemClick(data)
    }
  }

  render () {
    let className = cx(`menu`, this.props.className)
    let { selected } = this.state
    let { children, size, ...props } = this.props
    let items = isFunction(children) ? compact(children(selected).props.children) : compact(children)

    return (
      <s.Menu {...props} className={className}>
        {React.Children.map(
          items,
          (item, i) => {
            let itemProps = {
              size,
              ...item.props
            }

            if (item.type.displayName === 'MenuItem' && !item.props.static) {
              itemProps.onClick = () => this.handleItemClick(item.props)
            }

            if (item.type.displayName === 'Menu') {
              itemProps.onItemClick = (p) => this.handleItemClick(p)
            }

            return React.cloneElement(item, itemProps)
          }
        )}
      </s.Menu>
    )
  }
}

Menu.Item = s.MenuItem
Menu.Item.displayName = 'MenuItem'

Menu.Header = s.MenuHeader
Menu.Header.displayName = 'MenuHeader'

Menu.Divider = s.MenuDivider
Menu.Divider.displayName = 'MenuDivider'

Menu.Items = s.MenuItems

export default Menu
