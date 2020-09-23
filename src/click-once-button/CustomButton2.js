import React from 'react';
import { render } from 'react-dom';
import { sayHi } from './CustomButton';
class CustomButton2 extends React.Component {
  state = { cliked: false };
  // make a click handler
  handleClick = () => {
    // The handler won't be called if the button
    // is disabled, so if we got here, it's safe
    // to trigger the click.
    this.props.onClick();

    // Ok, no more clicking.
    this.setState({ clicked: true });
  };

  render() {
    return (
      <button onClick={this.handleClick} disabled={this.state.clicked}>
        You Can Only Click Me Once
      </button>
    );
  }
}

export default CustomButton2;

render(<CustomButton2 onClick={sayHi} />, document.getElementById('root'));
