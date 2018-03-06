import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme'
import { Box, Icon, Button, Input } from 'components'
import * as docs from './docs'

import Field from '.'

const stories = storiesOf('2. Components/Field', module)

stories.add('simple usage', withDocs(docs.main, () => {
  return (
    <Box>
      <Field label='Email:' isRequired>
        <Icon name='user' />
        <Input placeholder='Type username here' />
        <Icon name='check' color='success' />
      </Field>

      <Field label='Password:'>
        <Icon name='unlock' />
        <Input color='danger' placeholder='Your password' type='password' />
        <Icon name='warning' color='danger' />
      </Field>
      <Button color='primary'>Login</Button>
    </Box>
  )
}))
