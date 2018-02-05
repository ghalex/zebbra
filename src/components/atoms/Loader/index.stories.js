import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { main } from 'themes'
import { ThemeProvider } from 'styled-components'
import Loader from '.'

const stories = storiesOf('Loader', module)

stories.add('default', () => {
  return (
    <ThemeProvider theme={main}>
      <Fragment>
        <div>
          <Loader />
          <Loader color='danger' size='large' />
          <Loader color='#FFF000' />
        </div>
        <div>
          <Loader inverted />
          <Loader color='danger' size='large' inverted />
          <Loader color='#FFF000' inverted />
        </div>
      </Fragment>
    </ThemeProvider>
  )
})
