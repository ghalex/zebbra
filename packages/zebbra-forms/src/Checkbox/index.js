import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Icon } from '@coderbox/atoms'
import * as s from './styles'

/**
 * A **checkbox** allows a user to select a `true / false` value.
 */
class Checkbox extends React.Component {
  state = { checked: this.props.checked }

  static displayName = 'Checkbox'
  static defaultProps = {
    color: null,
    size: 'normal',
    checked: false
  }

  static propTypes = {
    /**
     * A checkbox can have different colors. <br/>
     * **Enum**: `primary`, `secondary`, `success`, `danger`, `white`, `black`, `grey`, `#FF0000`, ...
     **/
    color: PropTypes.string,
    /**
     * A checkbox can have different sizes. <br/>
     * **Enum**: `tiny`, `small`, `normal`, `medium`, `large`, `xlarge`, `huge`
     **/
    size: PropTypes.string,
    /** Is true if checkbox is checked. */
    checked: PropTypes.bool
  }

  handleClick = (evt) => {
    let { onChange } = this.props
    let { checked } = this.state

    checked = !checked
    this.setState({ checked })

    if (onChange) {
      onChange(evt, checked)
    }
  }

  render () {
    const { children, ...props } = this.props
    const { checked } = this.state
    const className = cx(`checkbox`, props.className)

    return (
      <s.Checkbox {...props} className={className}>
        <div onClick={this.handleClick}>{checked && <Icon size={props.size} name='check' />}</div>
        <label>{children}</label>
      </s.Checkbox>
    )
  }
}

export default Checkbox
