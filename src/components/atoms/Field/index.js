import React from 'react'
import cx from 'classnames'
import { StyledField } from './styles'

class Field extends React.Component {
  static displayName = 'Filed'
  static defaultProps = {
    align: 'normal'
  }

  static propTypes = {
  }

  render () {
    const className = cx(`field`, this.props.className)
    const { label, required, children, ...props } = this.props

    return (
      <StyledField {...props} className={className}>
        {label && (
          <label>
            {label}
            {required && <span>*</span>}
          </label>
        )}
        <div>
          {children}
        </div>
      </StyledField>
    )
  }
}

export default Field
