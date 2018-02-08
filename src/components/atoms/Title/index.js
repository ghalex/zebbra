import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { StyledTitle } from './styles'

class Title extends React.Component {
  static displayName = 'Title'
  static defaultProps = {
    as: 'h3',
    size: 'normal',
    thin: false,
    strong: false,
    textAlign: 'left'
  }
  static propTypes = {
    /**
     * An element type to render
     * [ h1, h2, h3, ... ]
     */
    as: PropTypes.string,
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
    /** A title can have its font as thin */
    thin: PropTypes.bool,
    /** A title can have its font as strong */
    strong: PropTypes.bool,
    /** Align header content. */
    textAlign: PropTypes.string
  }
  render () {
    const { as, children, ...props } = this.props
    const className = cx(`title`, this.props.className)
    const Component = StyledTitle.withComponent(as)

    return (
      <Component {...props} className={className}>{children}</Component>
    )
  }
}

export default Title
