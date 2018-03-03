import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { setDefaults } from '@storybook/addon-info';
import { setOptions } from '@storybook/addon-options';
import { ThemeProvider } from 'styled-components'
import { main } from 'themes'

const req = require.context('../src', true, /\.stories\.js$/)
const compare = (a, b) => {
  if (a < b) {
    return 1;
  }
  if (a > b) {
    return -1;
  }
  // a must be equal to b
  return 0;
}

function loadStories() {
  req.keys().sort(compare).forEach((filename) => req(filename))
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

setOptions({
  name: "Zebbra Storybook",
  goFullScreen: false,
  showStoriesPanel: true,
  showAddonPanel: false
})

addDecorator((story) => (
  <ThemeProvider theme={main}>
    {story()}
  </ThemeProvider>
))

configure(loadStories, module);
