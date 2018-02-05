import React from 'react'
import cx from 'classnames'
import Loader from 'components/atoms/Loader'
import { StyledButton } from './styles'

class Button extends React.Component {
  static displayName = 'Button'
  static defaultProps = {
    color: 'light'
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
