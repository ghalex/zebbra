import theme from '../default'
import { defaults } from 'lodash'
import { Theme } from 'zebbra'
import { color } from 'styled-helpers'
import { rgba, darken } from 'polished'

const bulma: Theme = defaults({
  components: {
    input: (props: any) => ({
      ...theme.components.input(props),
      border: `1px solid ${color(props)}`,
      borderRadius: '3px',
      boxShadow: 'inset 0 1px 2px rgba(100, 100, 100, 0.12)',
      focusBorder: `1px solid ${color(props)}`,
      focusBoxShadow: `0 0 0 0.15em ${rgba(color(props), 0.15)}`
    })
  }
}, theme)

export default bulma
