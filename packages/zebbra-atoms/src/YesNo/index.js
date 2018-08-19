import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { main } from '@zebbra/themes'
import { Button, Group } from '../index'
import { StyledYesNo } from './styles'

/**
 * A **YesNo** containar can be used ask user to choose yes or no after he clicks a button.
 **/
class YesNo extends React.Component {
  state = {
    isOpen: false
  }

  static displayName = 'YesNo'
  static defaultProps = {
    display: 'inline-block',
    left: false,
    p: 0,
    m: 0,
    theme: main
  }

  static propTypes = {
    /** A yesno can be displayed to the left */
    left: PropTypes.bool,
    /** Padding */
    p: PropTypes.string,
    /** Called when user chooses yes */
    onYes: PropTypes.func,
    /** Called when user chooses no */
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
    const { left, children, ...props } = this.props
    const { isOpen } = this.state

    const MainButton = React.cloneElement(React.Children.only(children), {
      onClick: () => this.toggle()
    })

    return (
      <StyledYesNo {...props} className={className}>
        <Group>
          {!left && MainButton}
          {isOpen && <Button icon='check' className='btnYes' isIcon onClick={this.handleYes} {...props} />}
          {isOpen && <Button icon='times' className='btnNo' isIcon onClick={this.handleNo} {...props} />}
          {left && MainButton}
        </Group>
      </StyledYesNo>
    )
  }
}

export default YesNo
