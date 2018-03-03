import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme'
import { bulma } from 'themes'
import { ThemeProvider } from 'styled-components'
import { Box, Text } from 'components'
import * as docs from './docs'
import Input from './index'

const stories = storiesOf('2. Components/Input', module)

stories.add('simple usage', withDocs(docs.main, () => {
  return (
    <div>
      <Box color='primary' inverted>
        <Text padding='5px 0'>Theme <b>Main</b>:</Text>
        <Input placeholder='Username' color='primary' onEnter={(evt, data) => console.log('data:', data)} />
      </Box>
      <ThemeProvider theme={bulma}>
        <Box color='success' inverted>
          <Text padding='5px 0'>Theme <b>Bulma</b>:</Text>
          <Input placeholder='Username' color='danger' size='normal' />
        </Box>
      </ThemeProvider>
    </div>
  )
}))
