import main from '../main'
import { darken } from 'polished'
import { defaults } from 'lodash'

const github = defaults({
  name: 'github',
  colors: {
    ...main.colors,
    primary: '#2ab256',
    primaryLight: '#e5f7ec',
    primaryDark: darken(0.1, '#2ab256')
  }
}, main)

github.radii = [ 0, 3, 6 ]

export default github
