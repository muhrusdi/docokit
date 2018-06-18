import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { cx, css } from 'emotion'

class Col extends Component {
  constructor(props) {
    super(props)
    this.state = {
      breakPoints: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200
      },
      cols: {
        col1: '8.333333%',
        col2: '16.666667%',
        col3: '25%',
        col4: '33.333333%',
        col5: '41.666667%',
        col6: '50%',
        col7: '58.333333%',
        col8: '66.666667%',
        col9: '75%',
        col10: '83.333333%',
        col11: '91.666667%',
        col12: '100%'
      }
    }
  }

  classes = () => {
    let a = []
    let { xxl, xl, lg, md, sm } = this.props
    let { cols } = this.state
    
    if (xxl) {
      let c = cols[`col${xl}`]
      a.push(
        `
          @media only screen and (min-width: ${this.state.breakPoints.xl}px) {
            width: ${c};
          }
        `
      )
    }

    if (xl) {
      let c = cols[`col${xl}`]
      a.push(
        `
          @media only screen and (min-width: ${this.state.breakPoints.lg}px) {
            width: ${c};
          }
        `
      )
    }

    if (lg) {
      let c = cols[`col${lg}`]
      a.push(
        `
          @media only screen and (min-width: ${this.state.breakPoints.md}px) {
            width: ${c};
          }
        `
      )
    }

    if (md) {
      let c = cols[`col${md}`]
      a.push(
        `
          @media screen and (max-width: ${this.state.breakPoints.sm}px) {
            width: ${c};
          }
        `
      )
    }

    if (sm) {
      let c = cols[`col${sm}`]
      a.push(
        `
          @media screen and (max-width: ${this.state.breakPoints.xs}px) {
            width: ${c};
          }
        `
      )
    }
    return a
  }
  render() {
    let { gutter, span } = this.props
    let { cols } = this.state
    let spanPercent = span ? cols[`col${span}`] : null
    return (
      <div className={cx(css(this.classes()), css({
        paddingLeft: gutter,
        paddingRight: gutter,
        boxSizing: 'border-box',
        width: spanPercent
      }))}>
        {
          this.props.children
        }
      </div>
    )
  }
}

export default Col

Col.propTypes = {
  xl: PropTypes.number,
  lg: PropTypes.number,
  md: PropTypes.number,
  sm: PropTypes.number,
  span: PropTypes.number
}