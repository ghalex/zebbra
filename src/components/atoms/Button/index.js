import React from 'react'
import cx from 'classnames'
import Loader from 'components/atoms/Loader'
import { StyledButton } from './styles'

class Button extends React.Component {
  static displayName = 'Button'
  static defaultProps = {
  }

  render () {
    const { children, ...props } = this.props
    const className = cx('button', this.props.className)

    return (
      <StyledButton {...props} className={className}>
        {children}
        {props.isLoading && (
          <div className='loader-container'>
            <Loader size={props.size} color={props.color} />
          </div>
        )}
      </StyledButton>
    )
  }
}

export default Button
