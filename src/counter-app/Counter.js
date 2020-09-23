import React, { Component } from 'react';
import { render } from 'react-dom';
import './counter.css';
class Counter extends Component {
  constructor(props) {
    super(props);

    // Must initialize state first
    this.state = { count: 0 };
  }

  handleClick() {
    // Increment the count when the button is clicked
    this.setState(
      {
        count: this.state.count + 1,
      },
      function () {
        // setState is asynchronous! This function gets called
        // when it's finished.
        console.log("Job's done");
      }
    );
  }

  render() {
    return (
      <div className="app">
        <div className="click-count">Button presses: {this.state.count}</div>
        <button onClick={this.handleClick.bind(this)}>Add One</button>
      </div>
    );
  }
}
export default Counter;

render(<Counter />, document.getElementById('root'));
