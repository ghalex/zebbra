import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { main } from 'zebbra/themes'
import { compose } from 'recompose'
import { withFallbackTheme, withVariant } from 'zebbra/hocs'
import { StyledText } from './styles'

class Text extends React.Component {
  static displayName = 'Text'
  static defaultProps = {
    as: 'p',
    p: null,
    m: null,
    color: null,
    bg: null,
    dislay: 'block',
    textAlign: 'left',
    thin: false,
    strong: false,
    fontFamily: 'primary'
  }
  static propTypes = {
    /**
     * A text can have different colors. <br/>
     * **Enum**: `primary`, `secondary`, `success`, `danger`, `white`, `black`, `grey`, `#FF0000`, ...
     **/
    color: PropTypes.string,
    /** A text can have its font as thin */
    thin: PropTypes.bool,
    /** A text can have its font as strong */
    strong: PropTypes.bool,
    /** A text can be aligned. */
    textAlign: PropTypes.string
  }

  render () {
    const { as, children, ...rest } = this.props
    const className = cx(`text`, this.props.className)
    const Component = StyledText.withComponent(as)
    return (
      <Component {...rest} className={className}>{children}</Component>
    )
  }
}

export default compose(
  withFallbackTheme(main),
  withVariant('text')
)(Text)
