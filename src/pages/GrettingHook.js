import '../styles/pages/gretting-hooks.scss'

import React from 'react'

import Row from '../components/Row'

function GrettingHook(props) {
  return (
    <section>
      <Row label="name">
        <input type="text" />
      </Row>
    </section>
  )
}

export default GrettingHook
