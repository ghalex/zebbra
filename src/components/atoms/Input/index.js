import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { StyledInput } from './styles'

class Input extends React.Component {
  static displayName = 'Input'
  static defaultProps = {
    type: 'text',
    placeholder: '',
    size: 'normal'
  }
  static propTypes = {
    size: PropTypes.string,
    onChange: PropTypes.func,
    onEnter: PropTypes.func,
    placeholder: PropTypes.string,
    type: PropTypes.string
  }

  handleKeyDown = evt => {
    const { onKeyDown, onEnter } = this.props

    if (evt.keyCode === 13 && onEnter) {
      onEnter(evt, evt.target.value)
    }

    if (onKeyDown) {
      onKeyDown(evt, evt.target.value)
    }
  }

  handleChange = evt => {
    const { onChange } = this.props

    if (onChange) {
      onChange(evt, evt.target.value)
    }
  }

  render () {
    const { type, readonly, placeholder, onChange, onKeyDown, ...props } = this.props
    const className = cx(`input`, this.props.className)

    return (
      <StyledInput className={className}>
        <input
          {...props}
          type={type}
          placeholder={placeholder}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown} />
      </StyledInput>
    )
  }
}

export default Input
