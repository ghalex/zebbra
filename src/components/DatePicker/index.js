import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { reverse } from 'lodash'
import { Group, Button } from 'zebbra/components'
import { removeSpaceProps } from 'zebbra/utils'
import { main } from 'zebbra/themes'
import { compose } from 'recompose'
import { withFallbackTheme, withVariant } from 'zebbra/hocs'
import { Dropdown } from '../'
import * as s from './styles'

const months = [
  { value: 0, label: 'Jan' },
  { value: 1, label: 'Feb' },
  { value: 2, label: 'Mar' },
  { value: 3, label: 'Apr' },
  { value: 4, label: 'May' },
  { value: 5, label: 'June' },
  { value: 6, label: 'July' },
  { value: 7, label: 'Aug' },
  { value: 8, label: 'Sep' },
  { value: 9, label: 'Oct' },
  { value: 10, label: 'Nov' },
  { value: 11, label: 'Dec' }
]

/**
 * A **DatePick** is used to select a date.
 */
class DatePicker extends React.Component {
  state = {
    month: new Date().getMonth(),
    year: new Date().getFullYear()
  }

  static displayName = 'DatePicker'
  static defaultProps = {
    m: 0,
    p: 0,
    noBorders: true,
    startYear: 2000,
    hideIcon: false,
    hideMonths: false,
    fontSize: 0,
    value: new Date()
  }

  static propTypes = {
    /** Start year  */
    startYear: PropTypes.number,
    hideIcon: PropTypes.bool,
    hideMonths: PropTypes.bool,
    value: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string])
  }

  generateYears = () => {
    let year = new Date().getFullYear()
    let { startYear } = this.props
    let result = []

    for (var i = startYear; i <= year; i++) {
      result.push({ value: i, label: i })
    }

    return reverse(result)
  }

  handleChange = (month, year) => {
    this.setState({ month, year })

    if (this.props.onChange) {
      this.props.onChange(new Date(year, month, 1))
    }
  }

  render () {
    let className = cx(`date-pick`, this.props.className)
    let { startYear, hideMonths, hideIcon, fontSize, noBorders, children, ...rest } = this.props
    let childProps = removeSpaceProps(rest)
    let years = this.generateYears()
    let { month, year } = this.state

    return (
      <s.DatePick {...rest} className={className}>
        <Group fontSize={fontSize} noBorders={noBorders}>
          {!hideIcon &&
            <Button {...childProps} icon='calendar-times-o' static />}
          {!hideMonths &&
            <Dropdown
              {...childProps}
              items={months}
              value={months[month]}
              maxHeight={240}
              closeOnChange
              onChange={d => this.handleChange(d.value, year)}
            />}
          <Dropdown
            {...childProps}
            items={years}
            value={{ label: year }}
            maxHeight={240}
            closeOnChange
            onChange={d => this.handleChange(month, d.value)}
          />
        </Group>
      </s.DatePick>
    )
  }
}

export default compose(
  withFallbackTheme(main),
  withVariant('datepicker')
)(DatePicker)
