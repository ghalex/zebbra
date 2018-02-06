import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import Box from '.'

const stories = storiesOf('atoms/Box', module)

stories.add(
  'simple usage',
  withInfo()(
    () => {
      return (
        <div className='story-box'>
          <Box>Some text in box</Box>
          <Box size='small' color='primary'>Some text in box</Box>
          <Box color='success' inverted>Some text in box</Box>
          <Box color='success' stacked>This is stacked</Box>
        </div>
      )
    }
  )
)
