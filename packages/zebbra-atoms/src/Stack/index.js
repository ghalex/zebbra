import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import * as s from './styles'

class Stack extends React.Component {
  state = { index: this.props.index }

  static displayName = 'Stack'
  static defaultProps = {
    index: 0,
    items: () => []
  }

  static propTypes = {
    index: PropTypes.number,
    items: PropTypes.func
  }

  static Item = s.StackItem
  static Toolbar = s.StackToolbar

  next = () => {
    let index = this.state.index + 1
    let max = this.props.items().length - 1

    if (index > max) index = 0
    this.setState({ index: index })
  }

  prev = () => {
    let index = this.state.index - 1
    let max = this.props.items().length - 1

    if (index < 0) index = max
    this.setState({ index: index < 0 ? 0 : index })
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.index !== this.props.index) {
      this.setState({ index: nextProps.index })
    }
  }

  render () {
    let className = cx('stack', this.props.className)
    let { items, ...props } = this.props
    let { index } = this.state

    items = items(index, this.next, this.prev)
    items = items.map((item, i) => {
      return React.cloneElement(item, {key: i, visible: index === i})
    })

    return (
      <s.Stack {...props} className={className}>
        {items}
      </s.Stack>
    )
  }
}

export default Stack
