import React from 'react'

class ChildrenProps extends React.Component {
  static displayName = 'ChildrenProps'
  static defaultProps = {
  }
  static propTypes = {
  }

  render () {
    const { children, ...props } = this.props

    if (!children) return null

    const newChildren = React.Children.map(
      children,
      c => {
        let p = {...c.props, ...props}
        return React.cloneElement(c, p)
      }
    )

    return newChildren
  }
}

export default ChildrenProps
