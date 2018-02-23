import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import lodash from 'lodash'
import { Icon, Loader } from 'components/atoms'
import { StyledButton } from './styles'

class Button extends React.Component {
  static displayName = 'Button'
  static defaultProps = {
    color: null,
    size: 'normal',
    loading: false,
    icon: null,
    iconPosition: 'left'
  }

  static propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
    loading: PropTypes.bool,
    icon: PropTypes.string,
    iconPosition: PropTypes.string
  }

  render () {
    const { icon, children, iconPosition, ...props } = this.props
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
      <StyledButton {...props} className={className}>
        {btnChildren}
        {props.loading && (
          <div className='loader-container'>
            <Loader size={props.size} color={props.color} inverted />
          </div>
        )}
      </StyledButton>
    )
  }
}

export default Button
