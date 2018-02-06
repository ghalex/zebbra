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
  }
  static propTypes = {
    /**
     * A loader can have different colors.
     * [ primary, secondary, success, danger, white, black, grey, #FF0000, ... ]
     */
    color: PropTypes.string,
    /**
     * A loader can have different sizes.
     * [ tiny, small, normal, medium, large, xlarge, huge ]
     */
    size: PropTypes.string,
    /** A loader can have its colors inverted  */
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
