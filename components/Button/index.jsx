import React from 'react'
import PropTypes from 'prop-types'
import {cx, css } from 'emotion'

const Button = ({type, children, onClick}) => {
  let bg

  switch (type) {
    case "primary":
      bg = css`
        background: #1f74ff;
        color: #fff;
        &:hover {
          box-shadow: 0 8px 25px -8px #1f74ff;
        }
      `
      break
    case "success":
      bg = css`
        background: #46c93a;
        color: #fff;
        &:hover {
          box-shadow: 0 8px 25px -8px #46c93a;
        }
      `
      break
    case "danger":
      bg = css`
        background: #ff4757;
        color: #fff;
        &:hover {
          box-shadow: 0 8px 25px -8px #ff4757;
        }
      `
      break
    case "warning":
      bg = css`
        background: #ffba00;
        color: #fff;
        &:hover {
          box-shadow: 0 8px 25px -8px #ffba00;
        }
      `
      break
    case "dark":
      bg = css`
        background: #1e1e1e;
        color: #fff;
        &:hover {
          box-shadow: 0 8px 25px -8px #1e1e1e;
        }
      `
      break
    default:
      bg = css`
        background: #fff;
        color: #000a6;
        border: 1px solid #d9d9d9;
        &:hover {
          border-color: #40a9ff;
        }
      `
  }
  
  return (
    <button onClick={onClick} className={cx(css`
      padding: 9px 12px;
      border: 0;
      border-radius: 5px;
      cursor: pointer;
      overflow: hidden;
      box-sizing: border-box;
      transition: all .2s ease;
    `, bg)}>{children}</button>
  )
}

export default Button

Button.propTypes = {
  type: PropTypes.string 
}