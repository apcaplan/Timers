import React, { Component } from 'react'

class Stopwatch extends Component {
    state = {
      timerOn: false,
      count: 0
    }

  startTimer = () => {
    this.setState({
      timerOn: true
    })
    this.timer = setInterval(() => {
      this.setState(prevState => ({
      count: prevState.count + 1
    }))
    }, 1000)
  }

  stopTimer = () => {
    clearInterval(this.timer)
    this.setState({ timerOn: false })
  }

  resetTimer = () => {
    if (this.state.timerOn === false) {
      this.setState({
        count: 0
      })
    }
  }

  render () {
    const { count, timerOn } = this.state
    let seconds = ("0" + (Math.floor(count % 60) % 60)).slice(-2)
    let minutes = ("0" + Math.floor((count / 60) % 60)).slice(-2)
    let hours = ("0" + Math.floor((count / 3600) % 60)).slice(-2)


    return (
      <div className="Timer">
        <div className="Stopwatch-header">Stopwatch</div>
        <div className="Stopwatch-display">
          { hours } : { minutes } : { seconds }
        </div>

      {timerOn === false && count === 0 &&
        (<button className="Button-start" onClick={ this.startTimer }>Start</button>
      )}
      {timerOn === true &&
        (<button className="Button-stop" onClick={ this.stopTimer }>Stop</button>
      )}
      {timerOn === false && count > 0 &&
        (<button className="Button-start" onClick={ this.startTimer }>Continue</button>
      )}
      {timerOn === false && count > 0 &&
        (<button className="Button-reset" onClick={ this.resetTimer }>Reset</button>
      )}
      </div>
    )
  }
}

export default Stopwatch
