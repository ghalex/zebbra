import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { bulma } from 'themes'
import { ThemeProvider } from 'styled-components'
import Input from '.'
import Box from '../Box'

const stories = storiesOf('atoms/Input', module)

stories.add(
  'simple usage',
  withInfo({
    propTablesExclude: [Box, ThemeProvider]
  })(() => {
    return (
      <div>
        <Box color='primary' inverted>
          <label>Default theme:</label>
          <Input placeholder='Username' color='primary' onEnter={(evt, data) => console.log('data:', data)} />
        </Box>
        <ThemeProvider theme={bulma}>
          <Box color='success' inverted>
            <label>Custom theme:</label>
            <Input placeholder='Username' color='danger' size='normal' />
          </Box>
        </ThemeProvider>
      </div>
    )
  })
)
