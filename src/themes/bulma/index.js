import theme from '../main'
import { defaults } from 'lodash'
import { lighten } from 'polished'

const bulma = defaults({
  components: {
    ...theme.components,
    input: {
      ...theme.components.input,
      border: '1px solid #dbdbdb',
      borderRadius: '3px',
      boxShadow: 'inset 0 1px 2px rgba(100, 100, 100, 0.12)',
      focusBorder: `1px solid ${theme.colors.primary}`,
      focusBoxShadow: `0 0 0 0.125em ${lighten(0.4, theme.colors.primary)}`
    }
  }
}, theme)

export default bulma
