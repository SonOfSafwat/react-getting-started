import React from 'react';
import { render } from 'react-dom';
export function OneTimeButton(props) {
  return <button onClick={props.onClick}>You Can Only Click Me Once</button>;
}

export function sayHi() {
  console.log('yo');
}

render(<OneTimeButton onClick={sayHi()} />, document.getElementById('root'));
