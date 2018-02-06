import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Icon, Loader } from 'components/atoms'
import { StyledButton } from './styles'

class Button extends React.Component {
  static displayName = 'Button'
  static defaultProps = {
    color: 'light',
    size: 'normal',
    loading: false,
    icon: null
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
    icon: PropTypes.string
  }

  render () {
    const { icon, children, ...props } = this.props
    const className = cx('button', {'only-icon': !this.props.children}, this.props.className)

    return (
      <StyledButton {...props} className={className}>
        {icon && <Icon name={icon} />}
        {children}
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
