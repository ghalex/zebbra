import React from 'react'
import { setDisplayName, wrapDisplayName } from 'recompose'

export default (fn) => (BaseComponent) => {
  class DidMount extends React.Component {
    componentDidMount () {
      if (fn) {
        fn(this.props)
      }
    }

    render () {
      return <BaseComponent {...this.props} />
    }
  }

  return setDisplayName(wrapDisplayName(BaseComponent, 'didMount'))(DidMount)
}
