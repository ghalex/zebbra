import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { main, bulma } from 'themes'
import { ThemeProvider } from 'styled-components'
import Input from '.'

const stories = storiesOf('Input', module)

stories.add('simple usage', () => {
  return (
    <div>
      <ThemeProvider theme={main}>
        <div>
          <label>Theme Default</label>
          <Input placeholder='Username' color='primary' />
        </div>
      </ThemeProvider>
      <ThemeProvider theme={bulma}>
        <div>
          <label>Theme Bulma</label>
          <Input placeholder='Username' color='danger' size='normal' />
        </div>
      </ThemeProvider>
    </div>
  )
})
