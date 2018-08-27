import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { compose } from 'recompose'
import { withVariant } from 'zebbra/hocs'
import { removeMarginProps, removePaddingProps } from 'zebbra/utils'
import { main } from 'zebbra/themes'
import * as s from './styles'

/**
 * A **switch** allows a user to select a `true / false` value.
 */
class Switch extends React.Component {
  state = { checked: this.props.checked }

  static displayName = 'Switch'
  static defaultProps = {
    color: null,
    bg: 'grey',
    bgChecked: 'blackLight',
    bgThumb: 'white',
    size: '3em',
    border: null,
    borderColor: null,
    thumbSize: '1.5em',
    boxShadow: 'hard',
    p: 1,
    m: 0,
    borderRadius: 12,
    fontFamily: 'primary',
    fontSize: 1,
    checked: false,
    theme: main
  }

  static propTypes = {
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

    checked = !checked
    this.setState({ checked })

    if (onChange) {
      onChange(evt, checked)
    }
  }

  render () {
    const { children, ...props } = this.props
    const { checked } = this.state
    const className = cx(`switch`, props.className)

    return (
      <s.Switch {...removePaddingProps(props)} checked={checked} className={className}>
        <s.SwitchThumb {...removeMarginProps(props)} checked={checked} onClick={this.handleClick}><span /></s.SwitchThumb>
        {children && <s.SwitchLabel>{children}</s.SwitchLabel>}
      </s.Switch>
    )
  }
}

export default compose(
  withVariant('switches', main)
)(Switch)
