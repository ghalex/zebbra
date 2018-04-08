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
    textAlign: 'left',
    margin: undefined
  }
  static propTypes = {
    /** Render title as `h2`, `h3`, `h4` */
    as: PropTypes.string,
    /**
     * A title can have different colors. <br/>
     * **Enum**: `primary`, `secondary`, `success`, `danger`, `white`, `black`, `grey`, `#FF0000`, ...
     **/
    color: PropTypes.string,
    /**
     * A title can have different sizes. <br/>
     * **Enum**: `tiny`, `small`, `normal`, `medium`, `large`, `xlarge`, `huge`
     **/
    size: PropTypes.string,
    /** A title can have its font as thin */
    thin: PropTypes.bool,
    /** A title can have its font as strong */
    strong: PropTypes.bool,
    /** A title can be aligned. */
    textAlign: PropTypes.string,
    /** Set custom margin to title */
    margin: PropTypes.string
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
