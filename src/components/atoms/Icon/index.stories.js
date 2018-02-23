import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Box } from 'components/atoms'
import Icon from '.'

const stories = storiesOf('2. Components/Icon', module)

stories.add('simple usage', withInfo({
  propTablesExclude: [Box],
  text: `
    #### Icon class uses FontAwesome:
    ~~~~
    <link rel='stylesheet' type='text/css' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' />
    ~~~~
    For a list of all icons check FontAwesome [webiste](https://fontawesome.com/v4.7.0/icons/).
  `
})(() => {
  return (
    <div>
      <Box color='success' inverted>
        <Icon name='star' color='primary' />
        <Icon name='star' color='success' />
        <Icon name='star' color='black' />
        <Icon name='star' color='gray' />
        <Icon name='star' color='danger' />
      </Box>
      <Box color='primary' inverted>
        <Icon name='star' color='black' inverted />
        <Icon name='star' color='gray' inverted />
        <Icon name='github' color='primary'inverted />
        <Icon name='gift' color='success' inverted />
        <Icon name='bug' color='danger' inverted />
      </Box>
      <Box color='danger' inverted>
        <Icon name='star' color='black' />
        <Icon name='star' color='black' size='medium' />
        <Icon name='star' color='primary' size='large' />
        <Icon name='star' color='success' size='xlarge' />
      </Box>
    </div>
  )
}))
