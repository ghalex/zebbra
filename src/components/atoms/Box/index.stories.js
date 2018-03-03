import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme'
import * as docs from './docs'
import Box from './index'

const stories = storiesOf('2. Components/Box', module)

stories.add('simple usage', withDocs(docs.main, () => {
  return (
    <div className='story-box'>
      <Box>Some text in box</Box>
      <Box size='small' color='primary'>Small box with some text in box</Box>
      <Box color='success' inverted>Some text in box</Box>
      <Box color='success' stacked>This is stacked</Box>
    </div>
  )
}))
