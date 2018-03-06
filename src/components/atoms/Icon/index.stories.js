import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme'
import { Box } from 'components'
import Icon from './index'

import * as docs from './docs'

const stories = storiesOf('2. Components/Icon', module)

stories.add('simple usage', withDocs(docs.main, () => {
  return (
    <div>
      <Box color='success' inverted>
        <Icon name='star' color='primary' />
        <Icon name='star' color='success' />
        <Icon name='star' color='black' />
        <Icon name='star' color='gray' />
        <Icon name='star' color='danger' />
      </Box>
      <Box color='primary' inverted>
        <Icon name='star' color='black' inverted />
        <Icon name='star' color='gray' inverted />
        <Icon name='github' color='primary'inverted />
        <Icon name='gift' color='success' inverted />
        <Icon name='bug' color='danger' inverted />
      </Box>
      <Box color='danger' inverted>
        <Icon name='star' color='black' />
        <Icon name='star' color='black' size='medium' />
        <Icon name='star' color='primary' size='large' />
        <Icon name='star' color='success' size='xlarge' />
      </Box>
    </div>
  )
}))
