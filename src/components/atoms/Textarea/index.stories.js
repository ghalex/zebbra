import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme'
import { ThemeProvider } from 'styled-components'
import { bulma } from 'themes'
import { Box, Text } from 'components'
import * as docs from './docs'
import Textarea from './index'

const stories = storiesOf('2. Components/Textarea', module)

stories.add('simple usage', withDocs(docs.main, () => {
  return (
    <div>
      <Box color='danger' inverted>
        <Textarea placeholder='Hello Textarea!' size='small' />
      </Box>
      <Box color='primary' inverted>
        <Textarea placeholder='Hello Textarea!' color='primary' />
      </Box>
      <ThemeProvider theme={bulma}>
        <Box color='success' inverted>
          <Text padding='5px 0'>Theme <b>Bulma</b>:</Text>
          <Textarea placeholder='Hello Textarea!' />
        </Box>
      </ThemeProvider>
    </div>
  )
}))
