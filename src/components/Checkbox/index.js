import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { main } from 'zebbra/themes'
import { compose } from 'recompose'
import { withFallbackTheme, withVariant } from 'zebbra/hocs'
import { Icon } from 'zebbra/components'
import * as s from './styles'

/**
 * A **checkbox** allows a user to select a `true / false` value.
 */
class Checkbox extends React.Component {
  state = { checked: this.props.checked }

  static displayName = 'Checkbox'
  static defaultProps = {
    p: 0,
    m: 0,
    border: 1,
    borderRadius: 0,
    borderColor: 'grey',
    fontFamily: 'primary',
    fontSize: 0,
    color: 'grey',
    opacity: 0,
    bg: null,
    variant: null,
    checked: false
  }

  static propTypes = {
    /**
     * A checkbox can have different colors. <br/>
     * **Enum**: `primary`, `secondary`, `success`, `danger`, `white`, `black`, `grey`, `#FF0000`, ...
     **/
    color: PropTypes.string,
    /**
     * A checkbox can have different colors. <br/>
     * **Enum**: `primary`, `secondary`, `success`, `danger`, `white`, `black`, `grey`, `#FF0000`, ...
     **/
    borderColor: PropTypes.string,
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
    let props = this.props
    let { checked } = this.state
    let className = cx(`checkbox`, {checked: checked}, props.className)
    let checkedProps = {}

    if (checked) {
      checkedProps = { opacity: 1 }
      if (props.checkedProps) {
        checkedProps = { ...checkedProps, ...props.checkedProps }
      }
      props = { ...props, ...checkedProps }
    }

    return (
      <s.Checkbox
        {...props}
        checked={checked}
        hasChildren={!!props.children}
        className={className}
        onClick={this.handleClick}>
        <s.CheckboxIcon
          {...props}
          checked={checked}>
          <Icon name='check' color={props.color} fontSize={props.fontSize} />
        </s.CheckboxIcon>
        {props.children && <s.CheckboxLabel>{props.children}</s.CheckboxLabel>}
      </s.Checkbox>
    )
  }
}

export default compose(
  withFallbackTheme(main),
  withVariant('checkbox')
)(Checkbox)
