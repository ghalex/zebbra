import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { main } from 'zebbra/themes'
import { StyledTextarea } from './styles'

class Textarea extends React.Component {
  state = { checked: this.props.checked }

  static displayName = 'Textarea'
  static defaultProps = {
    color: 'grey',
    bg: null,
    p: null,
    m: 0,
    border: 1,
    borderColor: 'greyLight',
    borderRadius: 0,
    boxShadow: 'lightInset',
    fontSize: 2,
    fontWeight: 300,
    placeholderColor: null,
    rows: 5,
    theme: main
  }

  static propTypes = {
    /**
     * A textarea can have different colors. <br/>
     * **Enum**: `primary`, `secondary`, `success`, `danger`, `white`, `black`, `grey`, `#FF0000`, ...
     **/
    color: PropTypes.string,
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
