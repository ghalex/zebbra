import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Icon } from '../index'
import * as s from './styles'

class Tag extends React.Component {
  static displayName = 'Tag'
  static defaultProps = {
    color: null,
    icon: null,
    size: 'normal',
    delete: false
  }

  static propTypes = {
    /**
     * A tag can have different colors. <br/>
     * **Enum**: `primary`, `secondary`, `success`, `danger`, `white`, `black`, `grey`, `#FF0000`, ...
     **/
    color: PropTypes.string,
    /**
     * A tag can have different sizes. <br/>
     * **Enum**: `tiny`, `small`, `normal`, `medium`, `large`, `xlarge`, `huge`
     **/
    size: PropTypes.string,
    /** A tag can have an icon. */
    icon: PropTypes.string,
    /** A tag can be rendered as delete icon. */
    delete: PropTypes.bool
  }

  render () {
    const className = cx(`tag`, this.props.className)
    const {icon, children, ...props} = this.props

    return (
      <s.Tag {...props} icon={icon} className={className}>
        {icon && <Icon key={0} name={icon} />}
        {children}
      </s.Tag>
    )
  }
}

export default Tag
