import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme'
import { Box } from 'components'
import * as docs from './docs'
import Text from './index'

const stories = storiesOf('2. Components/Text', module)

stories.add('simple usage', withDocs(docs.main, () => {
  return (
    <div>
      <Box color='danger' inverted>
        <Text>This is a normal text.</Text>
        <Text thin>This is a thin text.</Text>
        <Text strong>This is a strong text.</Text>
      </Box>
      <Box color='success' inverted>
        <Text color='primary'>Text with primary color</Text>
        <Text color='success'>Text with success color</Text>
        <Text color='danger'>Text with danger color</Text>
      </Box>
      <Box color='success' inverted>
        <Text size='small'>Text with small size</Text>
        <Text size='large'>Text with large size</Text>
      </Box>
    </div>
  )
}))
