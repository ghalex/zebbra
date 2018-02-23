import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme'
import Title from '.'
import { Box } from 'components/atoms'

import * as docs from './docs'

const stories = storiesOf('2. Components/Title', module)

stories.add('simple usage', withDocs(docs.main, () => {
  return (
    <div>
      <Box color='danger' inverted>
        <Title>Title Normal</Title>
        <Title thin>Thin Title Normal</Title>
        <Title strong>Strong Title Normal</Title>
      </Box>
      <Box color='success' inverted>
        <Title>Zebbra Title</Title>
        <Title subtitle thin size='small' color='gray'>This is a Zebbra subtitle</Title>
      </Box>
      <Box color='success' inverted>
        <Title strong color='success' textAlign='center'>Zebbra Centered Title</Title>
        <Title subtitle size='small' color='successLight' textAlign='center'>This is a Zebbra subtitle</Title>
      </Box>
    </div>
  )
}))

stories.add('with different size', withDocs(docs.withSize, () => {
  return (
    <div>
      <Box color='success' inverted>
        <Title size='small'>Title Small</Title>
        <Title>Title Normal</Title>
        <Title size='large'>Title Large</Title>
        <Title size='xlarge'>Title Extra Large</Title>
      </Box>
    </div>
  )
}))

stories.add('with different colors usage', withDocs(docs.withColor, () => {
  return (
    <div>
      <Box color='success' inverted>
        <Title color='primary'>Title Primary</Title>
        <Title color='success'>Title Success</Title>
        <Title color='danger'>Title Danger</Title>
        <Title color='purple'>Title Purple</Title>
        <Title color='grey'>Title Grey</Title>
      </Box>
    </div>
  )
}))
