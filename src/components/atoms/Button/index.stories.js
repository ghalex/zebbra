import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Box } from 'components/atoms'
import Button from '.'

const stories = storiesOf('atoms/Button', module)

stories.add(
  'simple usage',
  withInfo({
    propTablesExclude: [Box]
  })(() => {
    return (
      <div className='story-box'>
        <Box color='success' inverted>
          <Button>Normal</Button>
          <Button color='primary'>Primary</Button>
          <Button color='success'>Success</Button>
          <Button color='danger'>Danger</Button>
          <Button color='gray'>Grayscale</Button>
          <Button color='black'>Black</Button>
        </Box>
        <Box color='success'>
          <Button inverted>Normal</Button>
          <Button color='primary' inverted>Primary</Button>
          <Button color='success' inverted>Success</Button>
          <Button color='danger' inverted>Danger</Button>
          <Button color='gray' inverted>Grayscale</Button>
          <Button color='black' inverted>Black</Button>
        </Box>
        <Box color='success' inverted>
          <Button outlined>Normal</Button>
          <Button color='primary' outlined>Primary</Button>
          <Button color='success' outlined>Success</Button>
          <Button color='danger' outlined>Danger</Button>
          <Button color='gray' outlined>Grayscale</Button>
          <Button color='black' outlined>Black</Button>
        </Box>
        <Box color='success' inverted>
          <Button loading>Normal</Button>
          <Button color='primary' loading>Primary</Button>
          <Button color='success' loading>Success</Button>
          <Button color='danger' loading>Danger</Button>
          <Button color='gray' loading>Grayscale</Button>
          <Button color='black' loading>Black</Button>
        </Box>
      </div>
    )
  })
)

stories.add(
  'with different sizes',
  withInfo({
    propTablesExclude: [Box]
  })(() => {
    return (
      <div className='story-box'>
        <Box color='success' inverted>
          <Button size='tiny'>Tiny</Button>
          <Button size='small' color='primary'>Small</Button>
          <Button size='normal' color='success'>Normal</Button>
          <Button size='medium' color='danger'>Medium</Button>
          <Button size='large' color='gray'>Large</Button>
          <Button size='xlarge' color='black'>XLarge</Button>
        </Box>
      </div>
    )
  }))
