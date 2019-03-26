import '../styles/components/row.scss'

import React from 'react'
import PropTypes from 'prop-types'

const componetClassName = 'row';

function Row(props) {
  return (
    <React.Fragment>
      <h1 className={`${componetClassName}__label`}>{props.label}</h1>
      <div className={`${componetClassName}__children`}>
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
