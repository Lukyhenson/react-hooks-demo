import React from 'react'

class GrettingClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Class Component',
    }
  }

  render() {
    return (
      <section>
        <h1>{this.state.title}</h1>
      </section>
    )
  }
}

export default GrettingClass
