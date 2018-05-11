import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Icon, Button } from '@zebbra/atoms'
import { isFunction } from 'lodash'
import * as s from './styles'

class Dropdown extends React.Component {
  state = { value: this.props.value, open: false }
  static displayName = 'Dropdown'
  static defaultProps = {
    closeOnBlur: true,
    closeOnChange: false,
    inline: false,
    fluid: false,
    label: 'Please select',
    value: null
  }
  static propTypes = {
    closeOnBlur: PropTypes.bool,
    closeOnChange: PropTypes.bool,
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
    this.setState({ value: data })
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

  renderTrigger = (value, onTrigger) => {
    let { label, fluid } = this.props

    if (value) {
      if (value.label) {
        label = value.label
      } else {
        label = value.children
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
    let { children, trigger, fluid, ...props } = this.props
    let { value, open } = this.state

    if (!trigger) {
      trigger = this.renderTrigger
    }

    const dropdownTrigger = trigger(value, this.handleTrigger)
    const dropdownMenuProps = {onItemClick: this.handleItemClick, fluid: fluid}
    const dropdownMenu = isFunction(children) ? children(this.handleItemClick) : React.cloneElement(children, dropdownMenuProps)

    return (
      <s.Container {...props} className={className}>
        <s.TriggerContainer fluid={fluid} onClick={(e) => e.stopPropagation()}>
          {dropdownTrigger}
        </s.TriggerContainer>
        <s.MenuContainer open={open} onClick={(e) => e.stopPropagation()}>
          {dropdownMenu}
        </s.MenuContainer>
      </s.Container>
    )
  }
}

export default Dropdown
