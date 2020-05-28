import React, { Component } from 'react'
import './bulma.min.css'
// importing components
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Dashboard />
      </div>
    )
  }
}

export default App
