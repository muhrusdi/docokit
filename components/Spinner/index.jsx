import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { css, keyframes } from 'emotion'
const Spinner = ({stroke = '#333'}) => {
  const rotate = keyframes`
    0% {
        transform: rotate(0deg)
    }

    100% {
        transform: rotate(270deg)
    }
  `

  const dash = keyframes`
    0% {
        stroke-dashoffset: 88px
    }

    50% {
        stroke-dashoffset: 22px;
        transform: rotate(135deg)
    }

    100% {
        stroke-dashoffset: 88px;
        transform: rotate(450deg)
    }
  `
  return (
    <div className={css`
      margin: 0;
      border: none;
      border-radius: 0;
      overflow: visible;
      font: inherit;
      color: inherit;
      text-transform: none;
      padding: 0;
      background-color: transparent;
      display: inline-block;
      fill: currentcolor;
      line-height: 0;
      & > svg {
        animation: ${rotate} 1.4s linear infinite;
      }
      & > svg > circle {
        stroke-dasharray: 88px;
        stroke-dashoffset: 0;
        transform-origin: center;
        animation: ${dash} 1.4s ease-in-out infinite;
        stroke-width: 1;
        stroke-linecap: round
      }
    `}>
      <svg width="30" height="30" viewBox="0 0 30 30">
        <circle fill="none" stroke={stroke} cx="15" cy="15" r="14"></circle>
      </svg>
    </div>
  )
}

export default Spinner

Spinner.propTypes = {
  stroke: PropTypes.string
}