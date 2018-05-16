import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import moment from 'moment'
import { reverse } from 'lodash'
import { Group, Button } from '@zebbra/atoms'
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
    month: moment(this.props.value).month(),
    year: moment(this.props.value).year()
  }

  static displayName = 'DatePicker'
  static defaultProps = {
    startYear: 2000,
    hideIcon: false,
    hideMonths: false,
    size: 'small',
    value: new Date()
  }

  static propTypes = {
    /** Start year  */
    startYear: PropTypes.number,
    hideIcon: PropTypes.bool,
    hideMonths: PropTypes.bool,
    value: PropTypes.oneOfType([ PropTypes.instanceOf(Date), PropTypes.string ])
  }

  generateYears = () => {
    let year = moment().year()
    let { startYear } = this.props
    let result = []

    for (var i = startYear; i <= year; i++) {
      result.push({value: i, label: i})
    }

    return reverse(result)
  }

  handleChange = (month, year) => {
    this.setState({ month, year })

    if (this.props.onChange) {
      this.props.onChange(moment().year(year).month(month).startOf('month'))
    }
  }

  render () {
    let className = cx(`date-pick`, this.props.className)
    let { startYear, hideMonths, hideIcon, size, ...props } = this.props
    let years = this.generateYears()
    let { month, year } = this.state

    return (
      <s.DatePick {...props} className={className}>
        <Group size={size}>
          {!hideIcon && <Button icon='calendar-times-o' static color='primary' />}
          {!hideMonths && <Dropdown items={months} value={months[month]} closeOnChange onChange={d => this.handleChange(d.value, year)} />}
          <Dropdown items={years} value={{ label: year }} closeOnChange onChange={d => this.handleChange(month, d.value)} />
        </Group>
      </s.DatePick>
    )
  }
}

export default DatePicker
