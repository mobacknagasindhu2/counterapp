import React, { Component } from 'react';
import './index.css'

export class Counter extends Component {
  state = {count : 0}
  onIncrement=() => {
    this.setState((prevState) => {
      return {count : prevState.count + 1}

    })
    
  }
  onRest=() => {
    this.setState((prevState) => {
      return {count :  0 }

    })
    
  }
  onDecrement = () => {
    this.setState((prevState) => {
      return {count : prevState.count -1 }

    })
    
  
  }
  render() {
    const {count} = this.state
    return (
      <div>
      
    <div className="card">

<h1 className = "car">Counter</h1>
<p className = "pra">{count}</p>
<div className="ca">

<button className='button' onClick= {this.onIncrement}>Increase</button>
<button className='button' onClick= {this.onRest}>Reset</button>

 
<button  className='button' onClick = {this.onDecrement}>Decrease</button>


</div>

</div>
        
      </div>
    )
  }
}

export default Counter
