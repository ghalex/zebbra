import { compose, withState, withHandlers, mapProps } from 'recompose'

export default compose(
  withState('index', 'setIndex', 0),
  withHandlers({
    next: ({ setIndex }) => () => setIndex(n => n + 1),
    prev: ({ setIndex }) => () => setIndex(n => n - 1 < 0 ? 0 : n - 1)
  }),
  mapProps(props => {
    let { index, next, prev, setIndex, ...rest } = props
    return {
      ...rest,
      stack: {
        index: index,
        next: next,
        prev: prev,
        setIndex: setIndex
      }
    }
  })
)
