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
    /**
     * A button can have different sizes.
     * [ tiny, small, normal, medium, large, xlarge, huge ]
     */
    size: PropTypes.string,
    /**
     * Called on change.
     * onChange(event: SyntheticEvent, data: object)
     */
    onChange: PropTypes.func,
    /**
     * Called on keydown with code 13.
     * onEnter(event: SyntheticEvent, data: object)
     */
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
      <StyledInput {...props} className={className}>
        <input
          type={type}
          placeholder={placeholder}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown} />
      </StyledInput>
    )
  }
}

export default Input
