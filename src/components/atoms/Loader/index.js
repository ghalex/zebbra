import React from 'react'
import cx from 'classnames'
import {
  StyledLoaderContainer,
  StyledLoader,
  StyledLoaderShadow
} from './styles'

class Loader extends React.Component {
  static displayName = 'Loader'
  static defaultProps = {
  }

  render () {
    const className = cx(`loader`, this.props.className)
    const { color, size, ...props } = this.props
    return (
      <StyledLoaderContainer size={size} {...props}>
        <StyledLoaderShadow size={size} />
        <StyledLoader color={color} size={size} className={className} />
      </StyledLoaderContainer>
    )
  }
}

export default Loader
