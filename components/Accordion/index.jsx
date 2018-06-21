import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import PropTypes from 'prop-types'
import { css } from 'emotion'

const Index = ({children}) => {
  return (
    <div className={css`
    `}>
      {children}
    </div>
  )
}

export default Index

export class Item extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toggle: false,
      height: 0
    }
    this.item = React.createRef()
  }

  componentDidMount() {
    console.log('-->', this.item.current.clientHeight)
  }

  collapse = h => cb => {
    const t = h
  }
  render() {
    const { toggle, height } = this.state
    const { header, children } = this.props
    const block = css({
      display: !toggle ? 'none' : 'block',
      transition: 'height .3s ease',
      overflow: 'hidden',
    })
    
    return (
      <div>
        <div onClick={() => {
          console.log('test', toggle)
          console.log('-->', this.item.current.clientHeight, height)
          this.setState(prevState => ({
            toggle: !prevState.toggle
          }))
        }} className={css`
          cursor: pointer;
        `}>
          <i>Icon</i>
          {header}
        </div>
        <div ref={this.item} className={block}>
          {children}
        </div>
      </div>
    )
  }
}

Index.propTypes = {
  type: PropTypes.string 
}