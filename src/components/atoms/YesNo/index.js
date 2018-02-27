import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Icon, Button, Group } from 'components/atoms'
import { StyledYesNo } from './styles'

class YesNo extends React.Component {
  state = {
    isOpen: false,
    padding: 0
  }

  static displayName = 'YesNo'
  static defaultProps = {
    isLeft: false
  }

  static propTypes = {
    isLeft: PropTypes.bool,
    onYes: PropTypes.func,
    onNo: PropTypes.func
  }

  handleYes = () => {
    this.close()
    if (this.props.onYes) this.props.onYes()
  }

  handleNo = () => {
    this.close()
    if (this.props.onNo) this.props.onNo()
  }

  open = () => {
    this.setState({isOpen: true})
  }

  close = () => {
    this.setState({isOpen: false})
  }

  toggle = () => {
    this.setState({isOpen: !this.state.isOpen})
  }

  render () {
    const className = cx(`yesno`, this.props.className)
    const { isLeft, children, ...props } = this.props
    const { isOpen } = this.state

    const MainButton = React.cloneElement(React.Children.only(children), {
      onClick: () => this.toggle()
    })

    return (
      <StyledYesNo {...props} className={className}>
        <Group>
          {!isLeft && MainButton}
          {isOpen && <Button className='btnYes' isIcon onClick={this.handleYes} {...props}><Icon name='check' /></Button>}
          {isOpen && <Button className='btnNo' isIcon onClick={this.handleNo} {...props}><Icon name='times' /></Button>}
          {isLeft && MainButton}
        </Group>
      </StyledYesNo>
    )
  }
}

export default YesNo
