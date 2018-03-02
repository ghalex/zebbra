import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme'
import { Box } from 'components'
import * as docs from './docs'
import Checkbox from './index'

const stories = storiesOf('2. Components/Checkbox', module)

stories.add('simple usage', withDocs(docs.main, () => {
  console.log(Checkbox)
  return (
    <div>
      <Box color='success' inverted>
        <Checkbox checked>Do this at <a href='#'>Coderbox</a></Checkbox>
        <Checkbox checked size='small'>Do this at <a href='#'>Coderbox</a></Checkbox>
      </Box>
    </div>
  )
}))
