import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme'
import { Box, Group } from 'components'
import * as docs from './docs'
import Tag from './index'

const stories = storiesOf('2. Components/Tag', module)

stories.add('simple usage', withDocs(docs.main, () => {
  return (
    <div>
      <Box color='success' inverted>
        <Tag>Normal</Tag>
        <Tag color='gray'>Gray</Tag>
        <Tag color='primary'>Primary</Tag>
        <Tag color='success'>Success</Tag>
        <Tag color='danger'>Danger</Tag>
        <Tag color='success' icon='star' />
        <Tag color='gray' icon='shield' />
        <Tag color='success' isDelete />
        <Tag color='gray' isDelete />
      </Box>
      <Box color='success' inverted>
        <Group>
          <Tag color='black'>npm</Tag>
          <Tag color='primary'>v1.0.0</Tag>
        </Group>
        <Group>
          <Tag color='black'>build</Tag>
          <Tag color='success'>passed</Tag>
        </Group>
        <Group>
          <Tag color='primary'>javascript</Tag>
          <Tag color='light' isDelete />
        </Group>
      </Box>
    </div>
  )
}))
