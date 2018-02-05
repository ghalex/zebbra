import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { main } from 'themes'
import { ThemeProvider } from 'styled-components'
import Box from '.'

const stories = storiesOf('Box', module)

stories.add('default', () => {
  return (
    <ThemeProvider theme={main}>
      <div>
        <Box>Some text in box</Box>
        <Box size='small' color='primary'>Some text in box</Box>
        <Box color='success' inverted>Some text in box</Box>
        <Box color='success' stacked>This is stacked</Box>
      </div>
    </ThemeProvider>
  )
})
