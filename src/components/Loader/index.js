import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { main } from 'zebbra/themes'
import { compose } from 'recompose'
import { withFallbackTheme, withVariant } from 'zebbra/hocs'
import * as s from './styles'

/**
 * A **Loader** alerts a user to wait for an activity to complete.
 */
class Loader extends React.Component {
  static displayName = 'Loader'
  static defaultProps = {
    size: '1.125em',
    fontFamily: 'primary',
    fontSize: 2,
    p: null,
    m: 0,
    borderSize: 3
  }

  static propTypes = {
    /**
     * A loader can have different colors. <br/>
     * **Enum**: `primary`, `secondary`, `success`, `danger`, `white`, `black`, `grey`, `#FF0000`, ...
     **/
    color: PropTypes.string,
    /**
     * A loader can have different sizes. <br/>
     * **Enum**: `tiny`, `small`, `normal`, `medium`, `large`, `xlarge`, `huge`
     **/
    size: PropTypes.string,
    /** A loader can have it's color inverted */
    inverted: PropTypes.bool,
    /** A loader can display it's children **vertical**. */
    vertical: PropTypes.bool
  }

  render () {
    const className = cx(`loader`, this.props.className)
    const { children, ...rest } = this.props

    return (
      <s.Loader {...rest} className={className}>
        <s.LoaderContainer {...rest} >
          <s.LoaderShadow {...rest} />
          <s.LoaderCircle {...rest} />
        </s.LoaderContainer>
        {children && <div>{children}</div>}
      </s.Loader>
    )
  }
}

export default compose(
  withFallbackTheme(main),
  withVariant('loader')
)(Loader)
