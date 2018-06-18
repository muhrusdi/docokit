import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { css } from 'emotion'

class Row extends Component {
  render() {
    const { type, gutter, justify, align, styles } = this.props

    return (
      <div className={css({
        display: type,
        marginLeft: gutter ? -gutter : null,
        marginRight: gutter ? -gutter : null,
        flexFlow: 'row wrap',
        boxSizing: 'border-box',
        width: '100%',
        justifyContent: justify,
        alignItems: align})}>
        {
          React.Children.map(this.props.children, child => {
            return React.cloneElement(child, { gutter }) 
          })
        }
      </div>
    )
  }
}

export default Row

Row.propTypes = {
  type: PropTypes.string,
  gutter: PropTypes.number,
  justify: PropTypes.string,
  align: PropTypes.string,
  styles: PropTypes.object
}