import React, { Component } from 'react'
const { name, version } = require('../../package.json')

const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export default class Logo extends Component {
  render () {
    return (
      <a className='rsg-logo' href='#'>
        <span className='rsg-logo-name'>{capitalize(name)}</span>
        <em className='rsg-logo-version'>{version}</em>
      </a>
    )
  }
}
