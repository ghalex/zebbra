import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme'
import { Box, Button } from 'components'
import * as docs from './docs'
import Group from './index'

const stories = storiesOf('2. Components/Group', module)

stories.add('group buttons', withDocs(docs.main, () => {
  return (
    <div>
      <Box color='primary' inverted>
        <Group color='primary' outlined>
          <Button icon='star'>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </Group>
      </Box>
      <Box color='success' inverted>
        <Group vertical>
          <Button color='success'>Left</Button>
          <Button color='gray'>Middle</Button>
          <Button color='gray'>Second</Button>
          <Button color='success'>Right</Button>
        </Group>
        <Group vertical size='small'>
          <Button color='success'>Left</Button>
          <Button color='gray'>Middle</Button>
          <Button color='gray'>Second</Button>
          <Button color='success'>Right</Button>
        </Group>
      </Box>
      <Box color='danger' inverted>
        <Group>
          <Button color='danger'>Labeld</Button>
          <Button color='danger' icon='star' />
        </Group>
      </Box>
    </div>
  )
}))
