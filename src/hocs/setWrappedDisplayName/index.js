import { setDisplayName, wrapDisplayName } from 'recompose'

export default (name) => (BaseComponent) => {
  return setDisplayName(wrapDisplayName(BaseComponent, name))(BaseComponent)
}
