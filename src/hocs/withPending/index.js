import { compose, withState, mapProps } from 'recompose'

const withPending = keys => {
  return compose(
    withState('pending', 'setPending', false),
    mapProps(props => {
      const newProps = {...props}
      keys.forEach(key => {
        if (props[key]) {
          newProps[key] = () => {
            const promise = props[key]()
            if (promise && promise.then) {
              props.setPending(true)
              promise.then(() => {
                props.setPending(false)
              })
            }
          }
        }
      })
      return newProps
    })
  )
}

export default withPending
