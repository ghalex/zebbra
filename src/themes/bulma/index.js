import theme from '../main'
import { defaults } from 'lodash'

const bulma = defaults({
  components: {
    input: {
      ...theme.components.input,
      borderRadius: '3px',
      boxShadow: 'inset 0 1px 2px rgba(100, 100, 100, 0.12)'
    }
  }
}, theme)

export default bulma
