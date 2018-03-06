import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme'
import { Box, Group, Button, Input } from 'components'
import * as docs from './docs'
import Field from './index'

const stories = storiesOf('2. Components/Field', module)

stories.add('simple usage', withDocs(docs.main, () => {
  return (
    <Box>
      <Field label='Email:' required>
        <Group>
          <Button icon='envelope' color='#CCC' />
          <Input placeholder='Type username here' />
        </Group>
      </Field>

      <Field label='Password:'>
        <Group>
          <Button icon='unlock' color='#CCC' />
          <Input color='danger' placeholder='Your password' type='password' />
        </Group>
      </Field>
      <Button color='primary'>Login</Button>
    </Box>
  )
}))
