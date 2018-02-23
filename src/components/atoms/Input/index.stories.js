import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme'
import { bulma } from 'themes'
import { ThemeProvider } from 'styled-components'
import Input from '.'
import Box from '../Box'

import * as docs from './docs'

const stories = storiesOf('2. Components/Input', module)

stories.add('simple usage', withDocs(docs.main, () => {
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
}))
