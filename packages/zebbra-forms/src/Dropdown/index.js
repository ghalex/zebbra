import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import * as s from './styles'

class Dropdown extends React.Component {
  state = { item: null, open: false }
  static displayName = 'Dropdown'
  static defaultProps = {
    closeOnBlur: true,
    closeOnChange: false
  }
  static propTypes = {
    closeOnBlur: PropTypes.bool,
    closeOnChange: PropTypes.bool
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

  handleItemClick = (index, data) => {
    this.setState({ item: data })
    if (this.props.closeOnChange) {
      this.close()
    }
  }

  handleTrigger = () => {
    this.toggle()
  }

  render () {
    const className = cx(`dropdown`, this.props.className)
    const { menu, trigger, ...props } = this.props
    const { item, open } = this.state

    const dropdownTrigger = trigger(item, this.handleTrigger)
    const dropdownMenu = menu(this.handleItemClick)

    return (
      <s.Container {...props} className={className}>
        <s.TriggerContainer onClick={(e) => e.stopPropagation()}>
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
