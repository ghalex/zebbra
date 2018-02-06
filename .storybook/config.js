import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { setDefaults } from '@storybook/addon-info';
import { ThemeProvider } from 'styled-components'
import { main } from 'themes'

const req = require.context('../src', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

// addon-info
setDefaults({
  header: true,
  inline: true,
  styles: stylesheet => {
    return {
      ...stylesheet,
      infoBody: {
        boxShadow: 'none',
        border: 'none',
        margin: '1rem'
      },
      infoStory: {
        margin: '1rem'
      }
    }
  }
});

addDecorator((story) => (
  <ThemeProvider theme={main}>
    {story()}
  </ThemeProvider>
))

configure(loadStories, module);
