import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { compose } from 'recompose'
import { main } from 'zebbra/themes'
import { Icon } from 'zebbra/components'
import { withVariant } from 'zebbra/hocs'
import { withTheme } from 'styled-components'
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
    borderRadius: 3,
    borderColor: 'grey',
    fontFamily: 'primary',
    fontSize: 0,
    color: 'grey',
    bg: null,
    variant: null,
    checked: false,
    theme: main
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
    const props = { ...this.props, ...this.props.variantProps }
    const { checked } = this.state
    const className = cx(`checkbox`, {checked: checked}, props.className)

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
  withTheme,
  withVariant('checkboxes', main)
)(Checkbox)
