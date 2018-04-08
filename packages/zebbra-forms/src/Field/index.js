import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { StyledField } from './styles'

/**
 * A **Field** is used to build a form.
 */
class Field extends React.Component {
  static displayName = 'Field'
  static defaultProps = {
    align: 'normal',
    label: null,
    required: false
  }

  static propTypes = {
    /** Align field children */
    align: PropTypes.string,
    /** A field can have a label */
    label: PropTypes.string,
    /** It true it will show a red asterix */
    required: PropTypes.bool
  }

  render () {
    const className = cx(`field`, this.props.className)
    const { label, required, children, ...props } = this.props

    return (
      <StyledField {...props} className={className}>
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

export default Field
