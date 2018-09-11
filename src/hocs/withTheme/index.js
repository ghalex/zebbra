import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import setWrappedDisplayName from '../setWrappedDisplayName'

export const CHANNEL = '__styled-components__next__'

const withTheme = BaseComponent => {
  class WithTheme extends React.Component {
    static contextTypes = {
      [CHANNEL]: PropTypes.func
    }

    state = { theme: undefined }

    componentWillMount () {
      const subscribe = this.context[CHANNEL]
      if (subscribe) {
        this.unsubscribe = subscribe(theme => {
          this.setState({ theme })
        })
      }
    }

    componentWillUnmount () {
      if (typeof this.unsubscribe === 'function') this.unsubscribe()
    }

    render () {
      const { theme } = this.state
      return <BaseComponent theme={theme} {...this.props} />
    }
  }

  return compose(setWrappedDisplayName('withTheme'))(WithTheme)
}

export default withTheme
