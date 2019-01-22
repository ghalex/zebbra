import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import lodash from 'lodash'
import { Icon, Loader } from 'zebbra/components'
import { main } from 'zebbra/themes'
import { compose } from 'recompose'
import { withFallbackTheme, withVariant } from 'zebbra/hocs'
import { StyledButton } from './styles'

class Button extends React.Component {
  static displayName = 'Button'
  static defaultProps = {
    color: null,
    bg: null,
    p: '0 1em',
    m: 0,
    border: 1,
    borderColor: 'greyLight',
    borderRadius: 0,
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
    static: false
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

  renderLoading() {
    if (!this.props.loading) return null

    return (
      <div className="loader-container">
        <Loader size={this.props.size} color={this.props.color || 'black'} />
      </div>
    )
  }

  render() {
    let { icon, iconPosition, children, ...rest } = this.props
    let EnhancedButton = rest.href
      ? StyledButton.withComponent('a')
      : StyledButton
    let className = cx(
      'button',
      { 'icon-only': children === null || children === undefined },
      { 'icon-reverse': iconPosition === 'right' },
      rest.className
    )

    let btnChildren = [icon && <Icon key={0} name={icon} />, children]

    if (iconPosition === 'right') {
      btnChildren = lodash.reverse(btnChildren)
    }

    return (
      <EnhancedButton {...rest} className={className}>
        {btnChildren}
        {this.renderLoading()}
      </EnhancedButton>
    )
  }
}

export default compose(
  withFallbackTheme(main),
  withVariant('button')
)(Button)
