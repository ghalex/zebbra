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
    /**
     * A button can have different colors.
     * [ primary, secondary, success, danger, white, black, grey, #FF0000, ... ]
     */
    color: PropTypes.string,
    /**
     * A button can have different sizes.
     * [ tiny, small, normal, medium, large, xlarge, huge ]
     */
    size: PropTypes.string,
    /**
     * A button can show a loading indicator.
     */
    loading: PropTypes.bool,
    /**
     * A button can have an icon
     */
    icon: PropTypes.string,
    /**
     * A button can have icon left or right
     */
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
