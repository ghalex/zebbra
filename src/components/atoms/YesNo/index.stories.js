import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme'
import { Box, Button, Icon } from 'components'
import YesNo from '.'

import * as docs from './docs'

const stories = storiesOf('2. Components/YesNo', module)

stories.add('simple usage', withDocs(docs.main, () => {
  return (
    <div>
      <Box color='success' inverted>
        <YesNo color='primary' outlined onYes={() => console.log('yess')} padding={5}>
          <Button color='primary'>
            <Icon name='check-circle' />
            Accept
          </Button>
        </YesNo>
        <br />
        <YesNo color='success' outlined onYes={() => console.log('yess')} padding={5}>
          <Button color='success' outlined>
            Like Zebbra ?
          </Button>
        </YesNo>
        <br />
        <YesNo size='small' color='danger' outlined isLeft padding={5}>
          <Button size='small' color='danger'>
            <Icon name='trash' />
            Delete
          </Button>
        </YesNo>
      </Box>
    </div>
  )
}))
