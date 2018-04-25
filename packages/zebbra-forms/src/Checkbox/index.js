import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Icon } from '@zebbra/atoms'
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
    checked: PropTypes.bool,
    /**
     * Called on change
     *
     * @param {object} evt
     * @param {bool} checked
     */
    onChange: PropTypes.func
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.checked !== this.state.checked) {
      this.setState({ checked: nextProps.checked })
    }
  }

  handleClick = (evt) => {
    let { onChange } = this.props
    let { checked } = this.state

    this.setState({ checked: !checked })

    if (onChange) {
      onChange(evt, !checked)
    }
  }

  render () {
    const { children, ...props } = this.props
    const { checked } = this.state
    const className = cx(`checkbox`, {checked: checked}, props.className)

    return (
      <s.Checkbox {...props} checked={checked} className={className}>
        <div onClick={this.handleClick}>
          {checked && <Icon size={props.size} name='check' color={props.color} inverted={checked} />}
        </div>
        <label>{children}</label>
      </s.Checkbox>
    )
  }
}

export default Checkbox
