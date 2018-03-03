import React from 'react'
import cx from 'classnames'
import Icon from 'components/atoms/Icon'
import * as s from './styles'

class Checkbox extends React.Component {
  state = { checked: this.props.checked }

  static displayName = 'Checkbox'
  static defaultProps = {
    size: 'normal'
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
