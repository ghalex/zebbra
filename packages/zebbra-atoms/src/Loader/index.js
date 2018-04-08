import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import * as s from './styles'

/**
 * A **Loader** alerts a user to wait for an activity to complete.
 */
class Loader extends React.Component {
  static displayName = 'Loader'
  static defaultProps = {
    size: 'normal'
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
    const { children, ...props } = this.props
    return (
      <s.Loader {...props} className={className}>
        <s.LoaderContainer {...props} >
          <s.LoaderShadow {...props} />
          <s.LoaderCircle {...props} />
        </s.LoaderContainer>
        {children && <div>{children}</div>}
      </s.Loader>
    )
  }
}

export default Loader
