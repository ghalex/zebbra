import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Icon } from '@zebbra/atoms'
import * as s from './styles'

/**
 * **Input** is a field used to get a response from a user.
 */
class Input extends React.Component {
  static displayName = 'Input'
  static defaultProps = {
    type: 'text',
    placeholder: '',
    size: 'normal',
    icon: null,
    onEnter: null,
    onChange: null
  }
  static propTypes = {
    /**
     * A input can have different sizes. <br/>
     * **Enum**: `tiny`, `small`, `normal`, `medium`, `large`, `xlarge`, `huge`
     **/
    size: PropTypes.string,
    /** `onChange(event: SyntheticEvent, data: object)` */
    onChange: PropTypes.func,
    /** `onEnter(event: SyntheticEvent, data: object)` */
    onEnter: PropTypes.func,
    /**
     * Input type. <br/>
     * **Enum**: `text`, `email`, `password`, `etc..`
     */
    type: PropTypes.string,
    /** A input can have a placeholder. */
    placeholder: PropTypes.string,
    /** A input can have an icon */
    icon: PropTypes.string
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
    const { icon, size, color, onEnter, onChange, onKeyDown, ...props } = this.props
    const className = cx(`input`, this.props.className)

    return (
      <s.Input size={size} color={color} hasIcon={!!icon} className={className}>
        {icon && <Icon size={size} color={color} name={icon} />}
        <input
          {...props}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown} />
      </s.Input>
    )
  }
}

/** @component */
export default Input
