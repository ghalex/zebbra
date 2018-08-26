import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import lodash from 'lodash'
import { compose } from 'recompose'
import { main } from 'zebbra/themes'
import { withVariant } from 'zebbra/hocs'
import { Icon, Loader } from 'zebbra/components'
import * as s from './styles'

class Button extends React.Component {
  static displayName = 'Button'
  static defaultProps = {
    color: null,
    bg: null,
    p: '0 1em',
    m: 0,
    border: 1,
    borderColor: 'greyLight',
    borderRadius: 3,
    boxShadow: null,
    fontFamily: 'primary',
    fontWeight: 400,
    fontSize: null,
    height: '2.2em',
    variant: null,
    loading: false,
    disabled: false,
    outlined: false,
    fluid: false,
    icon: null,
    iconPosition: 'left',
    static: false,
    theme: main
  }

  static propTypes = {
    outlined: PropTypes.bool,
    /** A button can show a loading indicator. */
    loading: PropTypes.bool,
    /** A button can take the width of its container. */
    fluid: PropTypes.bool,
    /** Use static to disable hover */
    static: PropTypes.bool,
    /** A button can be disabled. */
    disabled: PropTypes.bool,
    /** A button can have an icon */
    icon: PropTypes.string,
    /** A button can show icon left or right */
    iconPosition: PropTypes.string,
    /** A button can be render as A tag */
    href: PropTypes.string
  }

  render () {
    let props = { ...this.props, ...this.props.variantProps }
    let { icon, children, iconPosition, ...rest } = props
    let Component = props.href ? s.Button.withComponent('a') : s.Button
    let className = cx(
      'button',
      {'icon-only': (this.props.children === null || this.props.children === undefined)},
      {'icon-reverse': iconPosition === 'right'},
      this.props.className
    )

    let btnChildren = [
      icon && <Icon key={0} name={icon} />,
      children
    ]

    if (iconPosition === 'right') {
      btnChildren = lodash.reverse(btnChildren)
    }

    return (
      <Component
        {...rest}
        className={className}>
        {btnChildren}
        {props.loading && (
          <div className='loader-container'>
            <Loader size={props.size} color={props.color || 'black'} />
          </div>
        )}
      </Component>
    )
  }
}

export default compose(
  withVariant('buttons', main)
)(Button)