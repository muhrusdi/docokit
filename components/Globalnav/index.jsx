import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { cx, css } from 'emotion'

class Globalnav extends Component {
  static defaultProps = {
    height: 48,
    gutter: 16
  }
  render() {
    const { 
      children,
      container, 
      theme, 
      menu, 
      gutter,
      height } = this.props
    let mw
    let _menu

    switch (menu) {
      case "right":
        _menu = css`
          & > div {
            &:nth-child(2n) {
              display: flex;
              margin-left: -${gutter}px;
              margin-right: -${gutter}px;
              & > div {
                padding-left: ${gutter}px;
                padding-right: ${gutter}px
              }
            }
          }
        `
        break
      case "left":
        _menu = css`
          flex-direction: row-reverse;
          & > div {
            &:nth-child(2n) {
              display: flex;
              margin-left: -${gutter}px;
              margin-right: -${gutter}px;
              & > div {
                padding-left: ${gutter}px;
                padding-right: ${gutter}px
              }
            }
          }
        `
        break
    
      default:
        break
    }

    const th = theme === "light" ?
      css`
        background: #F1F1F1;
        a {
          color: #585858;
        }
      ` : css`
        background: #333;
        background: rgba(0,0,0,0.8);
        a {
          color: #fff;
        }
      `

    switch (container) {
      case "xl":
        mw = css`
          max-width: 1200px;
        `
        break
      case "lg":
        mw = css`
          max-width: 992px;
        `
        break
      default:
        mw = css`
          max-width: initial;
        `
    }
    return (
      <nav className={cx(css`
        z-index: 9999;
        display: block;
        margin: 0;
        width: 100%;
        height: ${height}px;
        font-size: 17px;
        backdrop-filter: saturate(180%) blur(20px);
        a {
          cursor: pointer;
          transition: opacity .3s ease;
          &:hover {
            opacity: .65;
          }
        }
      `, th)}>
        <div className={cx(css`
          margin: 0 auto;
          padding-left: ${gutter}px;
          padding-right: ${gutter}px;
          display: flex;
          align-items: center;
          height: inherit;
          justify-content: space-between;
        `, mw, _menu)}>
          {children}
        </div>
      </nav>
    )
  }
}

export default Globalnav

Globalnav.propTypes = {
  theme: PropTypes.string,
  container: PropTypes.string,
  height: PropTypes.number,
  menu: PropTypes.string,
  gutter: PropTypes.number
}