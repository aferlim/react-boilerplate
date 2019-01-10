import React, { Component } from 'react'

import { loadTodos } from './action'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class Dashboard extends Component {
  //   constructor (props) {
  //     super(props)
  //     // this.state = { messages: [], displaying: false }
  //   }

  componentDidMount () {
    this.props.loadTodos()
  }

  render () {
    return (
      <div>
        <h1>Dashboard test</h1>
      </div>
    )
  }
}

Dashboard.propTypes = {
  loadTodos: PropTypes.func.isRequired
}
const mapStateToProps = ({ todos }) => ({
  // messages: state.messages,
  todos
})

const mapDispatchToProps = dispatch => ({
  loadTodos: () => dispatch(loadTodos())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)
