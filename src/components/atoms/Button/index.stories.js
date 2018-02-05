import React from 'react'
import { storiesOf } from '@storybook/react'
import { main } from 'themes'
import { ThemeProvider } from 'styled-components'
import Button from '.'

const stories = storiesOf('Button', module)

stories.add('simple usage', () => {
  return (
    <ThemeProvider theme={main}>
      <div>
        <div>
          <Button>Normal</Button>
          <Button color='primary'>Primary</Button>
          <Button color='success'>Success</Button>
          <Button color='danger'>Danger</Button>
          <Button color='gray'>Grayscale</Button>
          <Button color='black'>Black</Button>
        </div>
        <div>
          <Button isInverted>Normal</Button>
          <Button color='primary' isInverted>Primary</Button>
          <Button color='success' isInverted>Success</Button>
          <Button color='danger' isInverted>Danger</Button>
          <Button color='gray' isInverted>Grayscale</Button>
          <Button color='black' isInverted>Black</Button>
        </div>
        <div>
          <Button isOutlined>Normal</Button>
          <Button color='primary' isOutlined>Primary</Button>
          <Button color='success' isOutlined>Success</Button>
          <Button color='danger' isOutlined>Danger</Button>
          <Button color='gray' isOutlined>Grayscale</Button>
          <Button color='black' isOutlined>Black</Button>
        </div>
      </div>
    </ThemeProvider>
  )
})
