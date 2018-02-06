import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Box, Button } from 'components/atoms'
import Group from '.'

const stories = storiesOf('atoms/Group', module)

stories.add('group buttons', withInfo({
  propTablesExclude: [Box, Button],
  text: `
    A group passes all props like \`color\`, \`size\` to children.
  `
})(() => {
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
})
)
