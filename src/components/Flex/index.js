import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { main } from 'zebbra/themes'
import { StyledFlex } from './styles'

class Flex extends React.Component {
  static displayName = 'Flex'
  static defaultProps = {
    p: null,
    m: null,
    theme: main
  }
  static propTypes = {
    p: PropTypes.string,
    m: PropTypes.string
  }

  render () {
    const { children, ...props } = this.props
    const className = cx(`flex`, this.props.className)

    return (
      <StyledFlex {...props} className={className}>{children}</StyledFlex>
    )
  }
}

export default Flex
