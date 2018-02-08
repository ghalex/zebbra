import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import Loader from '.'
import Box from '../Box'

const stories = storiesOf('atoms/Loader', module)

stories.add('simple usage', withInfo({ propTablesExclude: [Box] })(() => {
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
