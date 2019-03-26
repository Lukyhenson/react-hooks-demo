import React from 'react'
import PropTypes from 'prop-types'

function Row(props) {
  return (
    <React.Fragment>
      <h1>{props.label}</h1>
      <div>
        {props.children}
      </div>
    </React.Fragment>
  )
}

Row.propTypes = {
  label: PropTypes.string,
}

Row.defaultProps = {
  label: '',
}

export default Row
