import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import lodash from 'lodash'
import { Icon, Loader } from '../index'
import * as s from './styles'

class Button extends React.Component {
  static displayName = 'Button'
  static defaultProps = {
    color: null,
    size: 'normal',
    loading: false,
    disabled: false,
    outlined: false,
    fluid: false,
    icon: null,
    iconPosition: 'left',
    static: false
  }

  static propTypes = {
    /**
     * A button can have different colors. <br/>
     * **Enum**: `primary`, `secondary`, `success`, `danger`, `white`, `black`, `grey`, `#FF0000`, ...
     **/
    color: PropTypes.string,
    /**
     * A button can have different sizes. <br/>
     * **Enum**: `tiny`, `small`, `normal`, `medium`, `large`, `xlarge`, `huge`
     **/
    size: PropTypes.string,
    /** A button can be shown as outlined. */
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
    const { icon, children, iconPosition, href, ...props } = this.props
    const Component = href ? s.Button.withComponent(s) : s.Button
    const className = cx(
      'button',
      {'icon-only': !this.props.children},
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
      <Component {...props} className={className}>
        {btnChildren}
        {props.loading && (
          <div className='loader-container'>
            <Loader size={props.size} color={props.color} inverted={!props.inverted && !props.outlined} />
          </div>
        )}
      </Component>
    )
  }
}

export default Button
