import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import './Cell.css'

class Cell extends Component {
  componentDidMount() {
    ReactDOM.findDOMNode(this.refs.cell).focus()
  }
  render(props) {
    // const { r, c } = this.props
    return (
      <div>
        <span>asdf:: </span>
        <span>asdf:: </span>
        <span>asdf:: </span>
        <span>asdf:: </span>
        <span>asdf:: </span>
        <span>asdf:: </span>
        <span>asdf:: </span>
        <span>asdf:: </span>
        <span>asdf:: </span>
        <span>asdf:: </span>
        <span>asdf:: </span>
        <span>asdf:: </span>
        <span>asdf:: </span>
        <span>asdf:: </span>
        <span>asdf:: </span>
      </div>
    )
  }
}

Cell.propTypes = {
  r: PropTypes.number.isRequired,
  c: PropTypes.number.isRequired,
}

export default Cell;
