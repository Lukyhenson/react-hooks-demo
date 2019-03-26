import '../styles/pages/gretting-hooks.scss'

import React, { useState, useEffect } from 'react'

import Row from '../components/Row'


function GrettingHook() {

  const [name, setName] = useState('Peter')
  const [surname, setSurname] = useState('Parker')
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    document.title = `${name} ${surname}`
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  function handleChangeName(e) {
    setName(e.target.value)
  }

  function handleChangeSurname(e) {
    setSurname(e.target.value)
  }

  function handleResize() {
    setWidth(window.innerWidth)
  }

  return (
    <React.Fragment>
      <section>
        <Row label="name">
          <input type="text" value={name} onChange={handleChangeName} />
        </Row>
        <Row label="surname">
          <input type="text" value={surname} onChange={handleChangeSurname} />
        </Row>
        <Row label="width">
          {width}
        </Row>
      </section>

      <div className="display-name">
        <Row>
          The current name is <strong><i>{`${name} ${surname}`}</i></strong>!
        </Row>
      </div>
    </React.Fragment>
  )
}

export default GrettingHook
