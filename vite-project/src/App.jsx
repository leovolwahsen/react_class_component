import React, {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default class App extends React.Component {
  
  //const [goOut, setGoOut] = React.useState("Yes")

  state = {
    goOut: "Yes"
  }

  toggleGoOut() {
    setGoOut(prevState => {
      return prevState === "Yes" ? "No" : "Yes"
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
          <h2 className='state--title'>Should I go out tonight?</h2>
          <div className='state--value' onClick={this.toggleGoOut}>
             <h2>{this.state.goOut}</h2>
          </div>
      </div>
    )
  }
 }
