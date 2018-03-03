import React from 'react'
import cx from 'classnames'
import { StyledTextarea } from './styles'

class Textarea extends React.Component {
  state = { checked: this.props.checked }

  static displayName = 'Textarea'
  static defaultProps = {
    rows: 5,
    size: 'normal',
    color: null
  }

  render () {
    const className = cx(`textarea`, this.props.className)
    const { children, ...props } = this.props

    return (
      <StyledTextarea {...props} className={className}>
        {children}
      </StyledTextarea>
    )
  }
}

export default Textarea
