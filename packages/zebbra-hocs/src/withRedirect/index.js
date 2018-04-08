import React from 'react'
import { setDisplayName, wrapDisplayName } from 'recompose'

const withRedirect = (predicate, redirect) => BaseComponent => {
  class WithRedirect extends React.Component {
    componentWillReceiveProps (nextProps) {
      if (predicate(nextProps)) {
        redirect(nextProps)
      }
    }

    render () {
      return <BaseComponent {...this.props} />
    }
  }

  return setDisplayName(wrapDisplayName(BaseComponent, 'withRedirect'))(WithRedirect)
}

export default withRedirect
