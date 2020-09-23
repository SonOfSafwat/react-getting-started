import React from 'react';
import { render } from 'react-dom';
const Hi = (props) => {
  return <div>Hello, {props.name}</div>;
};

export default Hi;

render(<Hi name="Abdelrhman" />, document.getElementById('root'));
