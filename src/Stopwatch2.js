import React, { Component } from 'react'

class Stopwatch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timerOn: false,
      count: 0
    }
  }

  startTimer = () => {
    this.SetState({
      timerOn: true
    })
    this.myInterval = setInterval(() => {
      this.setState(prevState => ({
      count: prevState.count + 1
    }))
    }, 1000)
  }

  stopTimer = () => {
    clearInterval(this.timer)
    this.setState({ timerOn: false })
  }

  render () {
    const { count } = this.state
    return (
      <div>
        <h1> Current Count: { count } </h1>
      </div>
    )
  }

  componentDidMount() {
    this.myInterval = setInterval(() => {
      this.setState(prevState => ({
      count: prevState.count + 1
    }))
  }, 1000)
}

componentWillUnmount() {
  clearInterval(this.myInterval)
  }
}

export default Stopwatch
