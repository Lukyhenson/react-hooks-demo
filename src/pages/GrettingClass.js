import '../styles/pages/gretting-class.scss'

import React from 'react'

import Row from '../components/Row'

class GrettingClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Mary',
      surname: 'Jane',
      width: window.innerWidth,
    }

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeSurname = this.handleChangeSurname.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  componentDidUpdate() {
    document.title = `${this.state.name} ${this.state.surname}`
  }

  handleChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }

  handleChangeSurname(e) {
    this.setState({
      surname: e.target.value
    })
  }

  handleResize() {
    this.setState({
      width: window.innerWidth
    })
  }

  render() {
    return (
      <React.Fragment>
        <section>
          <Row label="name">
            <input type="text" value={this.state.name} onChange={this.handleChangeName} />
          </Row>
          <Row label="surname">
            <input type="text" value={this.state.surname} onChange={this.handleChangeSurname} />
          </Row>
          <Row label="width">
            {this.state.width}
          </Row>
        </section>

        <div className="display-name">
          <Row>
            The current name is <strong><i>{`${this.state.name} ${this.state.surname}`}</i></strong>!
          </Row>
        </div>
      </React.Fragment>
    )
  }
}

export default GrettingClass
