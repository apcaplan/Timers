import React, { Component } from 'react';
import './App.css'
import { Route, Link } from 'react-router-dom'
import Countdown from './Countdown'
import Stopwatch from './Stopwatch'

class App extends Component {
  render() {
  return (
      <main className="App">
        <div className="Nav">
          <h1>Timers</h1>
          <Link className="Link" to='/Countdown'>
            <button>Countdown Timer</button>
          </Link>
          <Link className="Link" to='/Stopwatch'>
            <button>Stopwatch Timer</button>
          </Link>
        </div>
        <Route exact path='/Countdown' render={() => (
          <div>
            <Countdown />
          </div>
        )} />
        <Route exact path='/Stopwatch' render={() => (
          <div>
            <Stopwatch />
            </div>
        )} />
      </main>
  )
}
}

export default App
