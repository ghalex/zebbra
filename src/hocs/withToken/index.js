import decode from 'jwt-decode'
import React from 'react'
import { setDisplayName, wrapDisplayName } from 'recompose'

const withToken = (key) => (BaseComponent) => {
  class WithToken extends React.Component {
    componentWillReceiveProps (nextProps) {
      let token = nextProps.token

      if (token) {
        if (typeof Storage !== 'undefined') {
          window.localStorage.setItem(`${key}-jwt`, token)
          window.localStorage.setItem(`${key}-user`, JSON.stringify(decode(token)))
        }
      }
    }

    render () {
      return <BaseComponent {...this.props} />
    }
  }

  return setDisplayName(wrapDisplayName(BaseComponent, 'withToken'))(WithToken)
}

export default withToken
