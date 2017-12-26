import * as React from 'react'
import * as cx from 'classnames'
import { StyledInput } from './styles'
import { InputProps } from './types'

class Input extends React.Component<InputProps, any> {
  static displayName = 'Input'
  static defaultProps = {
    type: 'text',
    placeholder: '',
    color: 'grey',
    size: 'normal'
  }

  handleKeyDown = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    const { onKeyDown, onEnter } = this.props

    if (evt.keyCode === 13 && onEnter) {
      onEnter(evt)
    }

    if (onKeyDown) {
      onKeyDown(evt)
    }
  }

  render () {
    const { type, readonly, placeholder, ...props } = this.props
    const className = cx(`input`, props.className)

    return (
      <StyledInput {...props} className={className}>
        <input type={type} placeholder={placeholder} onKeyDown={this.handleKeyDown} />
      </StyledInput>
    )
  }
}

export default Input