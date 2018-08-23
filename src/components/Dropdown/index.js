import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { isFunction, isString } from 'lodash'
import { Icon, Button, Menu } from 'zebbra/components'
import { removeSpaceProps } from 'zebbra/utils'
import { main } from 'zebbra/themes'
import * as s from './styles'

class Dropdown extends React.Component {
  state = { open: false }

  static displayName = 'Dropdown'
  static defaultProps = {
    fontFamily: 'primary',
    inline: false,
    closeOnBlur: true,
    closeOnChange: false,
    fluid: false,
    label: 'Please select',
    direction: 'left',
    theme: main
  }

  static propTypes = {
    closeOnBlur: PropTypes.bool,
    closeOnChange: PropTypes.bool,
    direction: PropTypes.oneOf(['left', 'right']),
    label: PropTypes.string,
    fluid: PropTypes.bool,
    value: PropTypes.any
  }

  componentDidMount () {
    window.addEventListener('click', this.handleDocumentClick)
  }
  componentWillUnmount () {
    window.removeEventListener('click', this.handleDocumentClick)
  }

  open = () => { this.setState({ open: true }) }
  close = () => { this.setState({ open: false }) }
  toggle = () => { this.setState({ open: !this.state.open }) }

  handleDocumentClick = () => {
    if (this.props.closeOnBlur) {
      this.close()
    }
  }

  handleItemClick = (data) => {
    if (this.props.closeOnChange) {
      this.close()
    }

    if (this.props.onChange) {
      this.props.onChange(data)
    }
  }

  handleTrigger = () => {
    this.toggle()
  }

  renderDefaultTrigger = (item, onTrigger) => {
    let { label, fluid, ...props } = removeSpaceProps(this.props)

    if (item) {
      if (isString(item)) {
        label = item
      } else {
        if (item.label) {
          label = item.label
        } else {
          label = item.children
        }
      }
    }

    return (
      <s.Trigger fluid={fluid} onClick={onTrigger} className='trigger'>
        <Button fluid={fluid} {...props}>
          {label}
          <Icon name='caret-down' />
        </Button>
      </s.Trigger>
    )
  }

  renderDefaultMenu = (items) => {
    const props = removeSpaceProps(this.props)
    return <Menu {...props} onItemClick={this.handleItemClick} items={items} height={200} />
  }

  render () {
    let className = cx(`dropdown`, this.props.className)
    let { value, children, trigger, direction, fluid, items, ...props } = this.props
    let { open } = this.state

    if (!trigger) {
      trigger = this.renderDefaultTrigger
    }

    let dropdownTrigger = trigger(value, this.handleTrigger)
    let dropdownMenuProps = {onItemClick: this.handleItemClick, fluid: fluid}
    let dropdownMenu = null

    if (children) {
      dropdownMenu = isFunction(children) ? children(this.handleItemClick) : React.cloneElement(children, dropdownMenuProps)
    } else {
      dropdownMenu = this.renderDefaultMenu(items)
    }

    return (
      <s.Container {...props} fluid={fluid} className={className}>
        <s.TriggerContainer fluid={fluid} onClick={(e) => e.stopPropagation()} className='trigger-container'>
          {dropdownTrigger}
        </s.TriggerContainer>
        <s.MenuContainer
          open={open}
          fluid={fluid}
          direction={direction}
          onClick={(e) => e.stopPropagation()}>
          {dropdownMenu}
        </s.MenuContainer>
      </s.Container>
    )
  }
}

export default Dropdown
