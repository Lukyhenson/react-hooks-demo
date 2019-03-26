import React from 'react'

import GrettingClass from './pages/GrettingClass'
import GrettingHook from './pages/GrettingHook'

const componetClassName = "root"

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state= {
        classTitle: "Class Component",
        hookTitle: "Hook Component"
      }
  }

  render() {
    return (
      <div className={`${componetClassName}`}>
        <div className={`${componetClassName}__title`}>
          <h2 className="display-5">
            <strong><i>React Hooks</i> Demo</strong>
          </h2>
        </div>

        <div className={`${componetClassName}__exemplo`}>
          <div className={`${componetClassName}__container`}>
            <h2 className={`${componetClassName}__container__title`}>{this.state.classTitle}</h2>
            <GrettingClass />
          </div>
          <div className={`${componetClassName}__container`}>
            <h2 className={`${componetClassName}__container__title`}>{this.state.hookTitle}</h2>
            <GrettingHook />
          </div>
        </div>
      </div>
    )
  }
}

export default App
