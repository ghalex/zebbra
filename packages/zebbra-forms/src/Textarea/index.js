import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { StyledTextarea } from './styles'

class Textarea extends React.Component {
  state = { checked: this.props.checked }

  static displayName = 'Textarea'
  static defaultProps = {
    color: null,
    rows: 5,
    size: 'normal'
  }

  static propTypes = {
    /**
     * A textarea can have different colors. <br/>
     * **Enum**: `primary`, `secondary`, `success`, `danger`, `white`, `black`, `grey`, `#FF0000`, ...
     **/
    color: PropTypes.string,
    /**
     * A textarea can have different sizes. <br/>
     * **Enum**: `tiny`, `small`, `normal`, `medium`, `large`, `xlarge`, `huge`
     **/
    size: PropTypes.string,
    rows: PropTypes.number
  }

  render () {
    const className = cx(`textarea`, this.props.className)
    const { children, ...props } = this.props

    return (
      <StyledTextarea {...props} className={className}>
        {children}
      </StyledTextarea>
    )
  }
}

export default Textarea
