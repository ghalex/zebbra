import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { StyledText } from './styles'

class Text extends React.Component {
  static displayName = 'Text'
  static defaultProps = {
    size: 'normal',
    thin: false,
    strong: false,
    padding: '0',
    inline: false,
    textAlign: 'left'
  }
  static propTypes = {
    /**
     * A text can have different colors. <br/>
     * **Enum**: `primary`, `secondary`, `success`, `danger`, `white`, `black`, `grey`, `#FF0000`, ...
     **/
    color: PropTypes.string,
    /**
     * A text can have different sizes. <br/>
     * **Enum**: `tiny`, `small`, `normal`, `medium`, `large`, `xlarge`, `huge`
     **/
    size: PropTypes.string,
    /** A text can have its font as thin */
    thin: PropTypes.bool,
    /** A text can have its font as strong */
    strong: PropTypes.bool,
    /** A text can be aligned. */
    textAlign: PropTypes.string,
    /** Set custom padding to text. **Ex.** 5px 0 0 5px */
    padding: PropTypes.string
  }

  render () {
    const { as, children, ...props } = this.props
    const className = cx(`text`, this.props.className)

    return (
      <StyledText {...props} className={className}>{children}</StyledText>
    )
  }
}

export default Text
