import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { main } from 'zebbra/themes'
import { compose } from 'recompose'
import { withFallbackTheme } from 'zebbra/hocs'
import { StyledFlex } from './styles'

class Flex extends React.Component {
  static displayName = 'Flex'
  static defaultProps = {
    p: null,
    m: null
  }
  static propTypes = {
    p: PropTypes.string,
    m: PropTypes.string
  }

  render () {
    const { children, ...rest } = this.props
    const className = cx(`flex`, this.props.className)

    return (
      <StyledFlex {...rest} className={className}>{children}</StyledFlex>
    )
  }
}

export default compose(
  withFallbackTheme(main)
)(Flex)
