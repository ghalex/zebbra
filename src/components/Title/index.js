import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { main } from 'zebbra/themes'
import { compose } from 'recompose'
import { withFallbackTheme, withVariant } from 'zebbra/hocs'
import { StyledTitle } from './styles'

class Title extends React.Component {
  static displayName = 'Title'
  static defaultProps = {
    as: 'h3',
    p: 0,
    mb: 3,
    color: null,
    bg: null,
    fontFamily: 'primary',
    fontSize: 4,
    dislay: 'block',
    textAlign: 'left',
    thin: false,
    strong: false
  }
  static propTypes = {
    /** Render title as `h2`, `h3`, `h4` */
    as: PropTypes.string,
    /**
     * A title an have different colors. <br/>
     * **Enum**: `primary`, `secondary`, `success`, `danger`, `white`, `black`, `grey`, `#FF0000`, ...
     **/
    color: PropTypes.string,
    /** A title can have its font as thin */
    thin: PropTypes.bool,
    /** A title can have its font as strong */
    strong: PropTypes.bool,
    /** A title can be aligned. */
    textAlign: PropTypes.string,
    /** Set custom margin to title */
    m: PropTypes.string
  }
  render () {
    let { as, children, ...props } = this.props
    let className = cx(`title`, this.props.className)
    let Component = StyledTitle.withComponent(as)

    if (props.subtitle) {
      props = {...props, ...{ mt: '-1.35em', thin: true, fontSize: props.fontSize - 1 }}
    }

    return (
      <Component {...props} className={className}>{children}</Component>
    )
  }
}

export default compose(
  withFallbackTheme(main),
  withVariant('title')
)(Title)
