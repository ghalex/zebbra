import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { main, bulma } from 'themes'
import { ThemeProvider } from 'styled-components'
import Input from '.'
import Box from '../Box'

const stories = storiesOf('Input', module)

stories.add('simple usage', () => {
  return (
    <div>
      <ThemeProvider theme={main}>
        <Box color='primary' inverted>
          <label>Theme Default</label>
          <Input placeholder='Username' color='primary' />
        </Box>
      </ThemeProvider>
      <ThemeProvider theme={bulma}>
        <Box color='success' inverted>
          <label>Theme Bulma</label>
          <Input placeholder='Username' color='danger' size='normal' />
        </Box>
      </ThemeProvider>
    </div>
  )
})
