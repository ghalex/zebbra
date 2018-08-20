import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { compact, isFunction, isString } from 'lodash'
import { withTheme } from 'styled-components'
import { main } from 'zebbra/themes'
import * as s from './styles'

class Menu extends React.Component {
  state = { selected: null }

  static displayName = 'Menu'
  static defaultProps = {
    border: 1,
    borderColor: 'greyUltraLight',
    borderRadius: 3,
    p: null,
    m: null,
    bg: 'white',
    fontFamily: 'primary',
    boxShadow: 'light',
    maxHeight: null,
    fluid: false,
    onItemClick: null,
    theme: main
  }
  static propTypes = {
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
    let { children, items, ...props } = this.props
    let menuItems = null

    if (children) {
      menuItems = isFunction(children) ? compact(children(selected).props.children) : compact(children)
    } else {
      menuItems = items.map(data => {
        let itemProps = {
          border: props.border,
          borderColor: props.borderColor,
          theme: props.theme
        }

        if (isString(data)) {
          return <s.MenuItem {...itemProps}>{data}</s.MenuItem>
        }

        if (data.type === 'divider') {
          return <s.MenuDivider {...itemProps} />
        }

        return <s.MenuItem {...itemProps} value={data.value}>{data.label}</s.MenuItem>
      })
    }

    return (
      <s.Menu {...props} className={className}>
        {React.Children.map(
          menuItems,
          (item, i) => {
            let itemProps = {
              border: props.border,
              borderColor: props.borderColor,
              theme: props.theme,
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

export default withTheme(Menu)
