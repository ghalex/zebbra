import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Icon, Button } from '@zebbra/atoms'
import { isFunction } from 'lodash'
import * as s from './styles'

class Dropdown extends React.Component {
  state = { item: null, open: false }
  static displayName = 'Dropdown'
  static defaultProps = {
    closeOnBlur: true,
    closeOnChange: false,
    inline: false,
    fluid: false,
    direction: 'left',
    label: 'Please select'
  }
  static propTypes = {
    closeOnBlur: PropTypes.bool,
    closeOnChange: PropTypes.bool,
    direction: PropTypes.oneOf(['left', 'right']),
    label: PropTypes.string,
    fluid: PropTypes.bool
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
    this.setState({ item: data })
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

  renderTrigger = (item, onTrigger) => {
    let { label, fluid } = this.props

    if (item) {
      if (item.label) {
        label = item.label
      } else {
        label = item.children
      }
    }

    return (
      <s.Trigger fluid={fluid} onClick={onTrigger}>
        <Button fluid={fluid}>
          {label}
          <Icon color='grey' name='caret-down' />
        </Button>
      </s.Trigger>
    )
  }

  render () {
    let className = cx(`dropdown`, this.props.className)
    let { children, trigger, direction, fluid, ...props } = this.props
    let { item, open } = this.state

    if (!trigger) {
      trigger = this.renderTrigger
    }

    const dropdownTrigger = trigger(item, this.handleTrigger)
    const dropdownMenuProps = {onItemClick: this.handleItemClick, fluid: fluid}
    const dropdownMenu = isFunction(children) ? children(this.handleItemClick) : React.cloneElement(children, dropdownMenuProps)

    return (
      <s.Container {...props} fluid={fluid} className={className}>
        <s.TriggerContainer fluid={fluid} onClick={(e) => e.stopPropagation()}>
          {dropdownTrigger}
        </s.TriggerContainer>
        <s.MenuContainer open={open} fluid={fluid} direction={direction} onClick={(e) => e.stopPropagation()}>
          {dropdownMenu}
        </s.MenuContainer>
      </s.Container>
    )
  }
}

export default Dropdown
