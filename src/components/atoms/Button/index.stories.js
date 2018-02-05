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
          <Button inverted>Normal</Button>
          <Button color='primary' inverted>Primary</Button>
          <Button color='success' inverted>Success</Button>
          <Button color='danger' inverted>Danger</Button>
          <Button color='gray' inverted>Grayscale</Button>
          <Button color='black' inverted>Black</Button>
        </div>
        <div>
          <Button outlined>Normal</Button>
          <Button color='primary' outlined>Primary</Button>
          <Button color='success' outlined>Success</Button>
          <Button color='danger' outlined>Danger</Button>
          <Button color='gray' outlined>Grayscale</Button>
          <Button color='black' outlined>Black</Button>
        </div>
        <div>
          <Button loading>Normal</Button>
          <Button color='primary' loading>Primary</Button>
          <Button color='success' loading>Success</Button>
          <Button color='danger' loading>Danger</Button>
          <Button color='gray' loading>Grayscale</Button>
          <Button color='black' loading>Black</Button>
        </div>
      </div>
    </ThemeProvider>
  )
})

stories.add('different sizes', () => {
  return (
    <ThemeProvider theme={main}>
      <div>
        <div>
          <Button size='tiny'>Tiny</Button>
          <Button size='small' color='primary'>Small</Button>
          <Button size='normal' color='success'>Normal</Button>
          <Button size='medium' color='danger'>Medium</Button>
          <Button size='large' color='gray'>Large</Button>
          <Button size='xlarge' color='black'>XLarge</Button>
        </div>
      </div>
    </ThemeProvider>
  )
})
