import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { compose } from 'recompose'
import { main } from 'zebbra/themes'
import { Icon } from 'zebbra/components'
import { withVariant } from 'zebbra/hocs'
import { withTheme } from 'styled-components'
import { isString } from 'lodash'
import * as s from './styles'

/**
 * **Input** is a field used to get a response from a user.
 */
class Input extends React.Component {
  static displayName = 'Input'
  static defaultProps = {
    color: 'grey',
    bg: null,
    p: null,
    m: 0,
    border: 1,
    borderColor: 'greyLight',
    borderRadius: 3,
    boxShadow: 'lightInset',
    fontSize: 2,
    fontWeight: 300,
    placeholderColor: null,
    height: '2.2em',
    variant: null,
    fluid: false,
    type: 'text',
    placeholder: '',
    icon: null,
    onEnter: null,
    onChange: null,
    theme: main
  }
  static propTypes = {
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
    let props = { ...this.props, ...this.props.variantProps }
    let className = cx(`input`, this.props.className)
    let InputIcon = null

    if (props.icon) {
      if (isString(props.icon)) {
        InputIcon = <Icon color={props.color} fontSize={props.fontSize} name={props.icon} />
      } else {
        InputIcon = props.icon
      }
    }
    return (
      <s.InputContainer
        {...props}
        height={props.height}
        fluid={props.fluid}
        className={className}>
        {InputIcon}
        <s.Input
          {...props}
          hasIcon={props.icon !== null}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown} />
      </s.InputContainer>
    )
  }
}

export default compose(
  withTheme,
  withVariant('inputs', main)
)(Input)
