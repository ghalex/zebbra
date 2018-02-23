import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import {
  StyledLoader,
  StyledLoaderContainer,
  StyledLoaderCircle,
  StyledLoaderShadow
} from './styles'

class Loader extends React.Component {
  static displayName = 'Loader'
  static defaultProps = {
    size: 'normal'
  }
  static propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
    inverted: PropTypes.bool
  }

  render () {
    const className = cx(`loader`, this.props.className)
    const { children, ...props } = this.props
    return (
      <StyledLoader {...props} className={className}>
        <StyledLoaderContainer {...props} >
          <StyledLoaderShadow {...props} />
          <StyledLoaderCircle {...props} />
        </StyledLoaderContainer>
        {children && <div>{children}</div>}
      </StyledLoader>
    )
  }
}

export default Loader
