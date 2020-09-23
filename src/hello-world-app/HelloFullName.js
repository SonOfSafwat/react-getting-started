import React from 'react';
import { render } from 'react-dom';
const HelloFullName = ({ firstName, lastName }) => {
  return (
    <div>
      Hello {firstName} {lastName}
    </div>
  );
};
export default HelloFullName;

render(
  <HelloFullName firstName="abdelrhman" lastName="Safwat"></HelloFullName>,
  document.getElementById('root')
);
