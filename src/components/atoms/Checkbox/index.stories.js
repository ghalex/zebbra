import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme'
import { Text, Box } from 'components'
import * as docs from './docs'
import Checkbox from './index'

const stories = storiesOf('2. Components/Checkbox', module)

stories.add('simple usage', withDocs(docs.main, () => {
  console.log(Checkbox)
  return (
    <div>
      <Box childPadding='0 0 4px 0' color='success' inverted>
        <Checkbox checked>Click <a href='#'>me</a> now</Checkbox>
        <Checkbox checked color='primary'>I like this checkbox</Checkbox>
        <Checkbox checked color='success'>This <b>is</b> success</Checkbox>
      </Box>
      <Box childPadding='0 0 4px 0' color='success' inverted>
        <Text padding='10px 0 10px 0'>With deifferent sizes:</Text>
        <Checkbox checked size='small'>Do this at <a href='#'>Zebbra</a></Checkbox>
        <Checkbox checked size='large'>Do this at <a href='#'>Zebbra</a></Checkbox>
      </Box>
    </div>
  )
}))
