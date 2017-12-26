
import * as React from 'react'
import { storiesOf } from '@storybook/react'
import theme, { bulma } from 'themes'
import { ThemeProvider } from 'styled'
import Input from '.'

console.log(theme)
console.log(bulma)
const stories = storiesOf('forms/Input', module)
stories.add('simple usage',
  () => {
    return (
      <div>
          <ThemeProvider theme={theme}>
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
  }
)
