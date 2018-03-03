import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme'
import { Box } from 'components'
import * as docs from './docs'
import Textarea from './index'

const stories = storiesOf('2. Components/Textarea', module)

stories.add('simple usage', withDocs(docs.main, () => {
  return (
    <div>
      <Box>
        <Textarea placeholder='Hello Textarea!' />
      </Box>
      <Box>
        <Textarea placeholder='Hello Textarea!' color='primary' />
      </Box>
    </div>
  )
}))
