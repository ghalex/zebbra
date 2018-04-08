import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import * as s from './styles'

/**
 * Icon component uses **FontAwesome** icons.
 * ```html
 * <link rel='stylesheet' type='text/css' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' />
 * ```
 *
 * For a list of all icons check **FontAwesome** [webiste](https://fontawesome.com/v4.7.0/icons/).
 */
class Icon extends React.Component {
  static displayName = 'Icon'
  static defaultProps = {
    size: 'normal',
    inverted: false,
    circular: false,
    shadow: false
  }

  static propTypes = {
    /** FontAwesome icon name */
    name: PropTypes.string.isRequired,
    /**
     * A icon can have different colors. <br/>
     * **Enum**: `primary`, `secondary`, `success`, `danger`, `white`, `black`, `grey`, `#FF0000`, ...
     **/
    color: PropTypes.string,
    /**
     * A icon can have different sizes. <br/>
     * **Enum**: `tiny`, `small`, `normal`, `medium`, `large`, `xlarge`, `huge`
     **/
    size: PropTypes.string,
    /** A icon can have it's color inverted. */
    inverted: PropTypes.bool,
    /** Icon can formatted to appear circular. */
    circular: PropTypes.bool,
    /** An icon can have shadow. */
    shadow: PropTypes.bool
  }

  render () {
    const className = cx(`icon`, `fa fa-${this.props.name}`, this.props.className)
    return (
      <s.Icon {...this.props} className={className} />
    )
  }
}

export default Icon
