import React from 'react'

import GrettingClass from './pages/GrettingClass'
import GrettingHook from './pages/GrettingHook'

class App extends React.Component {
  render() {
    return (
      <div>
        React Hooks Demo

        <GrettingClass />
        <GrettingHook />
      </div>
    )
  }
}

export default App
