import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { main } from 'zebbra/themes'
import { compose } from 'recompose'
import { withFallbackTheme } from 'zebbra/hocs'
import { StyledField } from './styles'

/**
 * A **Field** is used to build a form.
 */
class Field extends React.Component {
  static displayName = 'Field'
  static defaultProps = {
    fontFamily: 'primary',
    alignItems: 'normal',
    label: null,
    required: false
  }

  static propTypes = {
    /** Align field children */
    alignItems: PropTypes.string,
    /** A field can have a label */
    label: PropTypes.string,
    /** It true it will show a red asterix */
    required: PropTypes.bool
  }

  render () {
    const className = cx(`field`, this.props.className)
    const { label, required, children, ...rest } = this.props

    return (
      <StyledField {...rest} className={className}>
        {label && (
          <label>
            {label}
            {required && <span>*</span>}
          </label>
        )}
        <div>
          {children}
        </div>
      </StyledField>
    )
  }
}

export default compose(
  withFallbackTheme(main)
)(Field)
