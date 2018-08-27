import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { main } from 'zebbra/themes'
import { compose } from 'recompose'
import { withFallbackTheme, withVariant } from 'zebbra/hocs'
import { StyledBox } from './styles'

class Box extends React.Component {
  static displayName = 'Box'
  static defaultProps = {
    color: null,
    bg: 'white',
    m: 0,
    p: '1em',
    boxShadow: 'light',
    border: 1,
    borderColor: 'greyUltraLight',
    borderRadius: 0,
    stacked: false,
    textAlign: 'left',
    fontFamily: 'primary',
    fontSize: null,
    flexDirection: 'column'
  }

  static propTypes = {
    /** A box can be stacked. */
    stacked: PropTypes.bool,
    /** Box theme */
    theme: PropTypes.object
  }

  render () {
    const className = cx(`box`, this.props.className)
    const { children, childrenProps, ...props } = this.props

    return (
      <StyledBox {...props} className={className}>
        {children}
      </StyledBox>
    )
  }
}

export default compose(
  withFallbackTheme(main),
  withVariant('box')
)(Box)
