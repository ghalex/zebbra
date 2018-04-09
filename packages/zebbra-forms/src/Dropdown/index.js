import React from 'react'
import cx from 'classnames'
import * as s from './styles'

class Dropdown extends React.Component {
  static displayName = 'Dropdown'
  static defaultProps = {
  }
  static propTypes = {
  }

  render () {
    const className = cx(`dropdown`, this.props.className)
    return (
      <s.Container className={className}>
        drop
      </s.Container>
    )
  }
}

export default Dropdown
