import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Loader from 'components/atoms/Loader'
import { StyledButton } from './styles'

class Button extends React.Component {
  static displayName = 'Button'
  static defaultProps = {
    color: 'light',
    size: 'normal',
    loading: false
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
    /** A button can show a loading indicator. */
    loading: PropTypes.bool
  }

  render () {
    const { children, ...props } = this.props
    const className = cx('button', this.props.className)

    return (
      <StyledButton {...props} className={className}>
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
