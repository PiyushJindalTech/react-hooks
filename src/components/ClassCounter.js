import React, { Component } from 'react'

export class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      initialCount: 0
    }
  }

  componentDidMount() {
    document.title = this.state.count;
  }

  shouldComponentUpdate() {
    console.log(this._initialValue);
    if (this.state.count <= 0 && this.state.initialCount != 0) {
      this.setState(prev => { return { ...prev, initialCount: prev.initialCount + 1 } })
      alert('can not decrement anymore');
      return false
    }

    else if (this.state.count >= 25) {
      alert('maxmium scrore can be 25');
      return false
    }
    return true;
  }

  componentDidUpdate() {
    document.title = this.state.count;
  }

  incrementCountHandler = () => {
    this.setState(prev => { return { ...prev, count: prev.count + 1 } })
  }

  decrementCountHandler = () => {
    this.setState(prev => { return { ...prev, count: prev.count - 1 } })
  }

  incrementByFiveHandler = () => {
    for (let i = 0; i < 5; i++) {
      this.setState(prev => { return { ...prev, count: prev.count + 1 } })
    }
  }

  componentWillUnmount() {
    
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.incrementCountHandler}>Increment</button>
        <button onClick={this.decrementCountHandler}>Decrement</button>
        <button onClick={this.incrementByFiveHandler}>incrementBy5</button>
      </div >
    )
  }
}

export default ClassCounter
