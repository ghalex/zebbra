import React from 'react'
import cx from 'classnames'
import { Title } from 'components'
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
          <Title size='normal'>
            {label}
            {required && <span>*</span>}
          </Title>
        )}
        {children}
      </StyledField>
    )
  }
}

export default Field
