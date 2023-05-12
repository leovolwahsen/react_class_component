import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default class App extends React.Component {

  state = {
    improveReact : "Yes"
  }

  toggleImproveReact = () => {
    this.setState(prevState => {
      return {
        improveReact : prevState.improveReact  === "Yes" ? "No": "Yes"
      }
    })
  }

    render() {
      return ( 
        <div className='state'>
          <h1>Welcome to my {this.props.type} component!</h1>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
          <h2 className='state--title'>Should I learn some more React tonight?</h2>
          <div className='state--value' onClick={this.toggleImproveReact}>
             <button className='state--answer'>{this.state.improveReact}</button>
          </div>
      </div>
    )
  }
 }
