import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme'
import Loader from '.'
import Box from '../Box'

import * as docs from './docs'

const stories = storiesOf('2. Components/Loader', module)

stories.add('simple usage', withDocs(docs.main, () => {
  return (
    <div>
      <Box>
        <Loader />
        <Loader color='danger' size='large' />
        <Loader color='#FFF000' />
      </Box>
      <Box>
        <Loader color='blue'>Loading...</Loader>
      </Box>
      <Box color='success'>
        <Loader color='#FFF000' inverted vertical>Loading...</Loader>
      </Box>
    </div>
  )
})
)
