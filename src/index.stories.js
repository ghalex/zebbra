import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme'
import docs from '../README.md'

const stories = storiesOf('1. Introduction', module)

stories.add('Welcome', withDocs(docs, () => {
  return <div />
}))
