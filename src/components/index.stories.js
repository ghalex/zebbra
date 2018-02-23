import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme'
import docs from './index.md'

const stories = storiesOf('1. Introduction', module)

stories.add('Welcome', withDocs(docs, () => {
  return <div />
}))

stories.add('Theming', withDocs(docs, () => {
  return <div />
}))

stories.add('Release Notes', withDocs(docs, () => {
  return <div />
}))
