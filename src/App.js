import React from 'react'

import GrettingClass from './pages/GrettingClass'
import GrettingHook from './pages/GrettingHook'

const classComponentName = "root"

class App extends React.Component {
  render() {
    return (
      <div className={`${classComponentName}`}>
        <div className={`${classComponentName}__title`}>
          <h2 className="display-5">
            <strong><i>React Hooks</i> Demo</strong>
          </h2>
        </div>

        <div className={`${classComponentName}__exemplo`}>
          <div className={`${classComponentName}__container`}>
            <GrettingClass />
          </div>
          <div className={`${classComponentName}__container`}>
            <GrettingHook />
          </div>
        </div>
      </div>
    )
  }
}

export default App
