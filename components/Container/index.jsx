import React from 'react'
import { cx, css } from 'emotion'
import PropTypes from 'prop-types'

const Container = ({children, max, className, gutter = 16, style}) => {
  let _max
  switch (max) {
    case "xl":
      _max = css`
        max-width: 1200px;
      `
      break
    case "lg":
      _max = css`
        max-width: 992px;
      `
      break
    case "md":
      _max = css`
        max-width: 768px;
      `
      break
    case "sm":
      _max = css`
        max-width: 576px;
      `
      break
    default:
      break
  }
  return (
    <div style={{...style}} className={cx(css`
      margin: 0 auto;
      padding-left: ${gutter}px;
      padding-right: ${gutter}px;
    `, _max, className)}>
      {children}
    </div>
  )
}

export default Container

Container.propTypes = {
  max: PropTypes.string,
  gutter: PropTypes.number
}