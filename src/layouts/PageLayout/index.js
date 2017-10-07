import React from 'react'
import PropTypes from 'prop-types'
export default class PageLayout extends React.Component {
  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
PageLayout.propTypes = {
  children: PropTypes.any
}
